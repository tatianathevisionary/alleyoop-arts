import os
import torch
import torch.nn as nn
import torch.nn.functional as F
from torchvision import transforms
from PIL import Image
import cv2
import numpy as np
from tqdm import tqdm
from pathlib import Path
import argparse
from basicsr.archs.rrdbnet_arch import RRDBNet
from realesrgan import RealESRGANer
from gfpgan import GFPGANer

# Model URLs for different Real-ESRGAN variants
MODEL_URLS = {
    'general': 'https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesr-general-x4v3.pth',
    'anime': 'https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.2.4/RealESRGAN_x4plus_anime_6B.pth',
    'compact': 'https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesr-general-wdn-x4v3.pth'
}

def load_upscaler(scale_factor=4, model_type='general'):
    """Load the Real-ESRGAN upscaler model with specified type and settings."""
    # Select model architecture based on type
    if model_type == 'anime':
        model = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64, num_block=6, num_grow_ch=32, scale=4)
    else:  # general or compact
        model = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64, num_block=23, num_grow_ch=32, scale=4)
    
    upsampler = RealESRGANer(
        scale=scale_factor,
        model_path=MODEL_URLS[model_type],
        model=model,
        tile=400,  # Use tiling to handle large images
        tile_pad=10,
        pre_pad=0,
        half=True if torch.cuda.is_available() else False  # Use half precision on GPU
    )
    return upsampler

def load_face_enhancer():
    """Load the GFPGAN face enhancement model."""
    face_enhancer = GFPGANer(
        model_path='https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.3.pth',
        upscale=1,
        arch='clean',
        channel_multiplier=2,
        bg_upsampler=None
    )
    return face_enhancer

def enhance_image(image, face_enhancer=None, enhance_faces=True, enhance_colors=True, enhance_details=True):
    """Apply advanced image enhancement techniques with configurable options."""
    enhanced = image.copy()
    
    if enhance_colors:
        # Convert to LAB color space
        lab = cv2.cvtColor(enhanced, cv2.COLOR_BGR2LAB)
        
        # Split channels
        l, a, b = cv2.split(lab)
        
        # Apply CLAHE to L channel with higher clip limit
        clahe = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8,8))
        l = clahe.apply(l)
        
        # Merge channels
        enhanced_lab = cv2.merge((l, a, b))
        
        # Convert back to BGR
        enhanced = cv2.cvtColor(enhanced_lab, cv2.COLOR_LAB2BGR)
    
    if enhance_details:
        # Apply adaptive sharpening
        gray = cv2.cvtColor(enhanced, cv2.COLOR_BGR2GRAY)
        variance = np.var(gray)
        if variance < 1000:  # Only sharpen if image isn't already too sharp
            kernel = np.array([[-1,-1,-1], [-1,9,-1], [-1,-1,-1]]) / 9.0
            enhanced = cv2.filter2D(enhanced, -1, kernel)
    
    if enhance_faces and face_enhancer is not None:
        try:
            _, _, enhanced = face_enhancer.enhance(
                enhanced,
                has_aligned=False,
                only_center_face=False,
                paste_back=True
            )
        except Exception as e:
            print(f"Face enhancement failed: {str(e)}")
    
    return enhanced

def upscale_image(image_path, output_path, scale_factor=4, model_type='general', 
                 enhance=True, enhance_faces=True, enhance_colors=True, enhance_details=True):
    """Upscale a single image with configurable enhancement options."""
    # Load image
    img = cv2.imread(image_path)
    if img is None:
        print(f"Error: Could not load image {image_path}")
        return
    
    # Initialize models
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    upsampler = load_upscaler(scale_factor, model_type)
    face_enhancer = load_face_enhancer() if enhance and enhance_faces else None
    
    # Upscale
    try:
        output, _ = upsampler.enhance(img, outscale=scale_factor)
    except Exception as e:
        print(f"Upscaling failed: {str(e)}")
        return
    
    # Apply enhancement if requested
    if enhance:
        output = enhance_image(output, face_enhancer, enhance_faces, 
                             enhance_colors, enhance_details)
    
    # Save the result
    cv2.imwrite(output_path, output)
    print(f"Saved upscaled image to {output_path}")

def process_image_with_all_models(image_path, output_base_dir, scale_factor=4,
                                enhance=True, enhance_faces=True,
                                enhance_colors=True, enhance_details=True):
    """Process a single image with all available models."""
    filename = os.path.basename(image_path)
    
    for model_type in ['general', 'anime', 'compact']:
        # Create model-specific output directory
        model_output_dir = os.path.join(output_base_dir, f"upscaled_{model_type}")
        os.makedirs(model_output_dir, exist_ok=True)
        
        # Generate output path
        output_path = os.path.join(model_output_dir, f"upscaled_{filename}")
        
        print(f"\nProcessing with {model_type} model...")
        upscale_image(
            image_path, output_path, scale_factor, model_type,
            enhance, enhance_faces, enhance_colors, enhance_details
        )

def process_directory(input_dir, output_base_dir, scale_factor=4,
                    enhance=True, enhance_faces=True,
                    enhance_colors=True, enhance_details=True):
    """Process all images in a directory with all available models."""
    # Get all image files
    image_extensions = ('.jpg', '.jpeg', '.png', '.bmp', '.tiff')
    image_files = [f for f in os.listdir(input_dir) 
                  if f.lower().endswith(image_extensions)]
    
    print(f"Found {len(image_files)} images to process")
    print(f"Will process each image with general, anime, and compact models")
    print(f"Results will be saved in separate directories under {output_base_dir}")
    
    # Process each image with all models
    for filename in tqdm(image_files, desc="Processing images"):
        input_path = os.path.join(input_dir, filename)
        process_image_with_all_models(
            input_path, output_base_dir, scale_factor,
            enhance, enhance_faces, enhance_colors, enhance_details
        )

def main():
    parser = argparse.ArgumentParser(description='Upscale and enhance poster images with multiple models')
    parser.add_argument('--input', type=str, required=True,
                      help='Input directory containing images')
    parser.add_argument('--output', type=str, required=True,
                      help='Base output directory for upscaled images')
    parser.add_argument('--scale', type=int, default=4,
                      help='Upscaling factor (default: 4, max: 16)')
    parser.add_argument('--no-enhance', action='store_true',
                      help='Disable all enhancements')
    parser.add_argument('--no-faces', action='store_true',
                      help='Disable face enhancement')
    parser.add_argument('--no-colors', action='store_true',
                      help='Disable color enhancement')
    parser.add_argument('--no-details', action='store_true',
                      help='Disable detail enhancement')
    
    args = parser.parse_args()
    
    # Limit scale factor to 16x for stability
    scale_factor = min(args.scale, 16)
    if scale_factor != args.scale:
        print(f"Warning: Scale factor limited to {scale_factor}x for stability")
    
    process_directory(
        args.input,
        args.output,
        scale_factor=scale_factor,
        enhance=not args.no_enhance,
        enhance_faces=not args.no_faces,
        enhance_colors=not args.no_colors,
        enhance_details=not args.no_details
    )

if __name__ == "__main__":
    main() 
import os
import cv2
import numpy as np
from realesrgan import RealESRGANer
from basicsr.archs.rrdbnet_arch import RRDBNet

def create_test_image(size=(100, 100)):
    """Create a simple test image if no real image is available."""
    # Create a gradient
    x = np.linspace(0, 1, size[0])
    y = np.linspace(0, 1, size[1])
    X, Y = np.meshgrid(x, y)
    gradient = (X + Y) / 2.0
    
    # Create RGB image
    test_img = np.stack([gradient * 255] * 3, axis=-1).astype(np.uint8)
    return test_img

def load_model():
    """Load the anime model with optimal settings."""
    print("\nLoading anime model...")
    
    # Model architecture settings for anime model
    model = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64, num_block=23, num_grow_ch=32, scale=4)
    
    # Model URL for anime model
    model_url = 'https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.2.4/RealESRGAN_x4plus_anime_6B.pth'
    
    # Create upsampler with optimal settings
    upsampler = RealESRGANer(
        scale=4,
        model_path=model_url,
        model=model,
        tile=400,
        tile_pad=10,
        pre_pad=0,
        half=False  # Disable half precision to avoid CPU issues
    )
    
    return upsampler

def test_upscaler():
    """Test the upscaler with the anime model."""
    # Create output directory
    os.makedirs('test_results', exist_ok=True)
    
    # Try to load a poster from the top posters directory
    top_posters_dir = 'top posters'
    test_img = None
    test_file = None
    
    if os.path.exists(top_posters_dir):
        for file in os.listdir(top_posters_dir):
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                test_file = os.path.join(top_posters_dir, file)
                test_img = cv2.imread(test_file)
                if test_img is not None:
                    print(f"Using poster: {test_file}")
                    break
    
    # If no poster found, create a test image
    if test_img is None:
        print("No test image found, creating synthetic test image...")
        test_img = create_test_image()
        cv2.imwrite('test_results/input.png', test_img)
        print("Saved synthetic test image as 'test_results/input.png'")
    else:
        # Save input image for reference
        cv2.imwrite('test_results/input.png', test_img)
        print("Saved input image as 'test_results/input.png'")
    
    try:
        print("\nTesting anime model:")
        
        # Load model
        upsampler = load_model()
        print("✓ Successfully loaded anime model")
        
        # Upscale image
        output, _ = upsampler.enhance(test_img, outscale=4)
        print(f"✓ Successfully upscaled image from {test_img.shape} to {output.shape}")
        
        # Save result
        output_path = 'test_results/upscaled_anime.png'
        cv2.imwrite(output_path, output)
        print(f"✓ Saved result to {output_path}")
        
    except Exception as e:
        print(f"✗ Error with anime model: {str(e)}")

if __name__ == "__main__":
    print("Starting upscaler test...")
    test_upscaler() 
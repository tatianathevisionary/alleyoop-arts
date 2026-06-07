#!/usr/bin/env python3
"""
Alleyoop Arts — Launch 12 poster generator (painterly + cartoon lanes).

Usage:
  python scripts/generate_alleyoop_launch12.py --dry-run
  python scripts/generate_alleyoop_launch12.py --lane painterly --model flux-2-pro
  python scripts/generate_alleyoop_launch12.py --lane cartoon --model flux-2-max --workers 4
  python scripts/generate_alleyoop_launch12.py --lane all --model flux-2-pro --width 1024 --height 1536

Notes:
  - Defaults target a 2:3 poster ratio (1024x1536). Upscale later for print.
  - Prompts are written for FLUX.2 [pro/max]. Typography is intentionally avoided.
"""

import argparse
import json
import os
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import Dict, List

import requests


MODEL_COST = {
    "flux-2-max": 0.08,
    "flux-2-pro": 0.03,
    "flux-2-flex": 0.05,
    "flux-2-klein-9b": 0.015,
}

CONSISTENCY_SUFFIX = (
    "All uniforms are generic and unbranded, using abstract geometric patterns instead of lettering. "
    "The scene contains no typography, logos, brand marks, signatures, or watermarks. "
    "Keep the poster border clean and free of any extra marks. "
    "Designed to read instantly at thumbnail size but hold up as premium wall art at full scale."
)


def _p(slug: str, body: str) -> Dict[str, str]:
    return {"slug": slug, "prompt": f"{body.strip()} {CONSISTENCY_SUFFIX}".strip()}


PAINTERLY: List[Dict[str, str]] = [
    _p(
        "01_alley_runner_maze_jump_shot_painterly",
        """
Poster artwork of a lone basketball player rising into a jump shot inside a towering geometric maze, the court and labyrinth fused into one sunlit architecture.
The player is the single dominant subject, captured mid-release with a clean, decisive silhouette; the ball arc is bright, simple, and unmistakable as it travels toward a distant hoop framed between maze walls.
Style: painterly modern poster with subtle paper grain and crisp graphic edges.
Setting: a monumental maze-court canyon with tall angular walls, long corridor perspective, and strong floor geometry.
Color palette: #2B5D4B (maze teal walls), #40815D (court green floor), #EE9933 (ball and rim energy accents), #E0EBBF (sunlight hitting edges and floor), #1E3834 (deep shadow planes). Assign each color clearly to objects.
Lighting: golden hour sunlight slicing diagonally across the court, long architectural shadows, gentle haze in the distance.
Composition: portrait 2:3, high-angle perspective, one strong focal point, clean negative space in the top 15%, readable body gesture, premium poster framing.
Technical: print-friendly detail, clean silhouette, subtle paper texture, modern collectible sports art.
""",
    ),
    _p(
        "02_birds_eye_court_overhead_diagram_painterly",
        """
Painterly poster of an outdoor basketball court seen from a dramatic bird's-eye view, reading like a map, a diagram, and a memory all at once.
The court is the sole subject, with crisp markings, simplified forms, and tree shadows drifting across the surface like moving graphic shapes.
Style: painterly modern poster with calm overhead design language and subtle paper texture.
Setting: an outdoor neighborhood court surrounded by soft tree canopies; the geometry of the court treated as elegant graphic design.
Color palette: #333D38 (deep green-gray shadows and outer border), #64714D (olive foliage and peripheral forms), #E09432 (ochre key area and warm painted markings), #F2E9C7 (sunlit highlights and faded paint warmth), #88BBCC (sky-blue atmosphere).
Lighting: bright midday sun with dappled tree shade, crisp but natural shadow edges, warm summer clarity.
Composition: portrait 2:3, overhead layout, clean court geometry centered, instantly readable from a thumbnail.
Technical: refined brushwork, premium poster design, print-friendly surface detail, subtle grain.
""",
    ),
    _p(
        "03_graffiti_wall_legend_street_mural_collage_painterly",
        """
Street mural collage poster of a basketball player seen from behind, standing before a layered graffiti wall like a streetball monument.
The figure is calm and iconic, while the environment carries the energy: torn wheatpaste layers, paint drips, halftones, scuffed edges, and bold graphic fragments.
The basketball floats nearby as a simplified glowing icon.
Style: collage street mural with authentic urban texture, premium poster composition, crisp silhouette.
Setting: a sunlit city wall built from layered posters, spray paint, rough plaster, ripped paper, and weathered street surfaces.
Color palette: #FF4FA3 (hot magenta wall blocks and graphic bursts), #0A85BB (spray cyan accents and linework), #F49B48 (tangerine highlights and ball glow), #413C44 (asphalt shadows and grounding structure), #F2E9C7 (paper base and torn poster layers).
Lighting: high-contrast daylight hitting the wall frontally, shapes graphic and legible.
Composition: portrait 2:3, player as the dominant silhouette, negative space near the top for optional typography later.
Technical: premium print look, crisp edges, layered analog texture.
""",
    ),
    _p(
        "04_neon_rim_portal_rainy_night_painterly",
        """
Cinematic neon night poster of a basketball hoop and backboard glowing like a portal above a wet outdoor court.
The hoop is the single subject, hovering in an atmosphere of rain mist, reflected light, and deep night air: mythic and minimal at once.
Style: neon night cinematic poster with subtle film grain and paper texture.
Setting: an empty outdoor court at night after rain, reflective puddles, soft atmospheric particles, clean negative space surrounding the glowing hoop.
Color palette: #251E4A (midnight violet sky and background depth), #3A6DB0 (electric blue haze and reflective ambience), #E2726D (neon coral rim and backboard glow), #DE7B7F (soft bloom and luminous highlights), #0B0B14 (near-black shadows and court depth).
Lighting: low-key rainy night, neon edge glow, reflected light blooming across puddles, soft mist catching illumination.
Composition: portrait 2:3, hoop placed high and iconic, generous negative space, immediate readability.
Technical: premium poster art, believable reflective surfaces, restrained cinematic atmosphere.
""",
    ),
    _p(
        "05_the_call_referee_at_the_junction_painterly",
        """
Modern poster art of a referee making a decisive call at a maze intersection, where basketball rules and labyrinth pressure collide.
The referee is the hero subject, frozen in a sharp moment of body language, one arm extended, whistle and signal commanding the scene.
The maze corridors and distant crowd reduce into clean graphic structure behind them.
Style: painterly modern poster with graphic clarity and subtle paper grain.
Setting: a geometric basketball maze intersection with corridor depth and simplified crowd blocks in the distance.
Color palette: #2B5D4B (maze walls and structure), #88BBCC (ambient air and distant openness), #EE9933 (whistle or signal accent), #F2E9C7 (sunlit highlights and arena brightness), #223333 (grounding shadows and contrast).
Lighting: bright high-key arena light with directional contrast sculpting the pose.
Composition: portrait 2:3, referee as the sole focal point, readable silhouette, breathing room at top.
Technical: premium poster design, print-friendly detail, clean athletic uniform shapes.
""",
    ),
    _p(
        "06_kaleidoscope_crowd_fans_as_color_blocks_painterly",
        """
Poster artwork of a maze corridor transformed by cheering fans rendered as bold color-block silhouettes, creating a kaleidoscope wall of celebration that pushes the action forward.
The crowd becomes the design system: banners, confetti, arms raised, simplified shapes, all framing a narrow player pathway through the center.
Style: graphic modern poster with collage-like celebration textures and subtle paper surface.
Setting: corridor-like basketball maze lined with abstract fans, banners, and stadium fragments, energetic but organized.
Color palette: #2B5D4B (maze structure), #88BBCC (ambient air), #EE9933 (energy accents and celebratory streaks), #FF4FA3 (graphic pops and crowd bursts), #F2E9C7 (highlight wash and soft light planes).
Lighting: bright stadium lighting with clean contrast, vivid but controlled.
Composition: portrait 2:3, strong central lane and focal direction, readable from thumbnail, negative space preserved at top.
Technical: premium poster art, crisp shapes, celebratory detail without clutter.
""",
    ),
    _p(
        "07_lost_ball_mystery_scavenger_hunt_painterly",
        """
Surreal modern poster of a single lost basketball resting at the center of an intricate geometric maze, treated like the engine of a mystery story.
The ball is the clear focal point, while symbolic clues (chalk arrows, simple icons, directional marks, fragments of court lines) guide the eye inward through the labyrinth.
Style: painterly graphic poster with subtle paper grain and controlled surrealism.
Setting: a maze-court hybrid viewed with elegant depth and clean structure, designed for readability rather than complexity overload.
Color palette: #2B5D4B (maze walls and main structure), #223333 (shadow depth and hidden corners), #88BBCC (soft clue glow and atmospheric separation), #EE9933 (basketball visual anchor), #F2E9C7 (paper warmth and highlighted path edges).
Lighting: soft directional light with gentle haze, enough contrast to make the ball feel discovered and important.
Composition: portrait 2:3, ball as hero object, strong path lines, minimal clutter, quiet suspense.
Technical: premium print look, clean focal hierarchy, readable symbolic detail.
""",
    ),
    _p(
        "08_close_up_hoop_product_poster_simplicity_painterly",
        """
Bold minimalist poster of a basketball hoop in close-up, reduced to pure signal: rim, net, geometry, sky, and space.
The hoop fills the frame with iconic clarity, every line intentional, every surface clean and graphic.
Style: modern minimalist poster with crisp edges, subtle paper texture, and refined contrast.
Setting: isolated hoop detail against a simple controlled background gradient, no visual noise.
Color palette: #223333 (charcoal background and structural contrast), #88BBCC (sky gradient and open air), #EE9933 (rim as the key accent), #F2E9C7 (net highlights and soft glow), #2B5D4B (secondary accents and shadow tint).
Lighting: clean studio-like daylight with sharp contrast and elegant highlight control.
Composition: portrait 2:3, close crop, strong negative space, geometric emphasis, iconic simplicity.
Technical: premium collectible poster art, print-friendly sharpness.
""",
    ),
    _p(
        "09_street_game_california_neighborhood_painterly",
        """
Bright modern poster of a street basketball game unfolding on an outdoor court in a California neighborhood, full of warmth, rhythm, and community energy.
The figures are simplified into clear athletic gestures, while palms, mural walls, chain-link hints, and painted asphalt create a sun-drenched backdrop.
Style: painterly modern poster with light mural texture and subtle paper grain.
Setting: neighborhood outdoor court with palm silhouettes, low buildings, warm pavement, and hints of painted walls.
Color palette: #88BBCC (open sky and distance), #2B5D4B (greens and structure), #EE9933 (warm accents and ball), #F2E9C7 (sun haze and bright planes), #413C44 (asphalt shadows and grounding tones).
Lighting: golden hour California sunlight, long warm shadows, optimistic haze, crisp silhouettes.
Composition: portrait 2:3, one main action cluster, strong negative space at top, instant thumbnail impact.
Technical: premium poster art, inclusive and upbeat.
""",
    ),
    _p(
        "10_perfect_pass_arc_through_the_alley_painterly",
        """
Graphic modern poster of a basketball making a perfect pass through a narrow alley-like maze corridor, with the ball's trajectory rendered as a clean ribbon of motion slicing through space.
The pass is the hero, the maze is the pressure, and the players reduce into simple elegant silhouettes supporting the movement.
Style: graphic modern poster with crisp motion design and subtle paper texture.
Setting: angular maze corridor with court markings integrated into the ground plane, designed to feel like an alley and a play diagram at once.
Color palette: #2B5D4B (maze teal walls), #334444 (deep neutral shadows and corridor depth), #88BBCC (ambient air and separation), #EE9933 (ball and trajectory ribbon), #F2E9C7 (highlight wash and light-struck edges).
Lighting: high-key directional light, clear contrast, enough brightness to keep the pass line luminous and dominant.
Composition: portrait 2:3, motion arc as the central graphic element, negative space near the top.
Technical: premium poster print look, crisp edges, highly legible motion.
""",
    ),
    _p(
        "11_mirrored_shot_reflection_symmetry_painterly",
        """
Elegant modern poster of a basketball player taking a jump shot above a wet reflective court, creating a near-perfect mirrored world beneath them.
The reflection is treated as visual poetry rather than pure realism, with the maze walls framing both realities in clean geometric balance.
Style: painterly modern poster with subtle film grain and premium paper texture.
Setting: reflective outdoor court bordered by tall maze-like walls, minimal but carefully structured.
Color palette: #2B5D4B (maze teal walls and framing planes), #88BBCC (cool reflection tint and atmosphere), #EE9933 (ball and rim accents), #F2E9C7 (soft highlights and reflected light), #223333 (shadow depth and compositional grounding).
Lighting: soft overcast light with glossy reflections, restrained contrast, luminous surface sheen.
Composition: portrait 2:3, centered or near-centered symmetry, one player as dominant subject, calm negative space, wall-art elegance.
Technical: premium poster art, print-friendly reflective detail, readable pose.
""",
    ),
    _p(
        "12_clinic_day_community_growth_painterly",
        """
Uplifting modern poster of a youth basketball clinic in a sunny park, focused on mentorship, motion, and encouragement.
Coaches guide players through simple drills, and every figure is posed with clear, readable gesture so the image feels hopeful, instructional, and alive rather than crowded.
Style: painterly modern poster with soft paper grain and clean athletic silhouettes.
Setting: bright outdoor park court with trees, open sky, and simplified practice equipment or cones, designed with clarity and warmth.
Color palette: #88BBCC (sky and open air), #2B5D4B (greens and grounded structure), #64714D (olive shadows and foliage depth), #EE9933 (warm accents and training energy), #F2E9C7 (sunlit highlights and hopeful glow).
Lighting: bright high-key sunlight, soft warm shadows, clean optimistic summer atmosphere.
Composition: portrait 2:3, one central teaching moment, supporting figures arranged simply, negative space at top.
Technical: premium poster art, print-friendly detail, generic sportswear only.
""",
    ),
]

CARTOON: List[Dict[str, str]] = [
    _p(
        "01_alley_runner_maze_jump_shot_cartoon",
        """
Cartoon-style poster artwork of a basketball player leaping into a jump shot inside a towering geometric maze.
Style: bold editorial cartoon poster with exaggerated perspective, crisp outlines, flat graphic shadows, premium screenprint feel.
Setting: a sunlit maze-court canyon with tall simplified walls and a clear lane to the hoop.
Color palette: #2B5D4B (maze walls), #40815D (court floor), #EE9933 (ball and rim), #E0EBBF (sunlit highlights), #1E3834 (shadow shapes).
Lighting: dramatic golden hour with long simplified shadows cutting across the floor.
Composition: portrait 2:3, one dominant player, clear ball arc, negative space at top, instant readability.
Rendering: clean linework, controlled flat shading, subtle printed paper grain, collectible cartoon sports poster.
""",
    ),
    _p(
        "02_birds_eye_court_overhead_diagram_cartoon",
        """
Cartoon-style poster of an outdoor basketball court seen from a bird's-eye view, designed like a playful map.
Style: retro sports cartoon poster, simplified court geometry, flat color shapes, graphic tree shadows, warm print texture.
Setting: an outdoor park court surrounded by stylized trees and drifting shadow patterns.
Color palette: #333D38 (shadow areas), #64714D (foliage), #E09432 (key area and painted court accents), #F2E9C7 (sunlit surfaces), #88BBCC (open-air atmosphere).
Lighting: bright midday light with crisp dappled shade.
Composition: portrait 2:3, overhead layout, court as the single subject, clean and organized.
Rendering: crisp edges, flat shapes, premium risograph-style finish, subtle paper texture.
""",
    ),
    _p(
        "03_graffiti_wall_legend_cartoon",
        """
Cartoon-style poster of a basketball player seen from behind in front of a layered graffiti wall.
Style: street-art cartoon mural, thick graphic outlines, halftone overlays, torn paper textures, paint drips, premium poster finish.
Setting: urban wall collage with spray shapes, ripped poster layers, and graphic mural fragments.
Color palette: #FF4FA3 (wall bursts), #0A85BB (spray accents), #F49B48 (ball and highlights), #413C44 (asphalt shadows), #F2E9C7 (paper base).
Lighting: bright daylight with strong contrast and graphic clarity.
Composition: portrait 2:3, iconic rear-view silhouette, open band of negative space above.
Rendering: thick linework, flat color fields, layered print texture, collectible mural-poster aesthetic.
""",
    ),
    _p(
        "04_neon_rim_portal_cartoon",
        """
Cartoon-style poster of a glowing basketball hoop and backboard floating like a portal above a wet outdoor court at night.
Style: surreal comic-book poster, clean outlines, luminous neon glow, reflective puddles, cinematic cartoon minimalism.
Setting: empty rainy court with mist, reflections, and a single mythic hoop.
Color palette: #251E4A (night sky), #3A6DB0 (electric haze), #E2726D (rim and portal glow), #DE7B7F (light bloom), #0B0B14 (deep shadow).
Lighting: low-key neon night with dramatic rim light and glowing reflections.
Composition: portrait 2:3, hoop high in frame, large negative space, immediate silhouette.
Rendering: crisp contour lines, flat-plus-glow shading, subtle grain, premium animated-poster finish.
""",
    ),
    _p(
        "05_the_call_referee_cartoon",
        """
Cartoon-style poster of a referee making a decisive call at a geometric maze intersection.
Style: bold editorial cartoon, expressive body language, graphic shadow shapes, premium print-poster clarity.
Setting: simplified basketball labyrinth with corridor depth and abstract crowd blocks in the distance.
Color palette: #2B5D4B (maze walls), #88BBCC (ambient air), #EE9933 (whistle and signal accent), #F2E9C7 (lit surfaces), #223333 (shadow contrast).
Lighting: bright arena-style light with sharp simplified shadow edges.
Composition: portrait 2:3, referee as sole focal point, clear pose readability, top breathing room.
Rendering: controlled outlines, flat shading, subtle paper texture, collectible cartoon sports print.
""",
    ),
    _p(
        "06_kaleidoscope_crowd_cartoon",
        """
Cartoon-style poster of a basketball maze corridor lined with cheering fans rendered as bold color-block silhouettes.
Style: graphic mural cartoon, energetic shapes, confetti accents, layered celebration textures, poster-print precision.
Setting: corridor-like court passage framed by abstract fans, banners, and cheering forms.
Color palette: #2B5D4B (maze structure), #88BBCC (ambient air), #EE9933 (energy accents), #FF4FA3 (celebration pops), #F2E9C7 (light wash).
Lighting: bright stadium light, vivid and clean.
Composition: portrait 2:3, one clear path through the center, strong focal direction, readable from thumbnail.
Rendering: crisp edges, flat celebratory shapes, subtle halftones and paper grain.
""",
    ),
    _p(
        "07_lost_ball_mystery_cartoon",
        """
Cartoon-style poster of a lost basketball resting at the center of an intricate maze, surrounded by playful clue symbols.
Style: retro-surreal cartoon poster, clean geometric forms, symbolic arrows and chalk marks, premium graphic print feel.
Setting: simplified maze-court hybrid with elegant path design and mystery-story energy.
Color palette: #2B5D4B (maze walls), #223333 (shadow depth), #88BBCC (soft clue glow), #EE9933 (basketball focal point), #F2E9C7 (paper highlights).
Lighting: soft directional light with gentle atmospheric separation.
Composition: portrait 2:3, ball as central hero object, clean guiding pathways, minimal clutter.
Rendering: sharp outlines, controlled flat shading, subtle paper grain, collectible cartoon poster.
""",
    ),
    _p(
        "08_close_up_hoop_minimal_cartoon",
        """
Cartoon-style minimalist poster of a basketball hoop in close-up, reduced to pure iconic geometry.
Style: neo-toon minimal poster, ultra-clean curves, elegant flat shading, strong negative space, premium design object.
Setting: isolated hoop against a simple graphic sky gradient, no visual noise.
Color palette: #223333 (background and structural contrast), #88BBCC (sky gradient), #EE9933 (rim), #F2E9C7 (net highlights), #2B5D4B (secondary accents).
Lighting: clean daylight with sharp graphic contrast.
Composition: portrait 2:3, close crop, large negative space, strong iconic read.
Rendering: vector-clean linework, restrained flat shading, subtle paper texture, premium cartoon wall art.
""",
    ),
    _p(
        "09_street_game_california_cartoon",
        """
Cartoon-style poster of a lively street basketball game in a California neighborhood.
Style: bright editorial cartoon, playful motion, mural-inspired texture, warm nostalgic energy, premium art-print finish.
Setting: sunny outdoor court with stylized palm trees, painted walls, asphalt, and neighborhood structures.
Color palette: #88BBCC (sky), #2B5D4B (greens and structures), #EE9933 (ball and warm highlights), #F2E9C7 (sun haze), #413C44 (asphalt shadows).
Lighting: golden hour California light with long warm shadows.
Composition: portrait 2:3, one central action cluster, readable gestures, open upper space.
Rendering: crisp outlines, flat color blocks, subtle mural grain, collectible cartoon sports poster.
""",
    ),
    _p(
        "10_perfect_pass_arc_cartoon",
        """
Cartoon-style poster of a basketball making a perfect pass through a narrow alley-like maze corridor, the ball trail rendered as a clean ribbon.
Style: graphic comic poster, exaggerated motion design, elegant silhouettes, premium screenprinted finish.
Setting: angular alley-maze with simplified court markings and defensive pressure implied by the space itself.
Color palette: #2B5D4B (maze walls), #334444 (deep neutral shadows), #88BBCC (air and distance), #EE9933 (ball and trajectory arc), #F2E9C7 (highlight planes).
Lighting: bright directional light with strong graphic separation.
Composition: portrait 2:3, ribbon pass arc as the main visual event, minimal clutter, top negative space.
Rendering: clean linework, flat shadows, subtle paper texture, highly legible motion-poster design.
""",
    ),
    _p(
        "11_mirrored_shot_symmetry_cartoon",
        """
Cartoon-style poster of a basketball player taking a jump shot above a wet reflective court, creating a near-perfect mirrored scene.
Style: elegant surreal cartoon poster, simplified symmetry, calm geometry, reflective graphic shapes, premium print finish.
Setting: maze-framed outdoor court with glossy reflective ground and minimal background distraction.
Color palette: #2B5D4B (maze framing), #88BBCC (reflection tint), #EE9933 (ball and rim), #F2E9C7 (soft highlights), #223333 (shadow depth).
Lighting: soft overcast light with luminous reflections and restrained contrast.
Composition: portrait 2:3, centered symmetry, one dominant player, clear mirrored structure.
Rendering: clean contours, controlled flat shading, subtle grain, refined cartoon wall art.
""",
    ),
    _p(
        "12_clinic_day_community_growth_cartoon",
        """
Cartoon-style poster of a youth basketball clinic in a sunny park, full of warmth, mentorship, and clear instructional motion.
Style: optimistic editorial cartoon, simplified figures, soft mural texture, premium poster design.
Setting: outdoor practice court with trees, open sky, and a few simple drill markers.
Color palette: #88BBCC (sky), #2B5D4B (greens), #64714D (olive shadow), #EE9933 (warm accents), #F2E9C7 (sunlit highlights).
Lighting: bright high-key sunlight with soft warm shadow shapes.
Composition: portrait 2:3, one central coaching interaction, supporting figures arranged simply, easy thumbnail read.
Rendering: crisp outlines, flat color blocking, subtle paper grain, collectible cartoon sports poster.
""",
    ),
]


def load_api_key(env_path: Path) -> str:
    key = os.environ.get("BFL_API_KEY")
    if key:
        return key
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            stripped = line.strip()
            if stripped.startswith("BFL_API_KEY="):
                return stripped.split("=", 1)[1].strip().strip('"').strip("'")
    return ""


def generate_image(api_key: str, model: str, prompt: str, width: int, height: int) -> str:
    headers = {"x-key": api_key, "Content-Type": "application/json"}
    payload = {
        "prompt": prompt,
        "width": width,
        "height": height,
        "output_format": "png",
        "safety_tolerance": 2,
    }
    resp = requests.post(
        f"https://api.bfl.ai/v1/{model}",
        headers=headers,
        data=json.dumps(payload),
        timeout=30,
    )
    resp.raise_for_status()
    polling_url = resp.json().get("polling_url")
    if not polling_url:
        raise RuntimeError(f"No polling_url: {resp.json()}")

    while True:
        r = requests.get(polling_url, headers={"x-key": api_key}, timeout=30)
        r.raise_for_status()
        data = r.json()
        status = data.get("status")
        if status == "Ready":
            url = data.get("result", {}).get("sample")
            if not url:
                raise RuntimeError(f"No sample URL: {data}")
            return url
        if status == "Error":
            raise RuntimeError(f"Generation error: {data}")
        time.sleep(2)


def download_image(url: str, out_path: Path) -> None:
    resp = requests.get(url, timeout=60)
    resp.raise_for_status()
    out_path.write_bytes(resp.content)


def process_one(api_key: str, model: str, item: Dict[str, str], width: int, height: int, out_dir: Path) -> Path:
    out_path = out_dir / f"{item['slug']}.png"
    if out_path.exists():
        print(f"  ⏭  [skip] {out_path.name}")
        return out_path
    print(f"  🔄 [gen]  {item['slug']} ({width}x{height}) ...")
    url = generate_image(api_key, model, item["prompt"], width, height)
    download_image(url, out_path)
    print(f"  ✅ [done] {out_path.name}")
    return out_path


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate Alleyoop Arts Launch 12 posters via BFL FLUX.")
    parser.add_argument("--model", default="flux-2-pro", choices=sorted(MODEL_COST.keys()))
    parser.add_argument("--lane", default="painterly", choices=["painterly", "cartoon", "all"])
    parser.add_argument("--width", type=int, default=1024)
    parser.add_argument("--height", type=int, default=1536)
    parser.add_argument("--workers", type=int, default=4)
    parser.add_argument(
        "--limit",
        type=int,
        default=0,
        help="Generate only the first N prompts in the lane (default: 0 = no limit).",
    )
    parser.add_argument(
        "--slugs",
        default="",
        help="Comma-separated slugs to generate (overrides --limit). Example: 01_alley_runner_maze_jump_shot_painterly,04_neon_rim_portal_rainy_night_painterly",
    )
    parser.add_argument("--env", default="config/.env", help="Path to .env file with BFL_API_KEY")
    parser.add_argument("--out-dir", default="outputs/alleyoop-launch-12")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    if args.width <= 0 or args.height <= 0:
        raise SystemExit("width/height must be positive integers")

    if args.model not in MODEL_COST:
        raise SystemExit(f"Unknown model: {args.model}")

    jobs: List[Dict[str, str]] = []
    if args.lane in ("painterly", "all"):
        jobs += PAINTERLY
    if args.lane in ("cartoon", "all"):
        jobs += CARTOON

    wanted = [s.strip() for s in str(args.slugs).split(",") if s.strip()]
    if wanted:
        want_set = set(wanted)
        jobs = [j for j in jobs if j["slug"] in want_set]
        missing = [s for s in wanted if s not in {j["slug"] for j in jobs}]
        if missing:
            print("⚠️  Unknown slugs (ignored):")
            for s in missing:
                print(f"   - {s}")
    elif args.limit and args.limit > 0:
        jobs = jobs[: args.limit]

    out_dir = Path(args.out_dir) / args.lane
    out_dir.mkdir(parents=True, exist_ok=True)

    # Always write the production sheet for traceability.
    sheet_path = out_dir / "prompts.json"
    sheet_path.write_text(json.dumps(jobs, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    total = len(jobs)
    est_cost = total * MODEL_COST[args.model]

    print("\n🏀  Alleyoop Arts — Launch 12 Generator")
    print(f"   Lane    : {args.lane}")
    print(f"   Model   : {args.model}")
    print(f"   Size    : {args.width}x{args.height}")
    print(f"   Images  : {total}   Est. cost: ~${est_cost:.2f}")
    print(f"   Output  : {out_dir}")
    print(f"   Sheet   : {sheet_path}\n")

    if args.dry_run:
        for item in jobs:
            print(f"[{item['slug']}]")
            print(item["prompt"][:220].replace("\n", " ") + "...")
            print()
        return 0

    api_key = load_api_key(Path(args.env))
    if not api_key:
        raise SystemExit("❌ BFL_API_KEY not found. Set env var or add to config/.env")

    errors = []
    with ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = {
            executor.submit(process_one, api_key, args.model, item, args.width, args.height, out_dir): item["slug"]
            for item in jobs
        }
        for future in as_completed(futures):
            slug = futures[future]
            try:
                future.result()
            except Exception as e:
                errors.append((slug, str(e)))
                print(f"  ❌ [err]  {slug}: {e}")

    ok = total - len(errors)
    print(f"\n{'✅' if not errors else '⚠️'}  Done — {ok}/{total} images saved to {out_dir}/")
    if errors:
        print(f"\nFailed ({len(errors)}):")
        for slug, msg in errors:
            print(f"  ❌ {slug}: {msg}")
        return 2
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

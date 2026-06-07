#!/usr/bin/env python3
"""
Alleyoop Arts — hyper-realistic city basketball collection.

Usage:
  python scripts/generate_alleyoop_hyperreal_city.py --dry-run
  python scripts/generate_alleyoop_hyperreal_city.py --model flux-2-max --limit 2
  python scripts/generate_alleyoop_hyperreal_city.py --model flux-2-max

Notes:
  - Defaults target a 2:3 poster ratio (1024x1536).
  - Prompts are optimized for FLUX.2 [max] / [pro].
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
    "All clothing is original and unbranded, inspired by premium streetwear silhouettes rather than any specific label. "
    "The basketball is plain orange leather with standard black seams and no visible brand text. "
    "Visible buildings are plain glass, steel, brick, or concrete city architecture with neutral lit windows and no advertising screens. "
    "Storefronts, billboards, and electronic displays are reduced to abstract light shapes with no readable text. "
    "The scene contains no readable text, logos, brand marks, signatures, or watermarks. "
    "Use realistic anatomy, realistic hands, realistic basketball proportions, and believable city architecture. "
    "Designed to read instantly at thumbnail size but hold up as premium wall art at full scale."
)


def _p(slug: str, body: str) -> Dict[str, str]:
    return {"slug": slug, "prompt": f"{body.strip()} {CONSISTENCY_SUFFIX}".strip()}


PROMPTS: List[Dict[str, str]] = [
    _p(
        "01_rooftop_elevation_sunset",
        """
Hyper-realistic editorial sports poster of a basketball player rising for a jump shot on a rooftop court high above a dense modern skyline.
The player is the single hero subject, wearing luxury-inspired oversized streetwear layers in muted sand, charcoal, and deep green, styled with tailored cargo shorts and premium high-top sneakers.
Setting: a private rooftop court surrounded by glass towers, steel railings, distant billboards rendered as abstract light shapes, and a vast sunset city horizon.
Lighting: golden hour sunlight from camera-left, long warm shadows, amber rim light on the player's shoulders, atmospheric haze between skyscrapers.
Color palette: #D8C7A1 (sunlit concrete and wardrobe highlights), #22313B (charcoal architecture), #315B52 (deep green clothing accents), #F28C3A (basketball and sunset edge glow), #E8E1D3 (soft sky haze).
Camera: low angle, 50mm lens, medium-full body framing, shallow depth of field with skyline bokeh.
Technical: premium fashion editorial realism, crisp surface textures, visible shoe materials, photoreal skin, premium collectible sports print.
""",
    ),
    _p(
        "02_skyscraper_court_blue_hour",
        """
Hyper-realistic cinematic poster of an illuminated outdoor basketball court placed between towering glass skyscrapers at blue hour.
The court is the main subject, empty and pristine, with a single hoop glowing under cool stadium lights while the surrounding office towers rise like canyon walls.
Setting: downtown financial district, reflective windows, wet asphalt edges, subtle steam from street vents, city traffic reduced to elegant light streaks in the far background.
Lighting: blue-hour ambient light, cool-white court lights, deep reflections in wet ground, soft mist catching the beams.
Color palette: #1C2430 (night architecture), #3D77A8 (blue-hour reflections), #E6E7EA (court lights), #E5792D (rim and warm city accents), #5F6A72 (steel and pavement).
Camera: centered composition, eye-level, 35mm lens, deep focus, premium architectural photography realism.
Technical: highly realistic glass, steel, painted court lines, rain sheen, luxury urban atmosphere.
""",
    ),
    _p(
        "03_crosswalk_pregame_city_style",
        """
Hyper-realistic fashion-sports poster of three basketball players walking through a Manhattan-style crosswalk toward an outdoor court framed by skyscrapers.
The lead player is the focal point, styled in elevated hypebeast streetwear: cropped technical jacket, layered mesh jersey with no lettering, wide-leg performance pants, and sculptural sneakers.
Setting: big-city block with chain-link court in the background, steam vents, yellow cabs blurred in distance, polished concrete and steel storefront reflections.
Lighting: crisp overcast daylight with soft contrast, bright reflections on pavement, clean skin tones, premium campaign clarity.
Color palette: #2A2E34 (asphalt and tailoring), #9BA3A8 (city light and concrete), #CED4D8 (sky reflections), #C86F33 (basketball leather accents), #6B7A5C (subtle olive wardrobe notes).
Camera: eye-level editorial street photography, 85mm lens compression, shallow depth of field, hero subject front-loaded.
Technical: photoreal wardrobe materials, realistic fabric drape, luxury sportswear campaign energy.
""",
    ),
    _p(
        "04_underpass_night_game",
        """
Hyper-realistic night-sports poster of an intense one-on-one basketball game under a highway overpass in a dense modern city.
One player drives to the rim while the defender slides laterally, both in premium monochrome streetball fits with clean silhouettes and original sneaker designs.
Setting: city underpass court, concrete columns, sodium-vapor side lighting, graffiti reduced to abstract texture only, distant skyscraper lights visible beyond the structure.
Lighting: dramatic mixed lighting with warm sodium practicals, cool spill from nearby LED floodlights, glossy reflections on worn court paint.
Color palette: #2B2A2A (asphalt black), #5A6069 (concrete gray), #F0B35B (warm practical light), #88A9C3 (cool spill light), #C96A2C (basketball leather).
Camera: low sideline angle, 35mm lens, frozen action, cinematic motion tension.
Technical: realistic sweat sheen, scuffed concrete, textured court paint, premium urban realism.
""",
    ),
    _p(
        "05_tunnel_walk_arena_energy",
        """
Hyper-realistic editorial poster of a basketball player walking alone through a concrete arena tunnel toward an opening that reveals a giant city skyline and a glowing outdoor court beyond.
The player wears a minimalist luxury warmup set with structured tailoring, matte technical fabric, and premium sneakers, carrying a ball under one arm.
Setting: brutalist tunnel interior with fluorescent strips above, polished floor reflections, city skyline opening at the far end.
Lighting: cool tunnel overheads transitioning into bright sunset light at the exit, strong rim light around the player.
Color palette: #20252A (tunnel shadow), #6A727B (concrete and brushed metal), #F0D0A6 (sunlit exit), #D06D35 (basketball leather accents), #BFC9D3 (cool fluorescent light).
Camera: centered composition, medium-full body, 70mm lens, premium campaign symmetry.
Technical: high-end sports fashion realism, luxurious material rendering, strong world depth.
""",
    ),
    _p(
        "06_rainy_chinatown_court",
        """
Hyper-realistic city basketball poster of a wet neighborhood court tucked between dense high-rise buildings and layered urban storefronts in a packed downtown district.
The hoop and half court are the primary subjects, while umbrellas, fire escapes, and neon reflections create cultural density without readable signage.
Setting: narrow city court, stacked buildings, reflective puddles, food delivery bikes parked near fence, steam rising from grates.
Lighting: rainy evening with magenta-orange and cyan reflections bouncing off wet blacktop, soft fog in the air.
Color palette: #222831 (wet asphalt), #4B5D67 (steel and rain haze), #DA7440 (warm neon reflection), #6EA7BF (cool neon reflection), #E7E1D7 (mist and highlights).
Camera: slightly elevated three-quarter angle, 40mm lens, cinematic realism, deep atmosphere.
Technical: hyper-real puddles, city density, reflective surfaces, premium nighttime realism.
""",
    ),
    _p(
        "07_penthouse_ball_handling",
        """
Hyper-realistic luxury sports poster of a basketball player dribbling on a private penthouse half court with a panoramic skyline behind them.
The player is sharply styled in cream, black, and muted bronze performance streetwear, with premium knit socks, refined accessories, and clean original sneaker design.
Setting: penthouse terrace court, travertine, glass balustrades, skyline stretching to the horizon, subtle luxury furniture pushed out of frame.
Lighting: early morning clean sunlight, hard-edged shadows, cool city air, crisp visibility.
Color palette: #E7D8BD (stone and wardrobe highlights), #262A2E (city and shadow), #8C5A3C (basketball and bronze notes), #8FA8B5 (skyline cool tones), #F5F0E8 (bright air and sun reflections).
Camera: medium shot, 50mm lens, slightly low angle, premium fashion-ad feel.
Technical: top-tier realism, luxury materials, believable skyline scale, refined editorial polish.
""",
    ),
    _p(
        "08_chain_link_twilight_portrait",
        """
Hyper-realistic portrait poster of a basketball player standing courtside with a chain-link fence behind them and skyscrapers rising in the distance.
The player faces camera with calm confidence, wearing elevated streetwear layers: structured bomber, technical shorts, premium compression sleeve, and original jewelry details with no logos.
Setting: twilight city court, fence shadow patterns, distant towers beginning to light up, subtle court lights warming the foreground.
Lighting: blue-purple twilight ambient light with warm court light from below, soft edge light on the face.
Color palette: #242D38 (night blue shadows), #6A879E (cool city atmosphere), #D7C0A3 (skin and warm fabric highlights), #C9783B (basketball leather warmth), #E8E3DA (light catch on metal fence).
Camera: 85mm portrait lens, chest-up framing, shallow depth of field, premium editorial portrait realism.
Technical: natural skin texture, realistic face symmetry, premium sports-fashion portrait.
""",
    ),
    _p(
        "09_glass_tower_fast_break",
        """
Hyper-realistic action poster of a fast break on a polished city court surrounded by mirrored glass towers.
One player sprints in transition with the ball while two trailing figures blur slightly behind, keeping the hero subject unmistakable.
Setting: downtown plaza court integrated into a public square, reflective facades, clean modern architecture, urban planters, and dramatic vertical scale.
Lighting: bright midday sunlight reflected from surrounding glass, sharp highlights on the court, controlled contrast and realistic bounce light.
Color palette: #1F2C37 (glass tower shadows), #7AA3BC (reflected sky tones), #E8E5DC (sunlit court), #D97233 (basketball and warm shoe accents), #52646E (steel details).
Camera: dynamic low tracking angle, 35mm lens, action-frozen realism.
Technical: ultra-clean urban realism, realistic motion posture, luxury sports campaign feel.
""",
    ),
    _p(
        "10_midnight_rooftop_portrait",
        """
Hyper-realistic moody poster of a basketball player seated on the edge of a rooftop court at midnight, the ball resting beside them while the city glows below.
The figure is styled in monochrome luxury streetwear with sculptural layering, matte nylon textures, premium puffer vest, and original sneaker silhouette.
Setting: rooftop edge, guardrails, massive skyline full of windows, deep city depth and luxury solitude.
Lighting: moody midnight environment with soft cyan spill from the city, warm sodium highlights on the face and hands, subtle haze in the distance.
Color palette: #161B22 (night depth), #2F4E64 (cyan spill), #8A8F97 (concrete and wardrobe neutrals), #D27A3A (basketball warmth), #E0D6C8 (skin highlights).
Camera: medium portrait, 85mm lens, shallow depth of field, premium urban introspection.
Technical: believable night skin rendering, realistic city light bokeh, luxury editorial realism.
""",
    ),
    _p(
        "11_city_rec_center_legacy",
        """
Hyper-realistic documentary-style poster of an indoor recreation center court inside a dense city block, with a young player practicing alone while skyscrapers are visible through tall industrial windows.
The player is small within the space but still the clear narrative subject, wearing clean original practice gear with premium cuts and no branding.
Setting: polished hardwood, steel trusses, old brick walls, city skyline through tall windows, urban nostalgia meeting modern aspiration.
Lighting: late afternoon sunlight pouring through high windows, long stripes of light across the floor, subtle dust in the air.
Color palette: #7A563A (hardwood warmth), #B88854 (sunlit floor streaks), #49535C (steel trusses), #CFC5B6 (window light haze), #D46F2F (basketball leather).
Camera: wide environmental shot, 28mm lens, high realism, architectural storytelling.
Technical: cinematic documentary realism, rich wood texture, believable scale and atmosphere.
""",
    ),
    _p(
        "12_finals_energy_street_plaza",
        """
Hyper-realistic cultural sports poster of a high-stakes city plaza basketball game at night, with a packed crowd encircling the court and skyscrapers towering overhead.
The lead player explodes upward near the rim while the crowd forms a ring of anticipation, dressed in elevated street fashion silhouettes rather than generic fanwear.
Setting: public plaza court, polished blacktop, temporary floodlights, towering corporate glass and stone buildings, urban culture and event energy.
Lighting: dramatic event lighting with cool white floodlights, warm skin bounce, and city window lights filling the background.
Color palette: #20262D (night city depth), #E5E1D8 (floodlight highlights), #C96F36 (basketball and warm accents), #6B8797 (glass reflections), #4D5A4B (muted fashion accents).
Camera: low hero angle, 35mm lens, explosive action framed by architecture and crowd.
Technical: premium event-photography realism, believable crowd density, luxury sports culture energy.
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
    parser = argparse.ArgumentParser(description="Generate Alleyoop hyper-realistic city basketball collection via BFL FLUX.")
    parser.add_argument("--model", default="flux-2-max", choices=sorted(MODEL_COST.keys()))
    parser.add_argument("--width", type=int, default=1024)
    parser.add_argument("--height", type=int, default=1536)
    parser.add_argument("--workers", type=int, default=4)
    parser.add_argument("--limit", type=int, default=0)
    parser.add_argument("--slugs", default="")
    parser.add_argument("--env", default="config/.env")
    parser.add_argument("--out-dir", default="outputs/alleyoop-hyperreal-city")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    if args.width <= 0 or args.height <= 0:
        raise SystemExit("width/height must be positive integers")

    jobs = list(PROMPTS)

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

    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    sheet_path = out_dir / "prompts.json"
    sheet_path.write_text(json.dumps(jobs, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    total = len(jobs)
    est_cost = total * MODEL_COST[args.model]

    print("\n🏙️  Alleyoop Hyperreal City Generator")
    print(f"   Model   : {args.model}")
    print(f"   Size    : {args.width}x{args.height}")
    print(f"   Images  : {total}   Est. cost: ~${est_cost:.2f}")
    print(f"   Output  : {out_dir}")
    print(f"   Sheet   : {sheet_path}\n")

    if args.dry_run:
        for item in jobs:
            print(f"[{item['slug']}]")
            print(item["prompt"][:240].replace("\n", " ") + "...")
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

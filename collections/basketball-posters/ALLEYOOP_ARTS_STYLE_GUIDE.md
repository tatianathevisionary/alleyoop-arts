# Alleyoop Arts: Basketball Posters (Launch 12) Style Guide

Last updated: 2026-03-13

This doc defines the visual direction for the first 12 Alleyoop Arts basketball posters and provides FLUX-ready prompt templates to generate cleaner, more consistent, print-friendly images.

## North Star

**Theme:** basketball as a labyrinth: finding a lane, reading the floor, improvising under pressure.

**Vibe keywords:** California streetball, sun-drenched optimism, playful surrealism, graphic punch, modern nostalgia, kinetic motion.

**What "better" means for this launch:** consistent palette language, fewer "random style jumps," cleaner focal points, less accidental text/logos, and compositions that read instantly from a thumbnail but hold up as wall art.

## Visual Language

**Core motifs (mix 1-3 per piece):**
- Maze / corridor / geometric canyon (the "alley" in Alleyoop)
- Ball trajectory arcs (streaks, ribbons, comet tails)
- Hoops as portals (looped rim, neon backboard, impossible perspective)
- Court lines as graphic design (overhead diagrams, simplified markings)
- Street-art textures (wheatpaste layers, paint chips, torn posters, halftones)
- Celebration artifacts (confetti, banners, crowd as color blocks)
- Reflections (wet court, mirrored shot, double exposure)

**Composition defaults:**
- Portrait orientation, poster-first framing (target 2:3 ratio).
- One primary subject: player OR hoop OR court (not all equally dominant).
- Use intentional negative space (top 10-20%) for breathing room and future typography overlays (optional).
- Prefer strong silhouettes and readable gesture (mid-action, decisive pose).

**Texture defaults (pick one):**
- Painterly "modern poster" with subtle paper grain
- Collage street mural with torn layers and scuffs
- Neon night with rain, glow bloom, atmospheric particles

## Color System (Hex-First)

Keep palettes to **3-5 colors** per image. Tie colors to specific objects (walls, court, jersey, sky, glow).

### Primary Palette (Alleyoop Core)
- `#2B5D4B` (Maze Teal) for maze walls / deep midtones
- `#88BBCC` (Sky Blue) for air, distance, open space
- `#EE9933` (Sunset Orange) for ball, rim, energy accents
- `#F2E9C7` (Warm Cream) for highlights / paper / sun haze
- `#223333` (Charcoal Teal) for grounding shadows / type-safe contrast

### Accent Sets (Use Sparingly)
- **Graffiti Pop:** `#FF4FA3` (Hot Magenta), `#0A85BB` (Spray Cyan), `#413C44` (Asphalt)
- **Neon Night:** `#E2726D` (Neon Coral), `#3A6DB0` (Electric Blue), `#251E4A` (Midnight Violet)
- **Autumn Court:** `#E09432` (Ochre), `#64714D` (Olive), `#333D38` (Deep Green-Gray)

## Typography Policy (Recommended)

For launch art, prefer **no embedded text** in the generated image. Add titles, SKU text, or brand marks in post (Figma/Photoshop) to avoid misspellings and accidental trademarked lettering.

If you must generate text, use **FLUX.2 [flex]** and quote it, keep it to **1-4 words**, and place it intentionally (top band or bottom band).

## FLUX Prompting Standards (Applied)

Based on FLUX best practices:
- No negative prompts. Describe what you want.
- Front-load subject + style.
- Always specify lighting.
- Use hex colors paired with names and attach them to objects.

### Model Choice
- Highest quality: **FLUX.2 [max]**
- Production default: **FLUX.2 [pro]**
- Typography: **FLUX.2 [flex]**
- I2I refinement: **FLUX.2 [pro/max]** (edit an existing original to stabilize composition)

### Master T2I Prompt Template (Copy/Paste)

```text
Poster artwork of [SUBJECT] [ACTION], designed as a basketball-labyrinth visual metaphor.
Style: [painterly modern poster / street mural collage / neon night cinematic].
Setting: [maze/court/corridor] with clear geometric structure and a single strong focal point.
Color palette: #2B5D4B (maze teal), #88BBCC (sky blue), #EE9933 (sunset orange),
#F2E9C7 (warm cream), #223333 (charcoal teal). Assign each color to specific objects.
Lighting: [golden hour / high-key sun / rainy night neon glow / dappled tree shadows].
Composition: portrait 2:3, clean silhouette, readable gesture, intentional negative space at top.
Technical: crisp edges, print-friendly detail, subtle paper grain, premium poster design.
```

### Master I2I Refinement Prompt Template (Copy/Paste)

Use when you want to keep an existing image's composition but improve color coherence and "poster-ness."

```text
Maintain the exact composition and main subject pose. Refine into premium poster art with a cleaner focal point,
more intentional negative space, and consistent color grading. Apply the Alleyoop core palette:
#2B5D4B (maze teal), #88BBCC (sky blue), #EE9933 (sunset orange), #F2E9C7 (warm cream), #223333 (charcoal teal),
assigned to specific objects. Improve lighting to [golden hour / neon glow / high-key sun] while keeping the scene believable.
Add subtle paper grain and remove any readable brand logos or jersey text by replacing them with simple shapes/patterns.
```

## Launch 12: Product Briefs

These are 12 distinct but coordinated "hero" concepts. Keep the palette language consistent; vary the motif and lighting.

### 1) Alley Runner (Maze Jump Shot)

**Hook:** one player, one lane, one shot; the maze becomes the court.

**Existing original (I2I input):** `A basketball player makes a daring jump shot throu_d34a0c9faeb22505165e19b8b179892b.png`

**Palette:** `#40815D` (court green), `#2B5D4B` (maze teal), `#EE9933` (ball/rim), `#E0EBBF` (sunlight), `#1E3834` (deep shadow).

**Prompt (T2I):**
```text
Poster artwork of a basketball player taking a daring jump shot inside a towering geometric maze,
high-angle perspective with strong shadows and a clear ball arc toward the hoop.
Color palette: #2B5D4B (maze teal walls), #40815D (court green floor), #EE9933 (sunset orange ball and rim),
#E0EBBF (warm sunlight highlights), #1E3834 (deep shadow). Golden hour light slicing across the floor.
Portrait 2:3 composition, clean silhouette, subtle paper grain, premium modern poster design.
```

### 2) Bird's-Eye Court (Overhead Diagram, Painterly)

**Hook:** the court reads like a map; the paint and shadows do the storytelling.

**Existing original (I2I input):** `An overhead view of a basketball court, illustrate_eb1c0ca50152fcf925945f4887c2f704.png`

**Palette:** `#88BBCC` (sky), `#333D38` (deep green-gray), `#E09432` (ochre key), `#F2E9C7` (warm cream), `#64714D` (olive).

**Prompt (T2I):**
```text
Painterly poster of an outdoor basketball court seen from a high bird's-eye view,
surrounded by trees casting dappled shadows across the surface, crisp court markings, serene but energetic.
Color palette: #333D38 (deep green-gray shadows), #64714D (olive foliage), #E09432 (ochre key area),
#F2E9C7 (warm cream highlights), #88BBCC (sky blue atmosphere).
Bright midday sun with dappled shade, portrait 2:3, subtle paper texture, premium poster art.
```

### 3) Graffiti Wall Legend (Street Mural Collage)

**Hook:** streetball iconography as layered urban collage.

**Existing original (I2I input):** `A vibrant piece featuring street art inspired by b_b47464b6cfd5454e8c3d3f1686e84c8f.png`

**Palette:** `#FF4FA3` (hot magenta), `#0A85BB` (spray cyan), `#F49B48` (tangerine), `#413C44` (asphalt), `#F2E9C7` (paper).

**Prompt (T2I):**
```text
Street mural collage poster of a basketball player seen from behind in front of a layered graffiti wall,
wheatpaste textures, torn posters, paint drips, bold graphic shapes, the ball floating as a simple icon.
Color palette: #FF4FA3 (hot magenta wall blocks), #0A85BB (spray cyan accents), #F49B48 (tangerine highlights),
#413C44 (asphalt shadows), #F2E9C7 (paper/torn poster base). High-contrast daylight.
Portrait 2:3, crisp silhouette, authentic urban texture, premium poster print look.
```

### 4) Neon Rim Portal (Rainy Night)

**Hook:** the hoop becomes a portal; night practice feels mythic.

**Existing original (I2I input):** `A minimalist basketball hoop and backboard floatin_2996900db9fe2541e2ab7a53ee974c97.png`

**Palette:** `#251E4A` (midnight violet), `#3A6DB0` (electric blue haze), `#E2726D` (neon coral glow), `#DE7B7F` (glow bloom), `#0B0B14` (near-black).

**Prompt (T2I):**
```text
Cinematic neon night poster of a minimalist basketball hoop and backboard glowing like a portal on a wet outdoor court,
rain mist, reflective puddles, atmospheric particles, clean composition with strong negative space.
Color palette: #251E4A (midnight background), #3A6DB0 (electric blue haze), #E2726D (neon coral rim/backboard glow),
#DE7B7F (glow bloom highlights), #0B0B14 (near-black shadows). Low-key lighting with neon rim light.
Portrait 2:3, premium poster art, subtle film grain and paper texture.
```

### 5) The Call (Referee at the Junction)

**Hook:** rules, rhythm, and pressure: the whistle moment in a maze intersection.

**Existing original (I2I input):** ` referee makes a crucial call at a key junction of_e4f40e1bc8c7bd6f0abf4400f2ef9b57.png`

**Palette:** `#2B5D4B` (maze), `#88BBCC` (air), `#EE9933` (flags/whistle accent), `#F2E9C7` (highlights), `#223333` (shadows).

**Prompt (T2I):**
```text
Modern poster art of a referee making a decisive call at a key junction inside a geometric basketball maze,
clear body language, bold graphic flags/whistle as the accent, simplified crowd shapes in the distance.
Color palette: #2B5D4B (maze walls), #88BBCC (ambient air), #EE9933 (flags/whistle accent),
#F2E9C7 (sunlit highlights), #223333 (grounding shadows). High-key arena lighting with clean contrast.
Portrait 2:3, strong silhouette, subtle paper grain, premium poster design.
```

### 6) Kaleidoscope Crowd (Fans as Color Blocks)

**Hook:** the crowd becomes an abstract mosaic pushing the team forward.

**Existing original (I2I input):** `Depict a section of the maze lined with cheering b_ada0429ac4e981dbaaac8edabacf23c3.png`

**Palette:** `#88BBCC` (sky), `#EE9933` (energy), `#2B5D4B` (structure), `#FF4FA3` (pop), `#F2E9C7` (light).

**Prompt (T2I):**
```text
Poster artwork of a maze corridor lined with cheering fans rendered as bold color-block silhouettes,
creating a kaleidoscope wall of team colors that frames the players' path, graphic and celebratory.
Color palette: #2B5D4B (maze structure), #88BBCC (ambient air), #EE9933 (energy accents),
#FF4FA3 (celebration pops), #F2E9C7 (highlight wash). Bright stadium lighting, crisp shapes.
Portrait 2:3, clear focal point, premium poster art with subtle paper texture.
```

### 7) Lost Ball Mystery (Scavenger Hunt)

**Hook:** clues through the maze; the ball is the story engine.

**Existing original (I2I input):** `A lost basketball becomes the center of a maze mys_f9832120356882b7bf211984ddeb7bb0.png`

**Palette:** `#2B5D4B` (maze), `#88BBCC` (clue glow), `#EE9933` (ball), `#F2E9C7` (paper), `#223333` (shadow).

**Prompt (T2I):**
```text
Surreal modern poster of a lost basketball at the center of an intricate geometric maze,
with playful symbolic clues (simple icons, arrows, chalk marks) guiding the path, clean and readable design.
Color palette: #2B5D4B (maze teal), #223333 (shadow depth), #88BBCC (soft clue glow),
#EE9933 (sunset orange ball), #F2E9C7 (paper highlights). Soft directional light, subtle haze.
Portrait 2:3, graphic clarity, premium poster print look, gentle paper grain.
```

### 8) Close-Up Hoop (Product-Poster Simplicity)

**Hook:** iconic hoop close-up; pure basketball signal, no clutter.

**Existing original (I2I input):** `A detailed close-up of a basketball hoop, rendered_3228b512b1ecd0b03c55aa2be94e1481.png`

**Palette:** `#223333` (charcoal), `#88BBCC` (sky), `#EE9933` (rim), `#F2E9C7` (net highlights), `#2B5D4B` (secondary).

**Prompt (T2I):**
```text
Bold minimalist poster of a basketball hoop close-up with clean geometry,
the rim and net rendered with crisp graphic detail, subtle background gradient and negative space.
Color palette: #223333 (charcoal background), #88BBCC (sky gradient), #EE9933 (sunset orange rim),
#F2E9C7 (net highlights), #2B5D4B (secondary accents). Clean studio lighting, high contrast.
Portrait 2:3, premium modern poster art, subtle paper texture.
```

### 9) Street Game (California Neighborhood)

**Hook:** community court energy; playful street details, upbeat color.

**Existing original (I2I input):** `A lively street basketball game with bright, cheer_3e5e00db27fc2858a52a3513df8f0f16.png`

**Palette:** `#88BBCC` (sky), `#2B5D4B` (greens), `#EE9933` (warm accents), `#F2E9C7` (sun haze), `#413C44` (asphalt).

**Prompt (T2I):**
```text
Bright, cheerful modern poster of a street basketball game on an outdoor court in a California neighborhood,
players in dynamic motion, simple palm silhouettes and mural textures in the background, upbeat and inclusive.
Color palette: #88BBCC (sky), #2B5D4B (greens/structures), #EE9933 (warm accents),
#F2E9C7 (sun haze highlights), #413C44 (asphalt shadows). Golden hour lighting, crisp silhouettes.
Portrait 2:3, premium poster art with subtle paper grain.
```

### 10) Perfect Pass (Arc Through the Alley)

**Hook:** the pass is a ribbon; the maze is the defender.

**Existing original (I2I input):** `A sequence depicting a perfect pass through a narr_99b8838d2acfedc0c49ea18a024a27ad.png`

**Palette:** `#2B5D4B` (maze), `#88BBCC` (air), `#EE9933` (ball trail), `#F2E9C7` (highlight), `#334444` (deep neutral).

**Prompt (T2I):**
```text
Graphic modern poster of a basketball making a perfect pass through a narrow alley-like maze corridor,
the ball's trajectory drawn as a clean ribbon arc, players simplified into readable silhouettes.
Color palette: #2B5D4B (maze teal), #334444 (deep neutral shadows), #88BBCC (ambient air),
#EE9933 (sunset orange ball and arc), #F2E9C7 (highlight wash). High-key directional light.
Portrait 2:3, crisp edges, premium poster print look, subtle paper texture.
```

### 11) Mirrored Shot (Reflection Symmetry)

**Hook:** one shot, two realities; reflection as visual poetry.

**Palette:** `#88BBCC` (cool reflection), `#2B5D4B` (maze), `#EE9933` (ball), `#F2E9C7` (light), `#223333` (shadow).

**Prompt (T2I):**
```text
Elegant modern poster of a basketball player taking a jump shot above a wet reflective court surface,
creating a near-perfect mirrored symmetry, the maze walls framing the scene with clean geometry.
Color palette: #2B5D4B (maze teal), #88BBCC (cool reflection tint), #EE9933 (sunset orange ball/rim),
#F2E9C7 (soft highlights), #223333 (shadow depth). Soft overcast light with glossy reflections.
Portrait 2:3, centered composition, premium poster art, subtle film grain and paper texture.
```

### 12) Clinic Day (Community + Growth)

**Hook:** the sport as mentorship; bright, hopeful, instructional energy.

**Existing original (I2I input):** `A dynamic scene of a basketball clinic with a brig_f0225cc4b81bb5be0b2ad71984779e31.png`

**Palette:** `#88BBCC` (sky), `#2B5D4B` (greens), `#EE9933` (warm accents), `#F2E9C7` (sun), `#64714D` (olive).

**Prompt (T2I):**
```text
Uplifting modern poster of a youth basketball clinic in a sunny park,
coaches guiding players through drills, simplified figures with clear gestures, community focus.
Color palette: #88BBCC (sky), #2B5D4B (greens), #64714D (olive shadows),
#EE9933 (warm accents), #F2E9C7 (sunlit highlights). Bright high-key sunlight.
Portrait 2:3, clean focal point, premium poster art with subtle paper grain.
```

## Output and Print Notes

- Generate at the highest resolution available, then upscale for print.
- Keep micro-detail readable: avoid ultra-fine crowd faces; use silhouettes and blocks.
- Keep jersey designs generic and non-branded; use stripes or abstract patterns.

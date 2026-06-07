# ALLEYOOP — Brand Intro Spec · "The Pass"

The ident that runs in front of videos, reels, and ads. Previz live at `brand-intro.html`.
The concept: the logo's origin story — a ball drops in, lobs across the screen, swishes
through a rim, and the two rims become the OO in ALLEYOOP. The 3D is the play; the
wordmark is the finish.

Brand palette only. The ball is the single orange object until the lob arc draws over the OO.

---

## Storyboard (12s master)

| Time | Beat | What happens | Audio cue |
|------|------|--------------|-----------|
| 0.0–1.7 | **The drop** | Black… cream space. One orange ball falls into frame, two decaying bounces, settles. | Two ball bounces, real gym echo. Nothing else |
| 2.0–4.6 | **The lob** | Ball arcs across the full frame, leaving a thin orange trail — the lob arc of the logo, drawn live | A rising whoosh, almost subliminal |
| 3.4–4.2 | **The rims** | Two ink rims fade in mid-flight — the destination appears while the ball is airborne | Low room tone swells |
| 4.6–5.5 | **The swish** | Ball drops through the right rim. Rim pulses. Orange shards burst | THE swish — the loudest moment of the ident |
| 5.8–6.3 | **The cut** | Hard cut to flat cream | Silence. One beat |
| 6.3–7.6 | **The lockup** | ALLEY and P slide in; the two rims are now the OO (rings scale in); the orange lob arc draws over them; "arts" script lands | A single warm note or vinyl crackle |
| 9.0–12.0 | **The line** | THE PASS IS THE PLAY. · EST. 2026 · CANADA. Hold | Room tone fades to nothing |

## Cutdowns

| Version | Length | Use | Edit |
|---------|--------|-----|------|
| **Full** | 12s | YouTube video opens, event screens | As-is |
| **Mid** | 5–6s | Reels/TikTok opens, ads | Start at the lob (2.0); tagline overlaps the lockup |
| **Bumper** | 2s | Pre-roll bumper, end-slate sting | Swish → lockup only, tagline as end frame |
| **Long** | 20s | Trailer / sizzle opener | Full master + 8s of collection footage under the held lockup |

## Production notes (C4D / Redshift / AE)

- Previz is frame-accurate to the timeline above — use it as the animatic.
- 3D beats in C4D: ball with proper squash-and-stretch on the bounces (the previz fakes it);
  trail as a Sweep on a Tracer object; rims MoGraph-faded in.
- The cut at 5.8 is a HARD cut — don't crossfade it. The silence beat sells the lockup.
- Type beats in AE, not 3D: the previz HTML/CSS layer maps 1:1 to AE text layers.
  Wordmark font is a placeholder system grotesque until the brand face is licensed
  (Neue Haas Grotesk / Söhne / Satoshi — open item in BRAND.md).
- Sound design is half this ident. Two bounces, one swish, one note. No music bed,
  no riser stacks. The restraint is the brand.
- Deliverables: 16:9 (1920×1080), 9:16 (1080×1920), 1:1 (1080×1080) — the previz
  viewframe toggle previews all three crops; recompose per ratio, don't letterbox.

## The test (from VOICE.md, applied to motion)

1. Could a hype account have made this? → strip the heat (no speed ramps, no glitch FX)
2. Could a bank have made this? → add the court back (real bounce audio, real swish)
3. Would Damion play this in front of a teammate? → if it feels long, cut from the front

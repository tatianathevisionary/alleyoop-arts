---
name: prototype
description: Create a new Shop Pulse prototype with correct branding, design tokens, and component library
user-invocable: true
---

# Create Shop Pulse Prototype

Build a standalone HTML prototype that uses the official Shop App branding and Shop Pulse component library. All prototypes are self-contained HTML files — no build step, no dependencies.

## Arguments

$ARGUMENTS — Required: description of what the prototype should demonstrate (e.g., "a curated product feed with agent reasoning cards")

## Shop App Brand Identity

### Brand Colors — Shop Purple

```css
:root {
  /* Primary */
  --shop-purple: #5C4FFF;
  --shop-purple-hover: #7C72FF;
  --shop-purple-dark: #4A3FD9;

  /* Tints & Backgrounds */
  --shop-purple-bg: rgba(92,79,255,.06);
  --shop-purple-light: #F0EFFF;
  --shop-purple-glow: rgba(92,79,255,.3);

  /* Gradient Spectrum */
  /* #5C4FFF → #7C72FF → #9C94FF */

  /* Neutrals */
  --dark: #08080d;
  --dark2: #101018;
  --dark3: #181824;
  --text: #0f0f14;
  --text2: #4a4a5a;
  --text3: #8888a0;
  --card: #fff;
  --bg: #f8f8fc;
  --border: rgba(92,79,255,.08);

  /* System */
  --green: #34C759;
  --orange: #FF9500;
  --red: #FF453A;
  --star: #E8A800;
  --radius: 16px;
}
```

### Logos

Two logo assets are available in `assets/` and `prototypes/`:
- **`shop-icon-purple.png`** — Purple "S" brandmark (app icon style)
- **`shop-wordmark.png`** — Purple "shop" wordmark (text logo)

Use them like: `<img src="shop-icon-purple.png" alt="Shop" width="28">`

### Typography

```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif;
```

### Brand Rules

- Purple is the **accent** color, not a background flood
- Use gradient text (`#5C4FFF → #7C72FF → #9C94FF`) for emphasis only (hero headlines, key stats)
- Light purple (`#F0EFFF`) for pill backgrounds, subtle card tints
- Purple border accents: `border-left: 4px solid var(--shop-purple-hover)`
- **NEVER** mix with Shopify admin green (`#008060`)
- **NEVER** use purple for body text — body text is `var(--text)` (#0f0f14)
- Glowing effects use low-opacity radial gradients (0.08–0.14), never harsh

## Prototype Structure

Every prototype MUST follow this exact structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Shop Pulse — [Feature Name]</title>
<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    /* Paste the full Shop Purple color system above */
  }

  html, body {
    height: 100%; width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif;
    background: #C8C8CC;
    display: flex; align-items: center; justify-content: center;
    -webkit-font-smoothing: antialiased;
    user-select: none;
  }

  .app {
    width: 390px; height: 844px; /* iPhone 14 Pro dimensions */
    background: var(--bg);
    border-radius: 44px;
    position: relative; overflow: hidden;
    box-shadow: 0 24px 80px rgba(0,0,0,0.2);
  }

  /* ... component styles ... */
</style>
</head>
<body>
  <div class="app">
    <!-- Content here -->
  </div>
</body>
</html>
```

### App Shell Variants

- **Mobile (default):** 390x844px, border-radius: 44px (iPhone frame)
- **Tablet/Desktop:** 1120x700px, border-radius: 22px (browser window)
- Choose based on what makes sense for the feature

## Component Patterns

Use these component patterns in prototypes. Full CSS is in `assets/shop-pulse-components.css`.

### Pulse Card
A card with purple left-border accent, shadow, and hover lift.
```html
<div class="pulse-card">
  <div class="pulse-card-badge">Pulse Signal</div>
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>
```

### Agent Reasoning
Shows the agent's thought process with a purple glow indicator.
```html
<div class="agent-reasoning">
  <div class="agent-avatar"><img src="shop-icon-purple.png" alt="Shop" width="20"></div>
  <div class="agent-thought">Based on your browsing patterns, I found...</div>
</div>
```

### Purple Pill / Tag
```html
<span class="pulse-pill">Running shoes</span>
<span class="pulse-pill active">Beach gear</span>
```

### Gradient Hero Text
```html
<h1>Your <span class="gradient-text">Pulse</span> Feed</h1>
```

### Glowing Orb Background
```html
<div class="pulse-glow"></div>
```

### Product Card
```html
<div class="product-card">
  <div class="product-img" style="background: #f0f0f0;"></div>
  <div class="product-info">
    <div class="product-name">Product Name</div>
    <div class="product-price">$49.00</div>
    <div class="product-store">Store Name</div>
  </div>
</div>
```

### Pulse Badge (notification count)
```html
<div class="pulse-badge" data-count="3">
  <svg><!-- icon --></svg>
</div>
```

### CTA Button
```html
<button class="pulse-btn">View Collection</button>
<button class="pulse-btn secondary">Dismiss</button>
```

### Status Indicator
```html
<span class="pulse-status live">Live</span>
<span class="pulse-status pending">Pending</span>
```

## Steps

1. **Read the arguments** to understand what the prototype should demonstrate
2. **Choose the app shell variant** (mobile 390x844 or desktop 1120x700)
3. **Build the HTML file** in `prototypes/` using the structure template above
4. **Include the full CSS inline** — every prototype is self-contained, no external stylesheets
5. **Use Shop purple branding** throughout — refer to the color system and component patterns above
6. **Include the Shop logo** where appropriate (header/nav bar)
7. **Add realistic mock data** — real-looking product names, prices, store names
8. **Add micro-interactions** — hover states, transitions, subtle animations (tasteful, not excessive)
9. **Include the heartbeat glow animation** if showing Pulse signals:
   ```css
   @keyframes heartbeatGlow {
     0%, 100% { transform: translate(-50%,-50%) scale(1); opacity: 0.6; }
     14% { transform: translate(-50%,-50%) scale(1.06); opacity: 1; }
     28% { transform: translate(-50%,-50%) scale(1); opacity: 0.6; }
     42% { transform: translate(-50%,-50%) scale(1.04); opacity: 0.9; }
     56% { transform: translate(-50%,-50%) scale(1); opacity: 0.6; }
   }
   ```
10. **Test the file** opens correctly in a browser (it's just an HTML file)

## File Naming

Save to `prototypes/[feature-name].html` using kebab-case:
- `prototypes/curated-feed-demo.html`
- `prototypes/pulse-home.html`
- `prototypes/agent-reasoning-cards.html`

## Deployment to Quick Sites

After creating a prototype, it can be deployed to Quick:
```bash
quick deploy prototypes/ tatianas-shop-pulse
```

Deployed URL: `https://tatianas-shop-pulse.quick.shopify.io/[filename].html`

## Reference Files

- **Branding guide:** `docs/05-branding/SHOP_APP_BRANDING.md`
- **Design tokens:** `assets/design-tokens.css`
- **Component library:** `assets/shop-pulse-components.css`
- **Existing prototypes:** `prototypes/*.html` (25 examples to reference)
- **Logo (icon):** `prototypes/shop-icon-purple.png` or `_deploy/assets/shop-icon-purple.png`
- **Logo (wordmark):** `prototypes/shop-wordmark.png` or `_deploy/assets/shop-wordmark.png`

## Figma MCP

If you need to reference Figma designs, the Figma MCP server is configured in `.cursor/mcp.json`. Use it to:
- Extract design tokens from Figma files
- Get component properties and layout measurements
- Pull styles and spacing from existing Shop designs

## Quality Checklist

Before finishing, verify:
- [ ] Uses Shop purple (#5C4FFF) as primary accent — NOT green
- [ ] Includes Shop logo in header/nav
- [ ] Self-contained HTML — no external dependencies
- [ ] Realistic mock data
- [ ] Responsive within the app shell
- [ ] Smooth hover/transition states
- [ ] Purple gradient text for key headlines only
- [ ] No body text in purple — dark text for readability

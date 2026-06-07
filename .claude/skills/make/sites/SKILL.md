---
name: sites
description: Manage the Quick site directory — track URLs, descriptions, components, and prevent folder overrun
user-invocable: true
---

# Sites — Quick Site Directory Manager

Manages the registry of all Quick sites in `sites/`. Tracks URLs, descriptions, deployment status, and file inventory. Prevents folder overrun by flagging duplicates, orphans, and undocumented sites.

**Registry file:** `sites/REGISTRY.md`
**README:** `sites/README.md`

## Steps

### 1. Scan the sites directory

Read every folder under `sites/`:
- List all files and their sizes
- Read `index.html` `<title>` tag for each site
- Check for README.md in each folder
- Check for asset files (CSS, images, JS)

### 2. Load the registry

Read `sites/REGISTRY.md`. If it doesn't exist, create it from scratch.

The registry format:

```markdown
# Quick Site Registry

Last audited: YYYY-MM-DD

## Live Sites

| Folder | Quick URL | Status | Description | Files | Size |
|--------|-----------|--------|-------------|-------|------|
| pulse-voice-site | shop-pulse-voice.quick.shopify.io | LIVE | Voice agent with heartbeat | index.html | 30K |

## Undeployed Sites

| Folder | Suggested URL | Status | Description | Files | Size |
|--------|---------------|--------|-------------|-------|------|

## Archived Sites

| Folder | Reason | Archived Date |
|--------|--------|---------------|
```

### 3. Reconcile filesystem vs registry

Compare what's on disk with what's in the registry:

**Flag these issues:**

- **New folder not in registry** → Add it, mark as `UNDEPLOYED`, ask user for description
- **Registry entry with no folder** → Mark as `MISSING`, warn user
- **Duplicate content** → Flag folders that appear to serve the same purpose (e.g., two GTM sites)
- **Missing index.html** → Flag as broken site
- **No README.md** → Flag — every site should have a one-liner README
- **Large sites (>50K)** → Note for awareness
- **External dependencies** → List any Google Fonts, Unsplash, or CDN references per site

### 4. Check for folder overrun

Folder overrun = too many similar or obsolete sites. Flag if:

- More than 2 sites with the same prefix (e.g., `pulse-gtm-*` has 2+)
- Any site hasn't been modified in 30+ days AND is not deployed
- Total sites exceed 12 (arbitrary threshold — discuss if growing)
- Any folder contains files other than `index.html`, `README.md`, and `assets/`

### 5. Update the registry

After reconciliation, update `sites/REGISTRY.md` with:
- Current date as "Last audited"
- All sites grouped by status (Live / Undeployed / Archived)
- File count and total size per site
- External dependency warnings
- Duplication warnings

### 6. Update the README

Regenerate `sites/README.md` from the registry:
- Site index table with folders, URLs, and descriptions
- Deployment instructions
- Link to REGISTRY.md for full details
- Total count: "X live, Y undeployed, Z archived"

### 7. Report

Output a summary:

```
QUICK SITE DIRECTORY AUDIT
==========================
Total sites: X (Y live, Z undeployed, W archived)

LIVE:
  pulse-voice-site → shop-pulse-voice.quick.shopify.io
  proactive-shop-pulse → proactive-agent.quick.shopify.io
  claudeception-sim → shop-pulse-claudeception.quick.shopify.io

NEW (added to registry):
  <any new folders found>

WARNINGS:
  <duplicate content, missing README, large files, etc.>

OVERRUN CHECK:
  [PASS/WARN] — X sites, threshold is 12
  [PASS/WARN] — Duplicate prefixes: pulse-gtm-* (2 sites)
```

## Subcommands

### `/sites` (default)
Run the full audit and update the registry.

### `/sites add <folder>`
Register a new site manually. Prompts for:
- Quick URL subdomain
- One-line description
- Deployment status (live/undeployed)

### `/sites deploy <folder>`
Deploy a site and update the registry:
1. Verify the folder exists and has index.html
2. Show the deploy command: `quick deploy sites/<folder> <subdomain>`
3. After user confirms deployment, update registry status to LIVE
4. Update README

### `/sites archive <folder>`
Mark a site as archived:
1. Move the registry entry to the Archived section
2. Add archive date and reason
3. Do NOT delete the folder — just update the registry
4. Update README to remove it from the active list

### `/sites status`
Quick summary of all sites without running the full audit.

## Arguments

$ARGUMENTS — Optional subcommand: `add <folder>`, `deploy <folder>`, `archive <folder>`, `status`. If omitted, runs the full audit.

## Rules

- **NEVER delete site folders** — only archive them in the registry
- **NEVER deploy without user confirmation** — show the command and wait
- **ALWAYS update both REGISTRY.md and README.md** when making changes
- Keep descriptions to one sentence — detailed docs go in each site's own README
- The registry is the source of truth — if it disagrees with the filesystem, flag it
- When adding a new site, check for naming conflicts with existing subdomains

# Minimal M Favicon Design

## Goal

Replace the current illustrated favicon with a restrained personal mark that reads clearly at 16-32 px and matches the site's black, white, and green visual language.

## Approved direction

- Use one geometric uppercase `M`, representing Min.
- Keep the mark container-free so the letter can use the full favicon canvas.
- Use near-black on light browser chrome and off-white on dark browser chrome.
- Use the site's existing green, `#00ab37`, only on the upper-right terminal of the `M`.
- Do not use `SM`, punctuation, gradients, shadows, AI imagery, a brain/network symbol, or extra text.

## Asset and integration

- Create `assets/img/favicon.svg` with a square `64 64` view box.
- Use an embedded `prefers-color-scheme` rule for the black/white swap.
- Change `_config.yml` from `icon.png` to `favicon.svg`; the existing head include will continue to emit the favicon link through the theme's current path.
- Leave the unused historical `assets/img/icon.png` in place so this change is reversible without deleting an unrelated binary asset.

## Acceptance checks

- The silhouette remains recognizably `M` at 16 px and 32 px.
- The green terminal remains visible but secondary at both sizes.
- The mark has usable contrast on light and dark tab backgrounds.
- The Jekyll build succeeds and the generated HTML references `favicon.svg`.
- No navigation, wordmark, layout, or content files change.

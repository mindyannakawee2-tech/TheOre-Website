# TheORE — Official game website

A responsive static website for TheORE. No paid hosting, framework, build tools, or authentication are needed.

## Preview locally

From this folder:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser.

## Publish to GitHub Pages

1. Create a public GitHub repository such as `TheORE-Website` (check GitHub account permissions and terms).
2. Upload `index.html`, `styles.css`, `script.js` to the repository root.
3. Open **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, `main`, `/ (root)` and save.
4. Visit the Pages URL GitHub shows you (usually `https://YOUR-USERNAME.github.io/TheORE-Website/`).
5. Edit text, replace the CSS-drawn world with your own screenshots when the game is playable.

## Links

Game release feed and download link: https://github.com/mindyannakawee2-tech/TheOreReleases/releases

Launcher source button: https://github.com/mindyannakawee2-tech/TheORELauncher — change or remove this link if that repository isn't public.

## Notes

- Website files are distributable front-end code. This does not make your actual game source public.
- No login or payment forms, analytics, or personal email addresses are embedded.
- Check the correct wording of your game's license and redistribution terms before launch.
- The world scene is drawn using CSS as a placeholder; it is not a screenshot of the game.

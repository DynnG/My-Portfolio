# My Portfolio

**Published portfolio:** [geraldyn-cataluna.vercel.app](https://geraldyn-cataluna.vercel.app)

A responsive, frontend-only personal portfolio with dark neutral colors, crisp sans-serif typography and monospace code details, a portrait card that flips to a QR code, cursor lighting, hover interactions, and filterable skills. Built with HTML, CSS, and JavaScript; no backend required. QR generation uses the `qrcode` package during authoring; the browser uses a static SVG.

## Preview

Install Node.js, run `npm install`, then run `npm run dev` and open http://127.0.0.1:5173. Run `npm run check` for JavaScript syntax checks. You can also open `index.html` directly.

## Personalize

Edit `content.js` for your name, bio, skills, and contact link. The current bio and skills are starter examples, not confirmed qualifications.

Put your photo in an `assets` directory and set `photo` to its path (for example, `assets/my-photo.jpg`). The illustrated placeholder remains visible until a valid photo loads.

Edit the two project cards in `index.html` once you choose your projects. Both are explicitly marked as upcoming; no fictional projects or project links are presented as completed work. Base layout is in `style.css`; the developer aesthetic and responsive refinements are in `developer.css`.

The contact button currently links to your GitHub profile. To use email instead, set `contactUrl` to `mailto:your-address` and update `contactLabel` in `content.js`.

## Hosting

The site can be served by any static host, including GitHub Pages. Publish `index.html`, `style.css`, `developer.css`, `content.js`, `script.js`, `favicon.svg`, and any `assets` directory. Run `npm run build` to copy public files into `dist`. `vercel.json` is configured to publish that directory. Live portfolio: https://geraldyn-cataluna.vercel.app

## Profile QR

Click or tap the portrait (or focus it and press Enter/Space) to reveal the QR. It links to `https://geraldyn-cataluna.vercel.app`. The SVG is `assets/profile-qr.svg`; update its destination and the matching label in `index.html` when the live portfolio URL is available.

## Accessibility

Includes keyboard focus indicators, a skip link, labeled navigation, skill filter pressed states, responsive layouts, and reduced-motion support. Cursor effects are enabled only for a fine pointer with hover and without reduced-motion preferences.

# Techvestor V2 UI Replica

A responsive, animated, pixel-perfect recreation of the Techvestor.com (version 2) marketing site. The project mirrors the original UI/UX using semantic HTML, modular SCSS, and lightweight JavaScript enhancements so the experience stays faithful across breakpoints and modern browsers.

## Features
- Pixel-perfect layout that matches the reference design across desktop, tablet, and mobile.
- SCSS architecture with shared variables, mixins, typography, and layout partials compiled into a single production stylesheet.
- Rich interactions powered by jQuery plugins (Slick carousel, CounterUp, EasyPieChart) and custom scripts for scroll-triggered animations.
- Reusable navigation, hero, testimonial, FAQ, and data visualization sections that can be mixed across pages.
- Optimized assets (web fonts, SVG/PNG imagery) organized for straightforward maintenance and deployment.

## Project Structure
- `index.html`, `about.html`, `performance.html`, … — individual static pages that compose the marketing experience.
- `assets/css/` — SCSS source (`main.scss` plus partials) and the compiled `style.css`.
- `assets/js/` — third-party libraries and `custom.js` for component behaviors.
- `assets/images/` — optimized imagery, icons, and illustrations.
- `assets/fonts/` — local font files referenced in the SCSS.

## Getting Started
1. Clone or download the repository.
2. Open `index.html` in your browser to explore the default landing page.
3. For a local server (recommended for relative asset paths), run:
   ```bash
   cd techvestor_v2
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

## Working With Styles
- Edit the SCSS partials inside `assets/css/` to keep styles consistent.
- Recompile to CSS with your preferred Sass workflow, e.g.:
  ```bash
  sass assets/css/main.scss assets/css/style.css --style=compressed
  ```
- The generated `style.css` is what the HTML pages load in production.

## JavaScript Enhancements
`assets/js/` combines vendor libraries with `custom.js` for:
- Slick-powered sliders and carousels.
- Counter animations when sections enter the viewport.
- Circular charts and scroll-triggered transitions.

Remove or extend these plugins by editing `custom.js` and updating the relevant HTML data attributes.

## Deployment
The site is fully static: upload the repository contents to any static hosting service (Netlify, Vercel, GitHub Pages, S3, traditional hosting) and point the root to `index.html`.

## Notes
- All brand assets and copy belong to Techvestor; this clone is for educational and portfolio purposes only.
- Keep third-party library attributions intact per their respective licenses.

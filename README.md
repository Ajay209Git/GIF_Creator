# Animated GIF Creator

A professional, responsive web tool for creating animated GIFs from your images.  
Easily upload multiple images, set the frame delay and GIF quality, preview your GIF, and download it—all directly in your browser.

## Features

- **Multiple Image Upload:** Select and preview several images to use as GIF frames.
- **Custom Frame Delay:** Choose the time delay (in milliseconds) between frames.
- **Adjustable GIF Quality:** Select the quality level for your GIF (1 = highest, 30 = lowest).
- **Live Progress Bar:** Visual feedback during both image upload and GIF rendering.
- **Responsive Design:** Works beautifully on desktop and mobile.
- **GIF Preview & Download:** Preview your GIF before downloading.

## Usage

1. **Clone or Download this repository.**
2. **Download [`gif.worker.js`](https://cdn.jsdelivr.net/npm/gif.js.optimized/dist/gif.worker.js)** and place it in the same folder as `index.html`.
3. **Start a local HTTP server** (e.g., `python -m http.server`, `npx http-server`, or use VS Code Live Server).
4. **Open `index.html` in your browser via `http://localhost:PORT/`.**
5. Upload your images, adjust settings, click **Create GIF**, preview the result, and download your GIF.

## Options

- **Frame Delay:** Set how long each frame is displayed (in ms). Lower = faster animation.
- **GIF Quality:** 1 (best quality, larger file) to 30 (lowest quality, smaller file).

## Example

![Example screenshot of the GIF Creator UI](screenshot.png)

## Dependencies

- [gif.js](https://github.com/jnordberg/gif.js/) (included via CDN)
- [`gif.worker.js`](https://cdn.jsdelivr.net/npm/gif.js.optimized/dist/gif.worker.js) (must be present locally)

## License

MIT License

---

*Built with ❤️ using HTML, CSS, and JavaScript.*

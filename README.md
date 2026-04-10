# Glass UI Framework 🪄

Glass UI is a modern, lightweight, and fully responsive CSS framework designed exclusively around **Glassmorphism** aesthetics. It provides a comprehensive suite of UI components and semantic utilities, offering a developer experience similar to Bootstrap but with a stunning, translucent, frosted-glass visual language.

## ✨ Features

- **Glassmorphism-First:** Built from the ground up to support beautiful frosted-glass surfaces, blurs, and translucent overlays using native CSS `backdrop-filter`.
- **Zero Dependencies:** Pure CSS and vanilla JavaScript. No React, Vue, jQuery, or complex build steps required.
- **Light & Dark Mode Ready:** Seamless thematic transitions. Change a single `data-theme` attribute on the `<body>`, and every component adapts instantly.
- **Bootstrap-Compatible Naming:** Familiar class nomenclature (e.g., `.btn`, `.card`, `.modal`, `.alert-success`, spacing helpers like `.mt-4`, etc.) makes it incredibly easy to learn and adopt.
- **Modular Architecture:** Only load what you need. Core variables and layout sit in `glass.css`, while all 23 components live in dedicated, compartmentalized files.
- **Fully Responsive:** Fluid layouts, container constraints, and a flexible grid system designed for mobile-first workflows.

## 📦 File Structure

```text
glassmorphism/
├── glass.css               # Main entry point (imports everything)
├── components/             # Modular CSS for individual UI elements
│   ├── accordion.css
│   ├── alerts.css
│   ├── badge.css
│   ├── ... (24 total files)
│   └── helpers.css         # Utility classes (spacing, colors, ratios, etc.)
└── showcase.html           # Comprehensive interactive demo page
```

## 🚀 Quick Start

1. **Include the Stylesheet:** Link the compiled `glass.css` file in the `<head>` of your HTML document. 
   *(Note: Ensure the `components/` directory is kept relative to `glass.css` so the `@import` statements resolve correctly).*

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <!-- Google Font (Outfit) is automatically imported in glass.css -->
     <link rel="stylesheet" href="path/to/glass.css">
   </head>
   ```

2. **Add the Theme Support (Optional but recommended):** Add this tiny snippet to prevent a flash of unstyled theme (FOUC) on load:

   ```html
   <body class="no-transition">
     <script>
       const s = localStorage.getItem('theme');
       const d = window.matchMedia('(prefers-color-scheme: dark)').matches;
       if (s === 'dark' || (!s && d)) document.body.setAttribute('data-theme','dark');
       setTimeout(() => document.body.classList.remove('no-transition'), 50);
     </script>
     
     <!-- Your UI components go here -->
   </body>
   ```

## 🧩 Available Components

Glass UI includes styles for the following standard UI components:

- **Layout & Structure:** Grid (`.card-grid`), Containers (`.container`), Sidebars
- **Navigation:** Navbar, Breadcrumbs, Navs & Tabs, Pagination
- **Interaction:** Buttons, Button Groups, Dropdowns
- **Feedback:** Alerts, Toasts, Badges, Tooltips, Progress Bars, Spinners, Placeholders
- **Content:** Cards, Accordion, List Groups, Carousel 
- **Overlays:** Modals, Offcanvas panels, Popovers

## 💻 Usage Examples

### The Basic Card
```html
<div class="card card-hover">
  <div class="card-body">
    <h5 class="card-title">Glassmorphism Card</h5>
    <p class="card-text">A beautiful translucent surface.</p>
    <button class="btn btn-primary">Learn More</button>
  </div>
</div>
```

### Dynamic Grid
```html
<div class="card-grid card-grid-auto-md card-grid-gap-lg">
  <!-- Cards placed here automatically wrap into a responsive grid -->
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

### Theming
To toggle dark mode programmatically:
```javascript
// Enable Dark Mode
document.body.setAttribute('data-theme', 'dark');

// Revert to Light Mode
document.body.removeAttribute('data-theme');
```

## 🎨 Design System Variables

If you need to extend components or build your own, try using the framework's native CSS variables defined in `:root`. They automatically adapt to the user's theme!

- **Colors:** `var(--accent)`, `var(--bg-color)`, `var(--text-color)`, `var(--text-muted)`
- **Glass Effects:** `var(--glass-bg)`, `var(--glass-border)`, `var(--glass-shadow)`
- **Borders & Radii:** `var(--radius-sm)`, `var(--radius)`, `var(--radius-lg)`, `var(--radius-full)`

## 📄 License
Open Source. Free to use for personal and commercial projects.

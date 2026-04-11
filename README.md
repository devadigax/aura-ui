# Aura UI

Aura UI is a glassmorphism-focused React component library with a built-in showcase app. It ships a shared stylesheet plus lightweight React wrappers for common UI primitives like buttons, cards, modals, alerts, badges, navigation, forms, and more.

## Features

- React-first component API
- Shared glassmorphism design system and utility classes
- Light and dark theme support via `data-theme="dark"`
- Bootstrap-like class naming for easy customization
- Vite-powered showcase app for local development and docs
- Library build for package distribution and separate showcase build for deployment

## Installation

```bash
npm i @devadigax/aura-ui
```

Peer dependencies:

- `react`
- `react-dom`

## Quick Start

```jsx
import { Alert, Button, Card } from '@devadigax/aura-ui';
import '@devadigax/aura-ui/style.css';

export default function Example() {
  return (
    <Card hover>
      <Card.Body>
        <Card.Title>Aura UI</Card.Title>
        <Alert variant="success" heading="Ready">
          Your UI is set up.
        </Alert>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </Card.Body>
    </Card>
  );
}
```

Install and use it in your app:

```bash
npm i @devadigax/aura-ui
```

## Available Exports

Current top-level exports include:

- `Button`
- `Card`
- `Modal`
- `Alert`
- `Badge`
- `Breadcrumb`
- `Accordion`
- `Collapse`
- `Dropdown`
- `FormGroup`
- `FormLabel`
- `FormText`
- `Input`
- `Select`
- `Textarea`
- `FormCheck`
- `FormCheckInput`
- `FormSwitch`
- `FormSwitchInput`
- `InputGroup`
- `InputIcon`
- `ListGroup`
- `Pagination`
- `Placeholder`
- `Progress`
- `Spinner`
- `Table`
- `Toast`
- `ToastContainer`
- `Tooltip`
- `Nav`
- `Navbar`

## Development

Run the showcase locally:

```bash
npm run dev
```

Build the showcase:

```bash
npm run build
```

Build the library bundle:

```bash
npm run build:lib
```

Preview the built showcase:

```bash
npm run preview
```

## Showcase And Netlify

The repo builds two HTML entry points for the showcase:

- `index.html`
- `showcase.html`

The showcase build output goes to `dist-showcase`.

For Netlify:

- Build command: `npm run build`
- Publish directory: `dist-showcase`

The repo also includes a `_redirects` file for SPA fallback behavior.

## Project Structure

```text
src/
  components/        React wrappers
  showcase/          Showcase app and component demo pages
  styles/            Shared framework and component CSS
  index.js           Library export surface
index.html           Showcase app entry
showcase.html        Standalone showcase entry
vite.config.js       Library/showcase build config
```

## Theming

Aura UI uses CSS custom properties for theming. To enable dark mode:

```js
document.documentElement.setAttribute('data-theme', 'dark');
```

To return to light mode:

```js
document.documentElement.removeAttribute('data-theme');
```

## License

MIT

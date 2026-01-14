# Tailwind Soft Pop Plugin

A Tailwind CSS v4 plugin that implements the "Soft Pop" design system. This plugin provides a vibrant, playful aesthetic with hard shadows, bold borders, and a comprehensive color palette using accessible `oklch` colors.

## Features

- **🎨 Radiant Colors:** Complete 50-950 color palette using `oklch` for Primary, Secondary, Accent, Base, Neutral, and functional colors (Success, Warning, Error, Info).
- **🔤 Typography:** Pre-configured font families (Nunito for headings, Mulish for body).
- **📦 Components:** Ready-to-use accessible components like Buttons and Cards.
- **📏 Layout:** Responsive container utilities.
- **🔍 Container Queries:** Intelligent card layouts that adapt to their container size.

## Installation

```bash
npm install tailwind-softpop-plugin
# or
pnpm add tailwind-softpop-plugin
# or
yarn add tailwind-softpop-plugin
```

## Usage

Since this is a Tailwind CSS v4 plugin, you simply need to import it into your main CSS file.

```css
@import "tailwindcss";
@import "tailwind-softpop-plugin";
```

This will automatically configure the theme variables, base styles, and load the component plugin.

## Design System

### Colors

The system uses `oklch` for inconsistent perceptual brightness.

- **Primary**: Cyan/Blue tones
- **Secondary**: Orange/Yellow tones
- **Accent**: Purple/Pink tones
- **Neutral**: Slate/Grey tones

### Components

#### Buttons (`.btn`)

Available variants:

- `.btn-primary`
- `.btn-secondary`
- `.btn-outline`

```html
<button class="btn btn-primary">Click Me</button>
```

#### Cards (`.card`)

Responsive cards that support Container Queries.

```html
<div class="card">
  <div class="card-icon">★</div>
  <div class="card-title">Card Title</div>
  <p>Some awesome content here.</p>
</div>
```

**Horizontal Card**:
Add `.horizontal` to make the card adapt to a row layout when width permits (>450px).

```html
<div class="card horizontal">
  <!-- content -->
</div>
```

#### Section Container (`.section-container`)

A responsive container that handles max-width and padding automatically across breakpoints.

```html
<section class="section-container">
  <!-- content -->
</section>
```

## License

MIT © [CarfDev](https://github.com/carfdev/tailwind-softpop-plugin/blob/main/LICENSE)

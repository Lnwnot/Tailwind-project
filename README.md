# Tailwind CSS Core Concepts Demo

A comprehensive React application demonstrating the core concepts of Tailwind CSS.

## Features

This demo showcases all the core concepts of Tailwind CSS:

1. **Utility Classes** - Building designs with simple utility-first approach
2. **States** - Hover, focus, active, and disabled states
3. **Responsive Design** - Mobile-first responsive layouts
4. **Dark Mode** - Automatic dark mode with smooth transitions
5. **Theme Variables** - Custom colors and configurations
6. **Colors** - Comprehensive color system
7. **Custom Styles** - Using @layer for components and utilities
8. **Class Detection** - Automatic class scanning in source files
9. **Directives** - @apply, @layer, theme(), and more

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind CSS imports and custom styles
├── public/
│   └── vite.svg         # Favicon
├── index.html           # HTML entry point
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Project dependencies
```

## Configuration

The Tailwind configuration includes:
- Custom brand colors
- Dark mode support (class-based)
- Extended spacing
- Custom border radius

## Custom Styles

The `src/index.css` file demonstrates:
- **@layer base**: Base layer customization
- **@layer components**: Reusable components
- **@layer utilities**: Custom utility classes

## Key Tailwind Features Demonstrated

- Utility-first CSS framework
- Responsive breakpoints (sm, md, lg, xl)
- Dark mode toggle
- Interactive states and transitions
- Custom component creation
- Color system and theming
- Grid and flexbox layouts
- Transformations and animations

## Development

This project uses:
- React 18
- Vite 7
- Tailwind CSS 3
- PostCSS
- Autoprefixer

Enjoy exploring Tailwind CSS! 🚀


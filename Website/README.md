# Inclusive Growth Initiative Website

A modern, responsive marketing website for the Inclusive Growth Initiative built with TypeScript, Vite, and vanilla CSS.

## Features

- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Smooth Animations**: Intersection Observer-based fade-in animations on scroll
- **Interactive Forms**: Validated contact form with TypeScript type safety
- **Modern Styling**: Custom CSS with CSS variables for theming
- **TypeScript**: Full type safety across the application
- **Fast Build**: Vite for lightning-fast development and optimized production builds

## Project Structure

```
src/
├── components/       # Reusable UI components
├── styles/
│   └── main.css     # All styling (700+ lines)
├── utils/
│   ├── animations.ts # Scroll animations and smooth scroll
│   └── forms.ts     # Form handling and validation
└── main.ts          # Application entry point

public/              # Static assets

dist/                # Production build output
```

## Setup & Development

### Prerequisites
- Node.js 20.19+ or 22.12+
- npm or pnpm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Opens the site at `http://localhost:5173` with hot module reloading.

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **Vite 7.x** - Next-generation frontend build tool
- **TypeScript 5.x** - JavaScript with type safety
- **CSS3** - Grid, Flexbox, animations
- **Vanilla JavaScript** - No framework dependencies

## Color Palette

The site uses a carefully curated earthy color scheme:

- **Cream**: `#F5F0E8` - Primary background
- **Earth**: `#2C2416` - Dark text/buttons
- **Moss**: `#3D5A3E` - Accent color
- **Clay**: `#B5633A` - Tertiary accent
- **Wheat**: `#D4A96A` - Warm accent
- **Sage**: `#8AAE8C` - Secondary accent

## Key Components

### Navigation
- Fixed header with logo and navigation links
- Smooth scroll to sections
- Responsive navigation menu

### Hero Section
- Large headline with italicized emphasis
- Call-to-action buttons
- Animated stat cards with gradient blob background
- Fade-in animations on scroll

### Audience Cards
- Six cards with emoji icons
- Hover effects with arrow animation
- Links to relevant sections

### Projects Grid
- Featured project with larger card
- Project tags and status indicators
- Interactive hover states

### Value Proposition
- Two-column layout with numbered pillars
- Hover animations

### Impact Numbers
- Grid of impact statistics
- Interactive hover states

### Contact Form
- Email, name, organization, user type fields
- Form validation
- Success feedback

### Footer
- Logo, navigation links, copyright

## Animations

- **Fade-up**: Elements fade in and slide up on scroll
- **Morph**: Hero blob shape morphs infinitely
- **Pulse**: Hero eyebrow indicator pulses
- **Hover effects**: Smooth transitions on interactive elements

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- Intersection Observer API required for scroll animations

## Performance Optimizations

- Minified CSS and JavaScript in production
- Optimized asset loading
- CSS animations use GPU acceleration
- Lazy animations trigger only when elements are visible

## Form Validation

The contact form includes validation for:
- Name (required)
- Organization (required)
- User type (required)
- Email (required, valid format)

## Customization

### Colors
Edit CSS variables in [src/styles/main.css](src/styles/main.css):

```css
:root {
  --cream: #F5F0E8;
  --earth: #2C2416;
  /* ... more colors ... */
}
```

### Fonts
The site uses:
- **Fraunces**: Serif font for headings (from Google Fonts)
- **DM Sans**: Sans-serif font for body text (from Google Fonts)

### Content
Update content directly in [index.html](index.html)

## Deployment

The built site is ready for static hosting:

```bash
# After running npm run build
# Upload contents of dist/ folder to your web server
```

Suitable for:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## License

© 2025 Inclusive Growth Initiative. All rights reserved.

## Support

For questions or issues, please contact the development team or open an issue in the repository.

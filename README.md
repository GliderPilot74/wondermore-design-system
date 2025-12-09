# Wondermore Design System

A complete React component library with brand colors, typography, and reusable components built with Tailwind CSS v4.

## Overview

The Wondermore Design System provides a comprehensive set of design tokens, components, and utilities for building consistent, branded user interfaces.

## Features

### 🎨 Brand Colors
Six full color scales (50-950) for each brand color:
- **Wonder Yellow** (`#F99D22`)
- **Wonder Orange** (`#F26727`)
- **Orange-Red** (`#E42025`)
- **Deep Red** (`#AA1E23`)
- **Wonder Purple** (`#A40080`)
- **Wonder Gray** (`#63666A`)

### ✍️ Typography System
Complete typography using the Baikal font family:
- **Baikal Ultra Condensed** (Display & Title)
- **Baikal Expanded** (Subtitle)
- **Baikal Regular** (Body & Headings)
- Predefined text styles: Display, Title, Subtitle, Heading, Subheading, Body, Body Small, Caption

### 📏 Design Tokens
- **Spacing Scale**: 2px to 40px (plus FULL)
- **Border Radius**: 2px to 20px (plus FULL)
- All tokens available as CSS custom properties

### 🧩 Components
- **Button** - 5 variants (primary, secondary, outline, ghost, destructive) × 3 sizes (sm, md, lg)
- **Card** - 3 variants (default, bordered, elevated) with Header, Content, and Footer sub-components
- **Input** - With label, error states, helper text, and disabled states

## Installation

```bash
# Clone the repository
git clone https://github.com/GliderPilot74/wondermore-design-system.git

# Install dependencies
npm install
```

## Usage

### Import Components

```tsx
import { Button } from './components/Button';
import { Card, CardHeader, CardContent, CardFooter } from './components/Card';
import { Input } from './components/Input';
```

### Using Buttons

```tsx
<Button variant="primary" size="md">Click Me</Button>
<Button variant="secondary" size="lg">Secondary Action</Button>
<Button variant="outline" size="sm">Outline</Button>
```

### Using Cards

```tsx
<Card variant="elevated">
  <CardHeader>
    <h4>Card Title</h4>
  </CardHeader>
  <CardContent>
    <p>Card content goes here...</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Action</Button>
  </CardFooter>
</Card>
```

### Using Inputs

```tsx
<Input 
  label="Email Address" 
  type="email"
  placeholder="Enter your email"
  helperText="We'll never share your email."
/>

<Input 
  label="Password" 
  type="password"
  error="Password must be at least 8 characters"
/>
```

## Design Tokens

All design tokens are defined as CSS custom properties in `/styles/globals.css`.

### Using Color Tokens

```css
/* In your CSS */
background-color: var(--wonder-orange-500);
color: var(--wonder-gray-700);

/* In Tailwind classes */
className="bg-[var(--wonder-orange-500)] text-[var(--wonder-gray-700)]"
```

### Using Spacing Tokens

```css
/* Available spacing values */
--spacing-3xs: 2px;
--spacing-2xs: 4px;
--spacing-xs: 6px;
--spacing-s: 8px;
--spacing-m: 12px;
--spacing-l: 16px;
--spacing-xl: 20px;
--spacing-2xl: 24px;
--spacing-3xl: 32px;
--spacing-4xl: 40px;
--spacing-full: 999px;

/* Usage */
padding: var(--spacing-xl);
margin: var(--spacing-2xl);
```

### Using Typography Utilities

```tsx
<h1 className="text-display">Display Heading</h1>
<h2 className="text-title">Title Heading</h2>
<p className="text-body">Body text</p>
<p className="text-body-small">Small body text</p>
<p className="text-caption">Caption text</p>
```

## Color Palette Reference

### Wonder Yellow
```
50:  #fef9ec
100: #fdf2d3
200: #fbe3a6
300: #f8ce6e
400: #f5b034
500: #F99D22 ← Brand Color
600: #dd7d0b
700: #b8590c
800: #954511
900: #7a3912
950: #461c06
```

### Wonder Orange
```
50:  #fef4ee
100: #fde6d7
200: #fac9ae
300: #f7a57a
400: #f37544
500: #F26727 ← Brand Color
600: #dc3e0f
700: #b72d0f
800: #922614
900: #762213
950: #400e08
```

### Orange-Red
```
50:  #fef2f2
100: #fee2e2
200: #fecaca
300: #fca5a5
400: #f87171
500: #E42025 ← Brand Color
600: #c41822
700: #a3131c
800: #86131a
900: #70161c
950: #3d0609
```

### Deep Red
```
50:  #fef2f2
100: #fee2e3
200: #fecacc
300: #fca5a8
400: #f87176
500: #AA1E23 ← Brand Color
600: #991b1f
700: #80171b
800: #6a161a
900: #59181b
950: #300709
```

### Wonder Purple
```
50:  #fdf4ff
100: #fae8ff
200: #f5d0fe
300: #f0abfc
400: #e879f9
500: #A40080 ← Brand Color
600: #8c0070
700: #74005d
800: #5f004d
900: #4f0040
950: #2d0024
```

### Wonder Gray
```
50:  #f6f7f7
100: #e2e4e5
200: #c5c9cc
300: #a0a6aa
400: #7f8589
500: #63666A ← Brand Color
600: #565a5d
700: #494c4f
800: #404143
900: #38393b
950: #232426
```

## Typography Specifications

| Style | Font | Size | Line Height | Weight | Transform |
|-------|------|------|-------------|--------|-----------|
| Display (H1) | Baikal Ultra Condensed | 80px | 120px | Medium (500) | Uppercase |
| Title (H2) | Baikal Ultra Condensed | 47px | 71px | Regular (400) | Uppercase |
| Subtitle (H3) | Baikal Expanded | 36px | 54px | Regular (400) | Uppercase |
| Heading (H4) | Baikal Regular | 27px | 41px | Regular (400) | Uppercase |
| Subheading (H5) | Baikal Regular | 21px | 32px | Regular (400) | Uppercase |
| Body | Baikal Regular | 16px | 24px | Regular (400) | None |
| Body Bold | Baikal Regular | 16px | 24px | Bold (700) | None |
| Body Small | Baikal Regular | 14px | 20px | Regular (400) | None |
| Caption | Baikal Regular | 12px | 18px | Regular (400) | Uppercase |

## Project Structure

```
wondermore-design-system/
├── App.tsx                 # Demo application
├── components/
│   ├── Button.tsx         # Button component with variants
│   ├── Card.tsx           # Card component with sub-components
│   └── Input.tsx          # Input component with states
├── styles/
│   └── globals.css        # Design tokens and base styles
└── README.md
```

## Component API

### Button

| Prop | Type | Default | Options |
|------|------|---------|----------|
| variant | string | 'primary' | 'primary', 'secondary', 'outline', 'ghost', 'destructive' |
| size | string | 'md' | 'sm', 'md', 'lg' |
| disabled | boolean | false | - |
| className | string | '' | - |

### Card

| Prop | Type | Default | Options |
|------|------|---------|----------|
| variant | string | 'default' | 'default', 'bordered', 'elevated' |
| className | string | '' | - |

### Input

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Input label text |
| error | string | - | Error message to display |
| helperText | string | - | Helper text below input |
| disabled | boolean | false | Disable the input |
| className | string | '' | Additional CSS classes |

## Technologies

- **React** - Component library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **CSS Custom Properties** - Design tokens

## Browser Support

Modern browsers that support CSS Custom Properties:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this design system in your projects!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for Wondermore

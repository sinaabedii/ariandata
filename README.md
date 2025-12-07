# Arian Data Website

A modern, responsive website for **Arian Dadeh Hooshmand Caspian** - a software and artificial intelligence company.

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: next-themes (Dark/Light mode)

## Features

- 🎨 Modern, minimalist design with glass morphism effects
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js 14
- 🎯 SEO optimized
- 🧩 Reusable component design system

## Pages

1. **Home** - Engaging hero section, features, stats, services, testimonials
2. **Products** - Detailed product showcase with interactive navigation
3. **About Us** - Company story, mission, vision, values, timeline
4. **Contact** - Contact form with validation, contact info
5. **Team** - Leadership and team member profiles

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── products/           # Products page
│   └── team/               # Team page
├── components/
│   ├── home/               # Home page sections
│   ├── layout/             # Header, Footer
│   ├── products/           # Product page components
│   └── ui/                 # Reusable UI components
├── context/                # React Context providers
└── lib/                    # Utility functions
```

## Color Palette

Based on the company logo:

- **Primary**: Deep Navy Blue (`#1e3a5f`)
- **Secondary**: Lighter blues
- **Accent**: Cyan, Teal

## Backend Integration

This frontend is designed to work with a Django backend with PostgreSQL database. API endpoints should be configured in the environment variables.

## License

© 2024 Arian Data. All rights reserved.

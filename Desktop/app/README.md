# The Godfather Trilogy Tribute Website

A beautiful, cinematic tribute to Francis Ford Coppola's masterpiece trilogy - The Godfather. Built with React, TypeScript, and Tailwind CSS.

![The Godfather](https://img.shields.io/badge/The-Godfather-red?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-cyan?style=for-the-badge)

## 🎬 About This Project

This website is a fan-made tribute celebrating the artistry, storytelling, and cultural impact of The Godfather saga (1972-1990). It features:

- **Elegant Hero Section** with typewriter effect and parallax scrolling
- **Movie Showcase** displaying all three films with detailed information
- **Character Carousel** with 3D card effects featuring the Corleone family
- **Iconic Quotes** section with auto-rotating famous lines
- **Legacy Timeline** showcasing the trilogy's cultural impact
- **Infinite Marquee** with classic quotes and accolades

## ✨ Features

- 🎨 **Cinematic Design** - Dark theme with gold accents, film grain effects
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🎭 **Smooth Animations** - Intersection Observer-based reveal effects
- ⚡ **Performance Optimized** - Lazy loading, optimized assets
- 🎯 **TypeScript** - Full type safety
- 🎪 **Modern Stack** - React 19, Vite 7, Tailwind CSS 3

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5.9](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Cinzel, Playfair Display, Inter

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/the-godfather-tribute.git
cd the-godfather-tribute

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🏗️ Building for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
the-godfather-tribute/
├── src/
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Main hero section
│   │   ├── Marquee.tsx    # Infinite scrolling marquee
│   │   ├── Movies.tsx     # Movie cards showcase
│   │   ├── Characters.tsx # Character carousel
│   │   ├── Quotes.tsx     # Iconic quotes section
│   │   ├── Legacy.tsx     # Legacy and timeline
│   │   └── Footer.tsx     # Footer component
│   ├── components/ui/     # shadcn/ui components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
│   └── images/            # Movie posters and character images
└── dist/                  # Build output (generated)
```

## 🎨 Design System

### Colors
- **Background**: `#0f0f0f` (Deep black)
- **Gold Accent**: `#d4af37` (Cinema gold)
- **Red Accent**: `#8b0000` (Blood red)
- **Cream Text**: `#e8dcc8` (Vintage paper)

### Typography
- **Headings**: Cinzel (Serif)
- **Quotes**: Playfair Display (Italic Serif)
- **Body**: Inter (Sans-serif)

### Effects
- Film grain overlay
- Vignette effect
- Smooth scroll reveal animations
- Parallax scrolling
- 3D card transforms

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop your project folder

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select `gh-pages` branch or main branch's `/dist` folder

## 📝 Required Images

Place the following images in `public/images/`:

- `hero-don.jpg` - Hero section background
- `poster-godfather-1.jpg` - The Godfather (1972)
- `poster-godfather-2.jpg` - The Godfather Part II (1974)
- `poster-godfather-3.jpg` - The Godfather Part III (1990)
- `character-vito.jpg` - Don Vito Corleone
- `character-michael.jpg` - Michael Corleone
- `character-sonny.jpg` - Sonny Corleone
- `character-tom.jpg` - Tom Hagen
- `character-kay.jpg` - Kay Adams

## 🎬 Credits

- **Films**: The Godfather Trilogy by Paramount Pictures
- **Director**: Francis Ford Coppola
- **Based on**: Novel by Mario Puzo

## 📄 License

This is a fan-made tribute project. The Godfather and all related trademarks are property of Paramount Pictures. This project is for educational and demonstration purposes only.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ⭐ Show Your Support

If you like this project, please consider giving it a star ⭐

---

Made with ❤️ for cinema lovers

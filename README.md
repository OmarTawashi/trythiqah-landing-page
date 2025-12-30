# Trythiqah Landing Page

A modern React.js landing page inspired by Foodics, built with Vite and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🚀 Fast development with Vite
- 💅 Styled with Tailwind CSS
- 📱 Fully responsive mobile-first design
- 🎯 Component-based architecture

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header with dropdown menus
│   │   ├── Hero.jsx        # Hero section with CTA buttons
│   │   ├── Clients.jsx     # Client logos section
│   │   ├── Features.jsx    # Features showcase section
│   │   ├── Testimonials.jsx # Customer testimonials
│   │   └── Footer.jsx      # Footer with links and contact info
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles with Tailwind
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Routing (ready for future use)

## Customization

- Update colors in `tailwind.config.js`
- Modify components in `src/components/`
- Add new sections by creating new components and importing them in `App.jsx`

## License

MIT


# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. This project showcases my work, skills, and professional experience in a clean and interactive way.

## Features

- 🎨 Modern and responsive design
- ⚡ Fast performance with Vite
- 📱 Mobile-first approach
- 🎭 Smooth animations and transitions
- 🔍 SEO optimized
- 🌙 Dark/Light mode support

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion (for animations)
- React Router (for navigation)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/FNDme/fndme.github.io
cd fndme.github.io
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure your personal information:

   - Open `src/data/personalInfo.ts`
   - Update the personal information with your details

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
portfolio/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── assets/        # Images, fonts, etc.
│   ├── styles/        # Global styles and Tailwind config
│   ├── utils/         # Helper functions and utilities
│   ├── data/          # Data files (personal info, projects, etc.)
│   └── App.tsx        # Main application component
├── public/            # Static files
└── package.json       # Project dependencies and scripts
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Deployment

The project is configured for easy deployment to various platforms:

- Vercel
- Netlify
- GitHub Pages

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please refer to the contact information in `src/data/personalInfo.ts`.

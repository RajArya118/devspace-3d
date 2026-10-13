# project-name

A modern React application built with Vite.

## Project Structure

```text
project-name/
├── public/              # Static assets directly served
│   └── vite.svg
├── src/
│   ├── assets/          # Imported images, SVGs, media
│   │   └── react.svg
│   ├── components/      # Reusable UI components
│   │   └── Header.jsx
│   ├── pages/           # Page-level components / views
│   │   └── Home.jsx
│   ├── hooks/           # Custom React hooks
│   │   └── useCounter.js
│   ├── data/            # Mock data, constants, static fixtures
│   │   └── sampleData.js
│   ├── styles/          # Global and component stylesheets
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point (DOM root mount)
├── index.html           # HTML template
├── package.json         # Project metadata and dependencies
├── vite.config.js       # Vite configuration
└── README.md
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

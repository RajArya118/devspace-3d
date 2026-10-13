# DevSpace 3D — Modern Full-Stack Developer Portfolio

An interactive, animated 3D developer portfolio built with React 19, Vite, Framer Motion, and a Node.js + Express TypeScript backend.

---

## 🚀 Tech Stack

- **Frontend:** React 19, Vite 6, Framer Motion, Lucide React, Glassmorphism CSS
- **Backend:** Node.js, Express, TypeScript, tsx, CORS, dotenv
- **Database:** PostgreSQL 18 (Local instance on port 5432)
- **DevOps:** Git, Ubuntu WSL2, Docker Desktop

---

## 📂 Quick Project Architecture

```text
project-name/
├── public/                 # Static public assets (Vite SVG)
├── src/                    # Frontend source (React 19)
│   ├── components/         # Reusable UI (Navbar, Hero, About, Skills, Projects, Footer)
│   ├── data/               # Single source of truth (portfolioData.js)
│   ├── styles/             # Global CSS tokens & ambient 3D glow (index.css, App.css)
│   ├── App.jsx             # Master layout assembler
│   └── main.jsx            # DOM entry point
├── backend/                # REST API (Express + TypeScript)
│   ├── src/
│   │   ├── controllers/    # Route controllers (health, projects, contact)
│   │   ├── routes/         # Endpoint declarations (/api/*)
│   │   ├── middleware/     # Centralized 404 & error handlers
│   │   └── server.ts       # Server bootstrap & CORS configuration
│   └── tsconfig.json
├── PROJECT_DOCUMENTATION.md # Complete architecture & code structure manual
└── CODE_STRUCTURE_AND_ARCHITECTURE.md # Master reference guide
```

---

## ⚡ Getting Started (Windows PowerShell)

### 1. Run the Frontend (Port 5173)
```powershell
# In project root
npm run dev
```
Open **http://localhost:5173** in your browser.

### 2. Run the Backend API (Port 5000)
```powershell
cd backend
npm run dev
```
Open **http://localhost:5000/api/health** to verify the server is running.

### 3. Verify Endpoints via PowerShell
```powershell
# Health check
Invoke-RestMethod http://localhost:5000/api/health

# Projects feed
Invoke-RestMethod http://localhost:5000/api/projects
```

---

## 📖 In-Depth Documentation

Detailed architectural diagrams, sequence flows, component anatomy, and API specifications are available in:
- [📄 `PROJECT_DOCUMENTATION.md`](./PROJECT_DOCUMENTATION.md)
- [📄 `CODE_STRUCTURE_AND_ARCHITECTURE.md`](./CODE_STRUCTURE_AND_ARCHITECTURE.md)

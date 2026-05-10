# GitHub Pages Configuration

This website is designed to be deployed on GitHub Pages.

## Setup Instructions

1. Go to your repository settings at: `https://github.com/luisrendcn/equiflow/settings/pages`

2. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`

3. Click **Save**

4. Your site will be published at: `https://luisrendcn.github.io/equiflow/`

## Automatic Deployment

The website will be automatically deployed to GitHub Pages whenever you push changes to the `main` branch.

## Local Testing

To test locally before pushing:

### Using Python 3
```bash
cd equiflow/web
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

### Using Node.js
```bash
cd equiflow/web
npx http-server
```

## Features

✨ No build process required - pure HTML/CSS/JavaScript
🚀 Fast deployment via GitHub Pages
📱 Fully responsive design
🎨 Modern animations and interactions
♿ Accessibility features included

## Content

All content is derived exclusively from the academic document "Plataforma Integral de Gestión y Fortalecimiento de Equipos Académicos – EquiFlow"

- Authors: Juan Camilo Ossa Gutiérrez, Luis Fernando Rendón López
- Institution: Universidad Católica Luis Amigó
- Faculty: Ingeniería
- Location: Medellín, Colombia
- Year: 2026

---

**Note**: This is a static site designed as an interactive presentation resource. No backend is required.

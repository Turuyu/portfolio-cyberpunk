# ◆ NEXUS Systems — Cyberpunk Landing Page

Landing page futurista para una empresa de ciberseguridad ficticia, diseñada como proyecto de portfolio para demostrar habilidades avanzadas de frontend y animaciones.

## 🚀 Demo

[Ver demo en vivo](#) _(próximamente)_

## ✨ Features

- **Typing effect** — Texto que se escribe solo en el hero
- **Partículas interactivas** — Canvas con red neural que reacciona al mouse
- **Scroll progress bar** — Barra de progreso con gradiente neón
- **Contadores animados** — Números que cuentan desde 0 al entrar en viewport
- **Efecto glitch** — Animación glitch en hover sobre las cards
- **Scroll reveal** — Animaciones de entrada por sección
- **Navbar con glow** — Navegación fija con efecto luminoso al scrollear
- **Scanlines CRT** — Overlay de líneas tipo monitor retro
- **Diseño 100% responsive** — Mobile-first con menú hamburguesa

## 🛠️ Stack

- **Vite** — Build tool y dev server
- **React 18** — UI library
- **TypeScript** — Type safety
- **CSS Modules** — Scoped styling
- **Canvas API** — Partículas animadas sin dependencias

## 📦 Instalación

```bash
git clone https://github.com/Turuyu/portfolio-cyberpunk.git
cd portfolio-cyberpunk
npm install
npm run dev
```

El servidor corre en `http://localhost:5173`.

## 🏗️ Estructura

```
src/
├── components/
│   ├── Navbar.tsx           # Navegación sticky con glow
│   ├── Hero.tsx             # Hero con typing effect + partículas
│   ├── Particles.tsx        # Canvas de partículas interactivas
│   ├── TypingEffect.tsx     # Hook de efecto de escritura
│   ├── ScrollProgress.tsx   # Barra de progreso de scroll
│   ├── ScrollReveal.tsx     # Animaciones de entrada
│   ├── Services.tsx         # Cards con glitch hover
│   ├── Features.tsx         # Stats con contadores animados
│   ├── Pricing.tsx          # Tabla de planes
│   ├── Contact.tsx          # Formulario estilo terminal
│   └── Footer.tsx           # Footer
├── App.tsx
├── App.css                  # Variables CSS + scanlines
└── index.css                # Reset y base
```

## 🎨 Paleta

| Color | Hex | Uso |
|-------|-----|-----|
| Negro profundo | `#0a0a0f` | Fondo principal |
| Cyan neón | `#00f0ff` | Acento primario |
| Rosa neón | `#ff006e` | Acento secundario |
| Púrpura | `#8b5cf6` | Acento terciario |

## 📸 Screenshots

_(Agregar screenshots del proyecto)_

## 📝 License

MIT

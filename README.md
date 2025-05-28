# Vue 3 Project Template 2025

A modern, production-ready Vue 3 template with comprehensive tooling and automated setup.

## 🚀 Quick Start

### 1. Use This Template
- Click the "Use this template" button above
- Create your new repository
- **Note**: This creates a separate project, not a fork

### 2. Clone and Install
```bash
git clone https://github.com/yourusername/your-new-repo.git
cd your-new-repo
npm install
```

### 3. Automated Setup (Recommended) 🎯
```bash
npm run setup
```

This interactive script will:
- Replace all template variables with your project details
- Update package.json, index.html, sitemap.xml, and all config files
- Configure Google Analytics and tracking codes
- Customize console branding and meta tags
- Convert package.json keywords to proper array format

### 4. Start Developing
```bash
npm run dev
```

## 📁 What's Included

### Core Framework
- **Vue 3** with Composition API
- **Vue Router 4** for routing
- **Pinia** for state management
- **Vite** for lightning-fast builds

### Development Tools
- **ESLint + Prettier** with consistent formatting
- **Vitest** for testing with 8 example tests
- **Husky** git hooks for code quality
- **Hot Module Replacement** for instant updates

### Production Ready
- **SEO optimized** with meta tags, sitemap, robots.txt
- **PWA ready** with web manifest
- **Google Analytics & GTM** integration
- **Security headers** and CSP configuration
- **Performance optimized** builds

### Template Features
- **Automated variable replacement** system
- **Local testing** with `npm run test:template`
- **Comprehensive configuration** files
- **Example components** and composables

## 🔧 Template Variables

The template uses bracketed variables like `[PROJECT_NAME]` that get replaced during setup:

- `[PROJECT_NAME]` - Your project name
- `[PROJECT_DESCRIPTION]` - Project description
- `[AUTHOR_NAME]` - Your name
- `[AUTHOR_EMAIL]` - Your email
- `[PROJECT_URL]` - Your domain
- `[GA_MEASUREMENT_ID]` - Google Analytics ID
- And many more...

## 🧪 Testing Your Template

For template developers, test locally without GitHub:

```bash
npm run test:template
```

This creates a copy at `../test-template-project` simulating the GitHub template process.

## 📦 Deployment

Ready to deploy to:
- **Vercel** (recommended) - Zero config
- **Netlify** - Auto-deploy on push
- **GitHub Pages** - Static hosting
- **Any static hosting** service

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests
npm run test:ui      # Visual test runner
npm run lint         # Check code quality
npm run format       # Format code
npm run setup        # Configure template variables
npm run test:template # Test template locally
```

## 📂 Project Structure

```
├── src/
│   ├── components/    # Vue components
│   ├── views/         # Page components
│   ├── composables/   # Vue 3 composables
│   ├── stores/        # Pinia stores
│   ├── utils/         # Utilities & HTTP client
│   └── test/          # Test files
├── public/
│   ├── js/            # Static JavaScript
│   ├── css/           # Static CSS
│   └── icons/         # Favicons & app icons
├── scripts/           # Build & setup scripts
└── docs/              # Documentation
```

## 🤝 Contributing to the Template

Found a bug or want to improve the template itself?

- **Fork this repository** (not "Use this template")
- Make your changes
- Submit a pull request to improve the template for everyone

## ⚠️ Template vs Fork

- **Use Template**: Creates independent project (recommended for new projects)
- **Fork**: Creates connected copy (only for contributing to this template)

## 📊 Performance

- **Build time**: ~900ms
- **Bundle size**: 86KB (gzipped: 33KB)
- **CSS size**: 4.5KB (gzipped: 1.4KB)
- **Test coverage**: 8/8 passing
- **Lighthouse**: 100/100/100/100

## 📄 License

MIT License - feel free to use this template for any project.

---

**🎯 Production-ready Vue 3 template with automated setup!**

Built by [Peter Benoit](https://peterbenoit.com) • [Brick City Creative](https://brickcitycreative.com)

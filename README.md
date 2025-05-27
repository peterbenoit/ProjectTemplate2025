# Project Template 2025 🚀

A comprehensive modern Vue.js project template with all the essential tools for rapid development in 2025.

## ✨ Features

- **Vue 3** with Composition API
- **Vue Router** for client-side routing
- **Pinia** for state management
- **Vite** for fast development and building
- **Vitest** with Vue Test Utils for testing
- **ESLint** + **Prettier** for code quality
- **Husky** for git hooks
- **Modern CSS** with custom properties and utility classes
- **Dark mode** support
- **Responsive design** out of the box
- **HTTP client** with interceptors
- **Form validation** utilities
- **CI/CD** with GitHub Actions
- **Multi-platform deployment** (GitHub Pages, Netlify, Vercel)

## 🛠️ Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/ProjectTemplate2025.git
cd ProjectTemplate2025

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Run linting
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable Vue components
├── views/              # Page components
├── composables/        # Vue 3 composition functions
├── stores/            # Pinia stores
├── router/            # Vue Router configuration
├── utils/             # Utility functions
└── test/              # Test files
```

## 🧪 Testing

This template uses **Vitest** with **Vue Test Utils** for component testing:

```bash
# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui
```

## 🚀 Deployment

### GitHub Pages

1. **Enable GitHub Pages** in your repository settings:

    - Go to Settings > Pages
    - Source: "Deploy from a branch"
    - Branch: "gh-pages"
    - Folder: "/ (root)"

2. **Update the base URL** in `vite.config.js`:

    ```javascript
    base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
    ```

3. **Push to main branch** - the workflow will automatically deploy to GitHub Pages

### Netlify

1. Connect your repository to Netlify
2. Build settings are already configured in `netlify.toml`
3. Deploy automatically on push

### Vercel

1. Connect your repository to Vercel
2. Build settings are already configured in `vercel.json`
3. Deploy automatically on push

## ⚙️ Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# App Configuration
VITE_APP_NAME="Your App Name"
VITE_API_BASE_URL="https://api.yourapp.com"
VITE_GOOGLE_ANALYTICS_ID="GA_MEASUREMENT_ID"
```

### GitHub Actions

The template includes a complete CI/CD pipeline that:

- Runs tests
- Builds the application
- Deploys to GitHub Pages

Environment variables can be set in GitHub repository settings under **Settings > Secrets and Variables > Actions**.

## 🎨 Styling

The template includes:

- **Modern CSS** with custom properties
- **Utility classes** for common patterns
- **Dark mode** support
- **Responsive design** utilities

```css
/* Custom properties for theming */
:root {
    --color-primary: #646cff;
    --color-primary-dark: #535bf2;
    --background: #ffffff;
    --text: #213547;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    :root {
        --background: #1a1a1a;
        --text: #ffffff;
    }
}
```

## 🧩 Vue 3 Composition API

Example composable:

```javascript
// src/composables/useCounter.js
import { ref, computed } from 'vue';

export function useCounter(initialValue = 0) {
    const count = ref(initialValue);

    const doubleCount = computed(() => count.value * 2);

    const increment = () => count.value++;
    const decrement = () => count.value--;

    return {
        count,
        doubleCount,
        increment,
        decrement,
    };
}
```

## 📡 HTTP Client

Built-in HTTP client with interceptors:

```javascript
import { http } from '@/utils/http';

// GET request
const response = await http.get('/api/users');

// POST request
const newUser = await http.post('/api/users', {
    name: 'John Doe',
    email: 'john@example.com',
});
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## 📦 Dependencies

### Core

- Vue 3
- Vue Router
- Pinia
- Vite

### Development

- Vitest
- Vue Test Utils
- ESLint
- Prettier
- Husky
- lint-staged

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if needed
5. Run linting and tests
6. Submit a pull request

## 📞 Support

- Create an [issue](https://github.com/peterbenoit/ProjectTemplate2025/issues) for bug reports
- Start a [discussion](https://github.com/peterbenoit/ProjectTemplate2025/discussions) for questions

---

**Happy coding! 🎉**

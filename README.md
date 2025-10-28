# 🌐 Multilingual Web Agency Portfolio

A modern, responsive web agency portfolio built with Next.js 16, featuring internationalization (i18n) and dark mode support.

## ✨ Features

- 🌍 **Multilingual Support** - English, French, Dutch with next-intl
- 🌙 **Dark/Light Mode** - Smooth theme switching with persistence
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Next.js 16** - Latest features with Turbopack
- 🎨 **Tailwind CSS** - Modern styling with dark mode variants
- 🔧 **TypeScript** - Type-safe development
- 🚀 **Performance Optimized** - Fast loading and smooth animations

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see your site!

## 🌍 Language Support

- **English** (`/en`) - Default language
- **French** (`/fr`) - Français
- **Dutch** (`/nl`) - Nederlands

### Adding New Languages

1. Create a new message file: `src/messages/[locale].json`
2. Add the locale to `src/i18n.ts`:
   ```typescript
   export const locales = ['en', 'nl', 'fr', 'de'] as const; // Add 'de' for German
   ```
3. Update the language switcher in `src/components/layout/Header.tsx`

## 🎨 Theme System

The site supports both light and dark modes:
- Toggle using the moon/sun button in the header
- Automatically detects system preference
- Saves user preference in localStorage
- Smooth transitions between themes

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── layout/           # Header, Footer, Navigation
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   ├── ui/               # Reusable UI components
│   └── providers/        # Context providers
├── messages/             # Translation files
│   ├── en.json          # English translations
│   ├── fr.json          # French translations
│   └── nl.json          # Dutch translations
└── lib/                 # Utility functions
```

## 🛠️ Next Steps & Improvements

### Phase 1: Content & Pages
- [ ] **Blog System** - Add a blog with markdown support
- [ ] **Project Portfolio** - Detailed project case studies
- [ ] **About Page** - Team information and company story
- [ ] **Services Pages** - Detailed service descriptions
- [ ] **Contact Form** - Working contact form with email integration

### Phase 2: Enhanced Features
- [ ] **CMS Integration** - Add Sanity or Strapi for content management
- [ ] **SEO Optimization** - Meta tags, sitemap, structured data
- [ ] **Analytics** - Google Analytics or Plausible integration
- [ ] **Performance** - Image optimization, lazy loading
- [ ] **Animations** - Framer Motion for smooth page transitions

### Phase 3: Advanced Functionality
- [ ] **Search** - Site-wide search functionality
- [ ] **Newsletter** - Email subscription system
- [ ] **Client Portal** - Login area for clients
- [ ] **Live Chat** - Customer support integration
- [ ] **A/B Testing** - Conversion optimization

### Phase 4: Technical Enhancements
- [ ] **Database** - Add PostgreSQL with Prisma
- [ ] **Authentication** - User accounts and admin panel
- [ ] **API Routes** - Backend functionality
- [ ] **Testing** - Unit and integration tests
- [ ] **CI/CD** - Automated deployment pipeline

## 🎯 Quick Wins (Easy Improvements)

### 1. Add More Animations
```bash
npm install framer-motion
```

### 2. Improve SEO
```typescript
// In your page components
export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
  openGraph: {
    title: 'Your Page Title',
    description: 'Your page description',
    images: ['/og-image.jpg'],
  },
};
```

### 3. Add Loading States
```typescript
// Add loading.tsx files in your app directory
export default function Loading() {
  return <div>Loading...</div>;
}
```

### 4. Error Handling
```typescript
// Add error.tsx files for error boundaries
'use client';
export default function Error({ error, reset }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

## 📊 Performance Tips

1. **Image Optimization**
   ```typescript
   import Image from 'next/image';
   // Always use Next.js Image component
   ```

2. **Font Optimization**
   ```typescript
   import { Inter } from 'next/font/google';
   const inter = Inter({ subsets: ['latin'] });
   ```

3. **Bundle Analysis**
   ```bash
   npm install @next/bundle-analyzer
   ```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [Lucide React](https://lucide.dev/) - Icons
- [Vercel](https://vercel.com/) - Deployment platform

---

**Happy coding! 🚀**

*Built with ❤️ using Next.js and Tailwind CSS*
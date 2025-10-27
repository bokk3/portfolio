# 🚀 Web Development Agency Portfolio

A modern, multilingual portfolio and business website built with Next.js 15, TypeScript, and Tailwind CSS. Showcasing web development projects and services with a professional blog and contact system.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)

## ✨ Features

- 🌍 **Multilingual** - Full support for English, Dutch (NL), and French (FR)
- 🎨 **Modern UI** - Responsive design with Tailwind CSS
- 📱 **Mobile-First** - Hamburger menu and optimized mobile experience
- 🔐 **Authentication** - Secure admin dashboard with Better Auth
- 📝 **Blog System** - Full-featured blog with categories and tags
- 💼 **Portfolio** - Showcase projects with detailed case studies
- 📬 **Contact System** - Lead management and inquiry tracking
- 🎯 **SEO Optimized** - Meta tags, structured data, and sitemap
- ⚡ **Performance** - Server-side rendering and optimized images
- 🗄️ **Type-Safe Database** - PostgreSQL with Prisma ORM

## 🛠️ Tech Stack

### Core
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL (Prisma Postgres)
- **ORM:** Prisma

### Features
- **Authentication:** Better Auth
- **Internationalization:** next-intl
- **Forms:** React Hook Form + Zod
- **UI Components:** shadcn/ui (planned)
- **Icons:** Lucide React

### Development
- **Package Manager:** npm
- **Code Quality:** ESLint
- **Dev Server:** Turbopack

## 📋 Progress Tracker

### Phase 1: Foundation ✅
- [x] Next.js project setup
- [x] TypeScript configuration
- [x] Tailwind CSS integration
- [x] Database schema design
- [x] Prisma setup and migration
- [x] Project structure

### Phase 2: Core Features 🚧
- [ ] Navigation component (desktop & mobile)
- [ ] Footer component
- [ ] Landing page with hero section
- [ ] Internationalization setup (EN/NL/FR)
- [ ] Language toggle component
- [ ] Better Auth integration
- [ ] Protected admin routes

### Phase 3: Content Pages 📋
- [ ] Projects overview page
- [ ] Project detail pages
- [ ] Blog listing page
- [ ] Blog post pages
- [ ] Contact page with form
- [ ] About/Services section

### Phase 4: Admin Dashboard 📋
- [ ] Admin layout
- [ ] Project management (CRUD)
- [ ] Blog management (CRUD)
- [ ] Contact submissions view
- [ ] Media upload system
- [ ] Site settings

### Phase 5: Polish & Launch 📋
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Analytics integration
- [ ] Error handling
- [ ] Loading states
- [ ] Deployment setup
- [ ] Domain configuration

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn
- PostgreSQL database (or Prisma Postgres account)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your database URL and secrets:
   ```env
   DATABASE_URL="your_database_url"
   BETTER_AUTH_SECRET="your_secret_key"
   BETTER_AUTH_URL="http://localhost:3000"
   ```

4. **Initialize the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── prisma/
│   ├── migrations/          # Database migrations
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
│   ├── images/
│   └── locales/            # Translation files
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── [locale]/       # Internationalized routes
│   │   ├── api/            # API routes
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── layout/        # Layout components (Nav, Footer)
│   │   └── features/      # Feature-specific components
│   ├── lib/               # Utilities and configurations
│   │   ├── prisma.ts      # Prisma client
│   │   ├── auth.ts        # Auth configuration
│   │   └── utils.ts       # Helper functions
│   ├── types/             # TypeScript type definitions
│   └── styles/            # Global styles
├── .env                   # Environment variables
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🗄️ Database Schema

### Key Models
- **User** - Authentication and user management
- **Project** - Portfolio projects with multilingual content
- **Post** - Blog posts with categories and tags
- **ContactSubmission** - Contact form submissions and leads
- **SiteSetting** - Dynamic site configuration

[View full schema](prisma/schema.prisma)

## 🌍 Internationalization

Supported languages:
- 🇬🇧 English (EN) - Default
- 🇳🇱 Dutch (NL)
- 🇫🇷 French (FR)

URL structure: `/{locale}/path`
- `/en/projects`
- `/nl/projecten`
- `/fr/projets`

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check

# Prisma commands
npx prisma studio    # Open Prisma Studio (database GUI)
npx prisma migrate dev   # Create and apply migrations
npx prisma generate  # Generate Prisma Client
npx prisma db push   # Push schema changes (dev only)
```

## 🔐 Authentication

Admin access is secured with Better Auth:
- Email/password authentication
- OAuth providers (Google, optional)
- Protected admin routes
- Role-based access control

## 📦 Deployment

### Recommended Platforms
- **Vercel** - Optimal for Next.js (automatic deployments)
- **Netlify** - Alternative with good Next.js support
- **Railway** - For database + app hosting together

### Environment Variables for Production
Ensure these are set in your deployment platform:
- `DATABASE_URL`
- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL`
- `NODE_ENV=production`

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For business inquiries or collaboration:
- **Website:** [your-domain.com](https://your-domain.com)
- **Email:** your-email@example.com
- **LinkedIn:** [Your Profile](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database powered by [Prisma](https://www.prisma.io/)
- Authentication by [Better Auth](https://www.better-auth.com/)
- Icons from [Lucide](https://lucide.dev/)

---

**⭐ Star this repository if you find it helpful!**

Made with ❤️ in Belgium 🇧🇪
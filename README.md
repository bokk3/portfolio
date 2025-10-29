# 🚀 Boris Truyens - Professional Web Developer Portfolio

A complete, production-ready multilingual web agency portfolio built with Next.js 16. Features a full contact management system, blog, project showcase, and comprehensive SEO optimization.

## ✨ Features

### 🌍 **Complete Multilingual System**
- **Dutch** (default), English, French with next-intl
- Automatic locale detection and routing
- SEO-optimized with hreflang tags
- Professional translations for all content

### 🎨 **Modern Design System**
- **Dark/Light Mode** - System preference detection + manual toggle
- **Fully Responsive** - Mobile-first design approach
- **Smooth Animations** - Professional hover effects and transitions
- **Accessibility** - WCAG compliant with proper ARIA labels

### 🛠️ **Technical Excellence**
- ⚡ **Next.js 16** with Turbopack for lightning-fast builds
- 🎨 **Tailwind CSS v3** with dark mode variants
- 🔧 **TypeScript** throughout for type safety
- 📊 **SEO Optimized** - Structured data, sitemap, meta tags
- 🐳 **Docker Ready** - Production containerization

### 📝 **Content Management**
- **Blog System** - Markdown-based with frontmatter
- **Project Portfolio** - Detailed case studies with filtering
- **Contact Management** - Full API with admin dashboard
- **Legal Compliance** - GDPR-ready privacy policy, terms, cookies

### 🔒 **Admin Features**
- **Contact Form API** - Secure submission and retrieval
- **Admin Dashboard** - View and manage contact entries
- **Status Tracking** - new → read → replied → archived
- **Authentication** - Token-based API security

## 🚀 Quick Start

### Development Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your site!

### Production Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Or use Docker
docker compose up --build
```

### Admin Access

- **Admin Dashboard**: `/admin/contacts`
- **API Token**: Set `ADMIN_API_TOKEN` in `.env.local`
- **Default Token**: Check `.env.local` for your secure token

## 🌍 Language Support

- **Dutch** (`/nl`) - **Default language** 🇳🇱
- **English** (`/en`) - English 🇺🇸
- **French** (`/fr`) - Français 🇫🇷

### Adding New Languages

1. Create a new message file: `src/messages/[locale].json`
2. Add the locale to `src/i18n.ts`:
   ```typescript
   export const locales = ['nl', 'en', 'fr', 'de'] as const; // Add 'de'
   ```
3. Update middleware.ts with the new locale
4. Add translations for all keys from existing files

## 🎨 Theme System

Advanced dark/light mode implementation:
- **System Detection** - Automatically follows OS preference
- **Manual Toggle** - Moon/sun button in header
- **Persistent Storage** - Remembers user choice
- **Smooth Transitions** - No flash of unstyled content (FOUC)
- **Component Support** - All components support both themes

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   │   ├── page.tsx       # Homepage
│   │   ├── services/      # Services page
│   │   ├── projects/      # Projects showcase
│   │   ├── blog/          # Blog system
│   │   └── contact/       # Contact page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API + admin
│   ├── admin/             # Admin dashboard
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots.txt
├── components/            # React components
│   ├── layout/           # Header, Footer, Navigation
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   ├── services/         # Services page components
│   ├── projects/         # Projects components
│   ├── contact/          # Contact form components
│   ├── blog/             # Blog components
│   ├── legal/            # Legal pages (Privacy, Terms, Cookies)
│   ├── seo/              # SEO components (Structured Data)
│   ├── ui/               # Reusable UI components
│   └── providers/        # Context providers (Theme, etc.)
├── content/              # Content files
│   └── blog/             # Blog posts in Markdown
│       ├── en/           # English blog posts
│       ├── fr/           # French blog posts
│       └── nl/           # Dutch blog posts
├── lib/                  # Utility functions
│   ├── blog.ts           # Blog utilities
│   ├── projects.ts       # Projects data
│   ├── database.ts       # Contact storage
│   └── auth.ts           # Admin authentication
├── messages/             # Translation files
│   ├── en.json          # English translations
│   ├── fr.json          # French translations
│   └── nl.json          # Dutch translations
└── data/                 # Local data storage
    └── contacts.json     # Contact form submissions
```

## 🎯 Current Status & Next Steps

### ✅ **Completed Features**
- [x] **Complete Multilingual System** - Dutch (default), English, French
- [x] **Blog System** - Markdown-based with frontmatter support
- [x] **Project Portfolio** - Detailed showcase with filtering
- [x] **Services Pages** - Comprehensive service descriptions
- [x] **Contact System** - Full API with admin dashboard
- [x] **SEO Optimization** - Meta tags, sitemap, structured data, OG images
- [x] **Legal Compliance** - Privacy policy, terms, cookie policy
- [x] **Dark/Light Mode** - System detection + manual toggle
- [x] **Docker Deployment** - Production-ready containerization
- [x] **Admin Dashboard** - Contact management with authentication

### 🚀 **Immediate Next Steps (Priority 1)**

#### **1. Email Integration** 
```bash
# Add email service for contact forms
npm install nodemailer @types/nodemailer
# or
npm install resend
```
- Configure SMTP in production `.env.local`
- Update contact API to send emails
- Add email templates for notifications

#### **2. Professional Email Setup**
- Set up `boris@truyens.pro` with Zoho Mail (free)
- Update all email references from ProtonMail
- Configure email forwarding and autoresponders

#### **3. Production Optimization**
- Monitor server performance and resource usage
- Set up automated backups for contact data
- Configure log rotation and monitoring
- Optimize nginx configuration for better performance

#### **4. Analytics & Monitoring**
```bash
npm install @vercel/analytics
# or configure Google Analytics
```
- Add Google Analytics 4
- Set up Google Search Console
- Configure error monitoring (Sentry)

### 🔄 **Phase 2: Business Growth**

#### **Content Marketing**
- [ ] **More Blog Posts** - SEO-focused technical articles
- [ ] **Case Studies** - Detailed project breakdowns
- [ ] **Client Testimonials** - Social proof collection
- [ ] **Portfolio Expansion** - Add more project examples

#### **Lead Generation**
- [ ] **Newsletter Signup** - Email list building
- [ ] **Free Resources** - Downloadable guides/templates
- [ ] **Contact Form Enhancement** - Multi-step wizard
- [ ] **Live Chat** - Instant customer support

#### **SEO & Marketing**
- [ ] **Local SEO** - Google My Business optimization
- [ ] **Social Media Integration** - LinkedIn, Twitter profiles
- [ ] **Schema Markup** - Rich snippets for services
- [ ] **Performance Optimization** - Core Web Vitals

### 🏗️ **Phase 3: Advanced Features**

#### **Client Portal**
- [ ] **Authentication System** - NextAuth.js integration
- [ ] **Project Dashboard** - Client project tracking
- [ ] **File Sharing** - Secure document exchange
- [ ] **Invoice System** - Payment tracking

#### **Business Tools**
- [ ] **CRM Integration** - HubSpot/Pipedrive connection
- [ ] **Calendar Booking** - Calendly integration
- [ ] **Proposal Generator** - Automated quote system
- [ ] **Time Tracking** - Project hour logging

### 🔧 **Phase 4: Technical Enhancements**

#### **Database Migration**
```bash
npm install prisma @prisma/client
npm install postgres
```
- Migrate from JSON to PostgreSQL
- Set up proper data relationships
- Add data backup systems

#### **Testing & Quality**
```bash
npm install vitest @testing-library/react
npm install playwright
```
- Unit tests for components
- Integration tests for API
- E2E tests for user flows
- Performance testing

#### **DevOps & Monitoring**
- [ ] **CI/CD Pipeline** - GitHub Actions
- [ ] **Error Monitoring** - Sentry integration
- [ ] **Performance Monitoring** - Vercel Analytics
- [ ] **Backup Systems** - Automated data backups

## ⚡ Quick Wins (30-minute improvements)

### 1. **Add Google Analytics**
```typescript
// Add to src/app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

### 2. **Improve Contact Form**
```typescript
// Add to contact form
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitted, setSubmitted] = useState(false);

// Add success message and loading states
```

### 3. **Add More Blog Posts**
```bash
# Create new blog posts in src/content/blog/[locale]/
# Follow the existing frontmatter format
```

### 4. **Social Media Links**
```typescript
// Update src/components/layout/Footer.tsx
// Replace '#' with actual social media URLs
```

### 5. **Performance Monitoring**
```bash
npm install @vercel/analytics
# Add to layout.tsx for instant performance insights
```

## � Configuaration & Setup

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Admin API Token (generate secure random string)
ADMIN_API_TOKEN=your-secure-token-here

# Email Configuration (for contact forms)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Database (when migrating from JSON)
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio

# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### API Endpoints

#### Contact Management
```bash
# Submit contact form
POST /api/contact

# Get all contacts (requires auth)
GET /api/contact
Authorization: Bearer your-admin-token

# Get single contact
GET /api/contact/[id]
Authorization: Bearer your-admin-token

# Update contact status
PATCH /api/contact/[id]
Authorization: Bearer your-admin-token
Body: { "status": "read" }

# Delete contact
DELETE /api/contact/[id]
Authorization: Bearer your-admin-token
```

#### Admin Dashboard
- **URL**: `/admin/contacts`
- **Authentication**: Use your `ADMIN_API_TOKEN`
- **Features**: View, filter, update contact status

## 🌐 **Live Deployment**

**🎉 Currently live at: [truyens.pro](https://truyens.pro)**

### Self-Hosted Setup (Current)
- **Domain**: truyens.pro (pre-owned)
- **Hosting**: Self-hosted on dedicated hardware
- **Reverse Proxy**: Nginx configuration
- **Containerization**: Docker Compose stack
- **SSL**: Let's Encrypt certificate

### Current Production Stack
```bash
# Production deployment with Docker
docker compose -f docker-compose.prod.yml up -d

# Nginx reverse proxy configuration
# SSL termination and static file serving
# PostgreSQL and Redis containers
```

### Server Management
```bash
# Update deployment
git pull origin main
docker compose down
docker compose up --build -d

# Monitor logs
docker compose logs -f web

# Backup contact data
cp data/contacts.json backups/contacts-$(date +%Y%m%d).json
```

### Production Checklist
- [x] Domain configured and live
- [x] SSL certificate active
- [x] Docker containers running
- [x] Nginx reverse proxy configured
- [ ] Email SMTP integration
- [ ] Automated backups setup
- [ ] Monitoring and alerting
- [ ] Log aggregation
- [ ] Performance optimization

## 📈 Business Development

### Lead Generation Strategy
1. **SEO Content** - Regular blog posts targeting "web development Belgium"
2. **Local SEO** - Google My Business optimization for Leuven area
3. **Social Proof** - Client testimonials and case studies
4. **Free Resources** - Downloadable guides and templates
5. **Networking** - Local business events and online communities

### Pricing Strategy
- **Starter Package**: €2,500 - Basic websites
- **Professional Package**: €5,000 - E-commerce and advanced features  
- **Enterprise Package**: Custom pricing - Large-scale applications
- **Maintenance**: €200-500/month - Ongoing support

### Client Onboarding
1. **Discovery Call** - Understand requirements
2. **Proposal** - Detailed scope and timeline
3. **Contract** - Clear terms and deliverables
4. **Kickoff** - Project planning and milestones
5. **Development** - Regular updates and feedback
6. **Launch** - Testing, deployment, and handover
7. **Support** - Ongoing maintenance and updates

## 🛠️ Technical Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **next-intl** - Internationalization

### Backend & Data
- **Next.js API Routes** - Serverless functions
- **JSON File Storage** - Simple contact management
- **Zod** - Runtime type validation
- **Node.js** - Server runtime

### DevOps & Deployment
- **Docker** - Containerization
- **Vercel** - Hosting and deployment
- **Git** - Version control
- **Environment Variables** - Configuration management

### SEO & Analytics
- **Structured Data** - JSON-LD for rich snippets
- **Open Graph** - Social media optimization
- **Sitemap** - Search engine indexing
- **Meta Tags** - Page-specific SEO

## 📞 Support & Contact

- **Website**: [truyens.pro](https://truyens.pro) ✅ **LIVE**
- **Email**: truyensboris@proton.me
- **Phone**: +32 479 12 44 28
- **Location**: Leuven, Belgium
- **Admin Dashboard**: [truyens.pro/admin/contacts](https://truyens.pro/admin/contacts)

## 🙏 Acknowledgments

### Core Technologies
- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-First CSS Framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with Type Safety
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization for Next.js

### UI & Design
- [Lucide React](https://lucide.dev/) - Beautiful & Consistent Icons
- [Headless UI](https://headlessui.com/) - Unstyled Accessible Components
- [Radix UI](https://www.radix-ui.com/) - Low-level UI Primitives

### Partnership & Hosting
- [EdgeForge](https://www.edgeforge.eu/) - Strategic Development Partner
- **Self-Hosted Infrastructure** - Running on dedicated hardware with nginx

---

## 🎯 **Live & Ready for Business!**

This portfolio is **live at [truyens.pro](https://truyens.pro)** and includes everything needed for a professional web development business:

✅ **Complete multilingual website** (Dutch default)  
✅ **Contact management system** with admin dashboard  
✅ **SEO optimization** with structured data  
✅ **Legal compliance** (GDPR ready)  
✅ **Professional design** with dark/light mode  
✅ **Self-hosted deployment** with Docker + nginx  
✅ **Partnership integration** with EdgeForge  

**Current focus**: Optimize for lead generation and client acquisition! 📈

*Built with ❤️ in Belgium 🇧🇪*
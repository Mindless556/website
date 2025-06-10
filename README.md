# Modern E-commerce Website

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)

A full-featured e-commerce platform built with Next.js, featuring a modern UI, RTL support, and robust authentication system.

## 🚀 Features

### Core Features
- **Modern UI/UX**: Built with Next.js and Tailwind CSS
- **RTL Support**: Full right-to-left language support
- **Authentication**: Secure user authentication with NextAuth.js
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth transitions and animations with Framer Motion
- **State Management**: Efficient state management with Zustand
- **Type Safety**: Built with TypeScript
- **Database**: MongoDB integration with Mongoose
- **Admin Dashboard**: Comprehensive admin interface for product management

### Product Management
- **Product Catalog**: Browse products with filtering and sorting
- **Product Details**: Rich product pages with images, descriptions, and specifications
- **Inventory Management**: Real-time stock tracking and updates
- **Category System**: Hierarchical product categorization
- **Product Variants**: Support for multiple product variations (size, color, etc.)
- **Bulk Operations**: Import/export products via CSV
- **Product Reviews**: User-generated reviews and ratings
- **Related Products**: Smart product recommendations

### User Features
- **User Authentication**: Secure login and registration
- **User Profiles**: Personalized user dashboards
- **Shopping Cart**: Persistent cart with real-time updates
- **Wishlist**: Save favorite products for later
- **Order History**: Track past and current orders
- **Address Management**: Multiple shipping addresses
- **Social Login**: Login with Google, Facebook, etc.
- **Email Notifications**: Order updates and promotions
- **Saved Payment Methods**: Secure payment information storage
- **Order Tracking**: Real-time order status updates

### Admin Features
- **Dashboard Analytics**: Sales and user statistics
- **Order Management**: Process and track orders
- **User Management**: Manage user accounts and permissions
- **Product Management**: Add, edit, and remove products
- **Inventory Control**: Monitor and update stock levels
- **Sales Reports**: Detailed sales analytics and reports
- **Customer Insights**: User behavior and preferences
- **Discount Management**: Create and manage promotions
- **Content Management**: Manage banners and announcements
- **SEO Tools**: Meta tags and sitemap management

### Technical Features
- **Performance Optimization**: 
  - Image optimization
  - Code splitting
  - Lazy loading
  - Caching strategies
- **Security Features**:
  - CSRF protection
  - Rate limiting
  - Input sanitization
  - Secure headers
- **SEO Optimization**:
  - Meta tags
  - Structured data
  - Sitemap generation
  - Robots.txt
- **Accessibility**:
  - ARIA labels
  - Keyboard navigation
  - Screen reader support
  - Color contrast compliance

## 📸 Screenshots

> Note: Screenshots will be added once the application is deployed or screenshots are available.

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: MongoDB with Mongoose
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Notifications**: React Hot Toast
- **RTL Support**: Tailwind CSS RTL
- **Testing**: Jest, React Testing Library
- **API Documentation**: Swagger/OpenAPI
- **Monitoring**: Sentry
- **Analytics**: Google Analytics
- **Payment Processing**: Stripe
- **Email Service**: SendGrid

## 📦 Installation

### Prerequisites
- Node.js 20.x or later
- npm 10.x or later
- MongoDB 6.x or later
- Git

### Detailed Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mindless556/website.git
   cd website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add the following variables:
   ```env
   # Database
   MONGODB_URI=your_mongodb_uri
   
   # Authentication
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   
   # Optional: Email Service
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USER=your_smtp_user
   SMTP_PASSWORD=your_smtp_password
   
   # Optional: Payment Processing
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   
   # Optional: Analytics
   GA_TRACKING_ID=your_ga_tracking_id
   
   # Optional: Error Monitoring
   SENTRY_DSN=your_sentry_dsn
   ```

4. **Database Setup:**
   ```bash
   # Start MongoDB (if running locally)
   mongod --dbpath /path/to/data/directory
   
   # Initialize database (if using Prisma)
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Access the application:**
   - Frontend: http://localhost:3000
   - Admin Dashboard: http://localhost:3000/admin
   - API Documentation: http://localhost:3000/api-docs

## 🔧 Troubleshooting Guide

### Common Issues and Solutions

1. **Module not found errors:**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Remove node_modules and reinstall
   rm -rf node_modules
   npm install
   ```

2. **MongoDB Connection Issues:**
   - Verify MongoDB is running
   - Check connection string in .env.local
   - Ensure network access is allowed
   - Check MongoDB logs for errors
   - Verify database user permissions

3. **Next.js Build Errors:**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   
   # Rebuild
   npm run build
   ```

4. **Authentication Issues:**
   - Verify NEXTAUTH_SECRET is set
   - Check NEXTAUTH_URL matches your deployment
   - Clear browser cookies and cache
   - Check OAuth provider configuration
   - Verify callback URLs

5. **RTL Layout Problems:**
   - Ensure tailwindcss-rtl is properly configured
   - Check HTML lang attribute
   - Verify CSS direction properties
   - Test with different text lengths
   - Check form input alignment

6. **Image Loading Issues:**
   - Verify image paths
   - Check Next.js Image configuration
   - Ensure proper image optimization
   - Check CDN configuration
   - Verify image formats

7. **API Integration Problems:**
   - Check API endpoints
   - Verify authentication tokens
   - Check request/response formats
   - Monitor rate limits
   - Check CORS configuration

### Performance Optimization

1. **Image Optimization:**
   - Use Next.js Image component
   - Implement lazy loading
   - Optimize image sizes
   - Use appropriate formats (WebP)
   - Implement responsive images

2. **Bundle Size:**
   - Use dynamic imports
   - Implement code splitting
   - Monitor bundle size with `@next/bundle-analyzer`
   - Remove unused dependencies
   - Optimize third-party imports

3. **Database Optimization:**
   - Implement proper indexing
   - Use efficient queries
   - Implement caching
   - Monitor query performance
   - Use connection pooling

4. **Caching Strategies:**
   - Implement Redis caching
   - Use browser caching
   - Implement CDN caching
   - Use stale-while-revalidate
   - Implement service workers

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run analyze` - Analyze bundle size
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run generate-sitemap` - Generate sitemap
- `npm run seed` - Seed database with sample data

## 📁 Project Structure

```
├── src/
│   ├── app/              # App router pages
│   │   ├── (public)/     # Public routes
│   │   ├── admin/        # Admin dashboard
│   │   └── api/          # API routes
│   ├── components/       # Reusable components
│   │   ├── ui/          # UI components
│   │   └── layout/      # Layout components
│   ├── lib/             # Utility functions
│   │   ├── auth/        # Authentication
│   │   ├── db/          # Database
│   │   └── utils/       # Helpers
│   └── styles/          # Global styles
├── prisma/              # Database schema
├── public/              # Static assets
└── ...
```

## 🔒 Environment Variables

### Required Variables
- `MONGODB_URI`: MongoDB connection string
- `NEXTAUTH_SECRET`: Secret for NextAuth.js
- `NEXTAUTH_URL`: Base URL of your application

### Optional Variables
- `SMTP_*`: Email service configuration
- `NEXT_PUBLIC_API_URL`: API URL for client-side requests
- `NEXT_PUBLIC_SITE_URL`: Public site URL
- `STRIPE_*`: Payment processing configuration
- `GA_TRACKING_ID`: Google Analytics tracking ID
- `SENTRY_DSN`: Sentry error tracking DSN

## 🤝 Contributing

Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Follow the project's coding standards
- Implement proper error handling
- Add proper logging
- Consider performance implications

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors who have helped shape this project

## 📞 Support

For support, please:
1. Check the [troubleshooting guide](#troubleshooting-guide)
2. Search existing [issues](https://github.com/Mindless556/website/issues)
3. Create a new issue if needed

## 🔄 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes in each version.

## 📚 Documentation

- [API Documentation](docs/api.md)
- [Deployment Guide](docs/deployment.md)
- [Security Guide](docs/security.md)
- [Performance Guide](docs/performance.md)

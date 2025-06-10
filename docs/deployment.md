# Deployment Guide

This guide provides detailed instructions for deploying the e-commerce platform to various environments.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Deployment Options](#deployment-options)
- [Production Deployment](#production-deployment)
- [Monitoring and Maintenance](#monitoring-and-maintenance)
- [Scaling](#scaling)
- [Backup and Recovery](#backup-and-recovery)

## Prerequisites

- Node.js 20.x or later
- npm 10.x or later
- MongoDB 6.x or later
- Git
- SSL certificate
- Domain name
- Cloud provider account (AWS, GCP, or Azure)

## Environment Setup

### Environment Variables

Create a `.env.production` file with the following variables:

```env
# Application
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_API_URL=https://api.your-domain.com

# Database
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/database

# Authentication
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://your-domain.com

# Email Service
SMTP_HOST=smtp.provider.com
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASSWORD=your-password

# Payment Processing
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Analytics
GA_TRACKING_ID=UA-XXXXXXXXX-X

# Error Monitoring
SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
```

### SSL Configuration

1. Obtain SSL certificate:
   ```bash
   # Using Let's Encrypt
   certbot certonly --nginx -d your-domain.com
   ```

2. Configure SSL in Nginx:
   ```nginx
   server {
       listen 443 ssl;
       server_name your-domain.com;

       ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

       # SSL configuration
       ssl_protocols TLSv1.2 TLSv1.3;
       ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
       ssl_prefer_server_ciphers off;
       ssl_session_timeout 1d;
       ssl_session_cache shared:SSL:50m;
       ssl_session_tickets off;
       ssl_stapling on;
       ssl_stapling_verify on;
       add_header Strict-Transport-Security "max-age=63072000" always;
   }
   ```

## Deployment Options

### 1. Vercel Deployment (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

3. Configure environment variables in Vercel dashboard

### 2. Docker Deployment

1. Build Docker image:
   ```bash
   docker build -t ecommerce-platform .
   ```

2. Run container:
   ```bash
   docker run -d \
     --name ecommerce \
     -p 3000:3000 \
     --env-file .env.production \
     ecommerce-platform
   ```

### 3. Traditional Server Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm run start
   ```

3. Configure Nginx:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       return 301 https://$server_name$request_uri;
   }

   server {
       listen 443 ssl;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Production Deployment

### 1. Database Setup

1. Set up MongoDB Atlas:
   - Create cluster
   - Configure network access
   - Create database user
   - Get connection string

2. Initialize database:
   ```bash
   npm run db:init
   ```

### 2. Application Deployment

1. Build for production:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm run start
   ```

3. Set up process manager (PM2):
   ```bash
   npm install -g pm2
   pm2 start npm --name "ecommerce" -- start
   pm2 save
   ```

### 3. CDN Setup

1. Configure Cloudflare:
   - Add domain
   - Configure DNS
   - Enable SSL
   - Configure caching rules

2. Update image URLs to use CDN

## Monitoring and Maintenance

### 1. Application Monitoring

1. Set up Sentry:
   ```bash
   npm install @sentry/nextjs
   ```

2. Configure in `sentry.client.config.js` and `sentry.server.config.js`

### 2. Performance Monitoring

1. Set up Google Analytics
2. Configure performance monitoring in Vercel
3. Set up uptime monitoring

### 3. Regular Maintenance

1. Update dependencies:
   ```bash
   npm audit
   npm update
   ```

2. Database maintenance:
   ```bash
   npm run db:maintenance
   ```

3. Log rotation:
   ```bash
   pm2 install pm2-logrotate
   ```

## Scaling

### 1. Horizontal Scaling

1. Set up load balancer
2. Configure multiple instances
3. Use Redis for session storage

### 2. Database Scaling

1. Set up MongoDB replica set
2. Configure read preferences
3. Implement connection pooling

### 3. Caching Strategy

1. Implement Redis caching
2. Configure CDN caching
3. Set up browser caching

## Backup and Recovery

### 1. Database Backup

1. Automated backup script:
   ```bash
   #!/bin/bash
   mongodump --uri="mongodb+srv://user:password@cluster.mongodb.net/database" \
     --out="/backup/$(date +%Y%m%d)"
   ```

2. Schedule backup:
   ```bash
   0 0 * * * /path/to/backup.sh
   ```

### 2. Application Backup

1. Backup configuration files
2. Backup environment variables
3. Backup SSL certificates

### 3. Recovery Procedure

1. Database recovery:
   ```bash
   mongorestore --uri="mongodb+srv://user:password@cluster.mongodb.net/database" \
     --dir="/backup/20240320"
   ```

2. Application recovery:
   - Restore configuration
   - Restore environment variables
   - Restore SSL certificates

## Security Checklist

- [ ] SSL/TLS configured
- [ ] Security headers set
- [ ] Rate limiting implemented
- [ ] CORS configured
- [ ] Input validation
- [ ] XSS protection
- [ ] CSRF protection
- [ ] SQL injection prevention
- [ ] Regular security updates
- [ ] Security monitoring

## Troubleshooting

### Common Issues

1. **Application Crashes**
   - Check logs: `pm2 logs`
   - Verify memory usage
   - Check for unhandled errors

2. **Database Connection Issues**
   - Verify connection string
   - Check network access
   - Verify credentials

3. **Performance Issues**
   - Check server resources
   - Monitor database queries
   - Verify caching configuration

### Support

For deployment support:
1. Check the [troubleshooting guide](../README.md#troubleshooting-guide)
2. Search existing [issues](https://github.com/Mindless556/website/issues)
3. Create a new issue if needed 
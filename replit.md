# Hudson Valley CISO Website

## Overview

This is a professional website for Hudson Valley CISO, a fractional CISO service targeting small and medium businesses (SMBs) in the Hudson Valley region. The site is built as a conversion-focused marketing platform that educates prospects about cybersecurity leadership while positioning fractional CISO services as the right-sized solution for SMBs who need executive security guidance without full-time costs.

The application serves as both an educational resource and lead generation tool, featuring service information, educational content, contact forms, and calendar booking integration for consultations.

## Recent Changes (January 2025)

### Latest Updates (Current Session)
- **Comprehensive Consultation Request Form**: Replaced simple contact form with sophisticated lead qualification system
- **Enhanced Lead Routing**: Email notifications now include structured service tags ([HV-CISO][ServiceType][Urgency])
- **Priority Handling**: Urgent requests and active incidents automatically flagged for immediate attention
- **Conditional Form Logic**: Smart fields that appear based on service type (compliance frameworks, incident status)
- **Privacy Policy Integration**: Complete privacy policy page added with proper legal content and footer linking
- **Security Starter Kit System**: Complete lead capture system with instant downloads of 5 professional templates
  - Individual file downloads: Security Assessment Checklist (.xlsx), Incident Response Plan Template (.docx), Employee Security Awareness Guide (.docx), Vendor Risk Assessment Framework (.xlsx), Basic Compliance Roadmap (.docx)
  - Complete zip file option for bulk download
  - Professional email notifications with direct Google Drive download links
  - Lead tracking in database with [HV-CISO][Starter Kit] email tags
  - Google Drive hosting for reliable file access and sharing

### Previous Updates
- Fixed JSX syntax errors that were preventing application startup
- Updated contact information:
  - Email: support@hvciso.com
  - Phone: 845-418-8823
  - Calendar booking: https://calendly.com/cyberintelpros
- Resolved environment variable issues by switching from process.env to import.meta.env for client-side code
- Application successfully running with all pages functional

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Design Pattern**: Component-based architecture with reusable UI components

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact forms and newsletter subscriptions
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Validation**: Zod schemas shared between frontend and backend
- **Development Server**: Vite integration for hot module replacement in development

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Shared schema definitions in TypeScript
- **Tables**: 
  - `contacts` - Contact form submissions with name, email, company, message
  - `newsletter_subscribers` - Email subscriptions with unique email constraint
- **Database Provider**: Configured for Neon Database (PostgreSQL)

### Data Layer
- **Current Implementation**: Memory-based storage for development
- **Production Ready**: Drizzle ORM configuration with PostgreSQL support
- **Shared Types**: Type-safe schemas using Drizzle-Zod integration
- **API Interface**: Abstract storage interface allowing easy database provider switching

### Styling and Design System
- **Design System**: Custom design tokens using CSS variables
- **Theme**: Professional blue and neutral color palette appropriate for B2B cybersecurity
- **Typography**: Inter font family for modern, professional appearance
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Component Variants**: Class Variance Authority for consistent component styling

### Build and Development
- **Build Tool**: Vite for fast development and optimized production builds
- **Output**: Static frontend assets with separate Node.js server bundle
- **Development**: Hot reload with Vite dev server integration
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared code

## External Dependencies

### Core Framework Dependencies
- **React**: Frontend framework with React Router (Wouter) for routing
- **Express.js**: Backend web framework for API routes
- **Vite**: Build tool and development server

### UI and Styling
- **Shadcn/ui**: Component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library

### Database and Data Management
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **Neon Database**: Serverless PostgreSQL provider (via @neondatabase/serverless)
- **TanStack Query**: Server state management and caching

### Form Handling and Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation for forms and API
- **@hookform/resolvers**: Zod integration for React Hook Form

### Development and Build Tools
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer

### Utilities and Helpers
- **clsx & tailwind-merge**: Conditional CSS class handling
- **date-fns**: Date manipulation utilities
- **nanoid**: Unique ID generation

The application is designed to be easily deployable to platforms like Replit, with environment-based configuration for database connections and external service integrations.
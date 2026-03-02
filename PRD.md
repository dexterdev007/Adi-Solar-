# Product Requirements Document (PRD): Adi Solar Website & CRM

## 1. Project Overview

**Name:** Adi Solar Project
**Description:** A comprehensive web platform for "Adi Solar", a solar installation company in India. The application consists of a modern, responsive, and aesthetically premium landing page designed to generate leads, alongside a custom backend CRM to manage those leads, schedule site visits, and track essential admin analytics.

## 2. Goals & Objectives

- **Lead Generation:** Make it effortless for prospective customers (residential, commercial, industrial) to book a free site visit or consultation.
- **Brand Authority:** Establish trust through a highly polished frontend combining sleek animations, modern aesthetics (Tailwind CSS), and light/dark theme support.
- **Operational Efficiency:** Provide an Admin dashboard for the Adi Solar team to easily manage new inquiries and site visit schedules.

## 3. Technology Stack

### 3.1. Frontend

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v3) with Custom Configuration (e.g., custom colors like `solar-yellow`, custom animations, and a glassmorphism/premium aesthetic)
- **Animations:** HTML5 Canvas (for Hero animation frames), CSS Keyframes, Framer Motion
- **Features:** React Context for Theme Management and Admin Authentication

### 3.2. Backend

- **Environment:** Node.js with Express
- **Database:** SQLite (via Prisma ORM)
- **Language:** TypeScript
- **Features:** RESTful API endpoints for handling Leads, Site Visits, Admin Auth, and Analytics.

---

## 4. System Architecture & Models (Database Schema)

The system leverages a relational model via Prisma (`schema.prisma`) targeting an SQLite database for simple, file-based persistence:

1. **Admin:** Manages access to the internal dashboard. (Fields: id, name, email, password, role, created_at).
2. **Lead:** Stores user inquiries. (Fields: id, name, phone, email, property_type, location, message, source, status, notes). Status flows typically from 'NEW' to 'CONVERTED' or 'REJECTED'.
3. **SiteVisit:** Tracks specific requested site visits tied to a Lead. (Fields: id, lead_id, preferred_date, preferred_time, roof_type).
4. **Analytics:** Basic tracking for page views, button clicks, and interactions. (Fields: id, page, action, device_type, ip_address).

---

## 5. Core Features & Requirements

### 5.1. User-Facing Frontend (Landing Page)

- **Hero Section:** Features a high-quality scroll-responsive canvas-based animation of solar elements. Includes bold calls to action ("Power Your Future with Solar Energy") and dynamic statistics.
- **Navigation (Navbar):** Sticky, glassmorphism top navigation supporting deep links to sections (`#about`, `#services`, `#process`, `#contact`). It contains a CTA that smooth-scrolls to the Contact Section. It is fully responsive with a mobile hamburger menu.
- **Informational Sections:** Static sections styled beautifully across light and dark modes detailing About Us, Services, Why Choose Us, and the Installation Process.
- **Contact / Site Visit Form:** A global contact form in the footer/contact section allowing visitors to submit their Name, Phone, Email, Property Details, and schedule preferred visit parameters.
- **WhatsApp Integration:** A globally floating WhatsApp button for instant messaging to the sales team.
- **Theme Toggling:** Support for Light Mode / Dark Mode ("Charcoal" theme) persisting across user sessions via local storage.

### 5.2. Backend APIs

- **POST `/api/site-visit` or `/api/leads`:** Endpoint to safely capture information from the frontend and store it in the Lead and SiteVisit database tables.
- **Auth Endpoints:** JWT-based or Session-based login for administrative users matching the `Admin` table.
- **GET/PUT `/api/leads`:** Admin functions to fetch incoming leads, update their `status`, and write CRM `notes`.

### 5.3. Admin Panel (CRM)

- **Secure Access:** A protected `/login` and `/admin` route within the Next.js app, relying on the AuthProvider context.
- **Lead Dashboard:** A view where admins can inspect incoming entries, filter by status ('NEW', 'CONTACTED', 'SITE_VISIT_SCHEDULED'), and track conversions.
- **Analytics View:** Visualization of tracked interactions logged throughout the website's lifecycle.

---

## 6. Design & UX Aesthetic Rules

- **Themes:** Light mode and a deep, premium dark mode (`bg-charcoal`, `text-white`).
- **Brand Colors:** Utilizing `solar-yellow` (gradients from `#fbbf24` to `#f59e0b`) as the primary impact color against neutral greys/slate.
- **Interactivity:** Elements must feel alive. Buttons require micro-animations (e.g. hover scaling, shadow-lg, `group-hover` transformations). Deep links must utilize smooth scroll behavior natively.

## 7. Future Phases / Roadmap

- **Unified Auth System:** Completing a dual role-based login for standard Users vs. Admins.
- **Database Migration:** Upgrading from local SQLite to PostgreSQL (e.g., Supabase, Vercel Postgres, AWS RDS) for production scale.
- **Email/SMS Automation:** Integrating services like SendGrid or Twilio to automatically send confirmation messages when a new lead is generated.
- **Content Management System (CMS):** Allowing non-technical staff to update the "Services", "Process", and "Stats" dynamically without touching the frontend code.

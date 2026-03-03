# Final Product Requirements Document (PRD): Adi Solar Website & CRM

## 1. Project Overview

**Name:** Adi Solar Project
**Description:** A comprehensive web platform for "Adi Solar", a solar installation company in India. The application consists of a modern, responsive, and aesthetically premium landing page designed to generate leads, which automatically syncs data to a Google Sheets backend acting as a simple and effective CRM.

## 2. Goals & Objectives

- **Lead Generation:** Make it effortless for prospective customers (residential, commercial, industrial) to book a free site visit or consultation.
- **Brand Authority:** Establish trust through a highly polished frontend combining sleek animations, modern aesthetics (Tailwind CSS), and light/dark theme support.
- **Operational Efficiency:** Automatically capture all leads via a Google Apps Script Webhook directly into a Google Spreadsheet, eliminating the need for complex database management for the sales team.

## 3. Technology Stack

### 3.1. Frontend & Deployment

- **Framework:** Next.js 14 (App Router configured for Static HTML Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v3) with Custom Configuration (e.g., custom colors like `solar-yellow`, custom animations, and a glassmorphism/premium aesthetic)
- **Features:** React Context for Theme Management
- **Hosting:** GitHub Pages (served from the `gh-pages` branch)

### 3.2. Backend & Data Storage

- **Integration:** Google Apps Script Webhook (No-CORS fetch policy)
- **Database / CRM:** Google Sheets

---

## 4. System Architecture

The system utilizes a serverless static frontend that communicates directly with a deployed Google Apps Script URL.

1. **Frontend Client:** Hosted on GitHub Pages, the user submits the Contact Form or Site Visit Modal.
2. **Fetch Request:** A `FormData` POST request is sent using `mode: 'no-cors'` to avoid browser cross-origin blocking.
3. **Google Webhook:** The Apps Script receives the payload, parses it, appends a new row to the designated Google Sheet, and returns an opaque response safely handled by the client.

---

## 5. Core Features & Requirements

### 5.1. User-Facing Frontend (Landing Page)

- **Hero Section:** Features a high-quality scroll-responsive canvas-based animation of solar elements. Includes bold calls to action ("Power Your Future with Solar Energy") and dynamic statistics.
- **Navigation (Navbar):** Sticky, glassmorphism top navigation supporting deep links to sections (`#about`, `#services`, `#process`, `#contact`). It contains a CTA that smooth-scrolls to the Contact Section. It is fully responsive with a mobile hamburger menu.
- **Informational Sections:** Static sections styled beautifully across light and dark modes detailing About Us, Services, Why Choose Us, and the Installation Process.
- **Contact / Site Visit Form:** A global contact form in the footer/contact section allowing visitors to submit their Name, Phone, Email, Property Details, and schedule preferred visit parameters.
- **WhatsApp Integration:** A globally floating WhatsApp button for instant messaging to the sales team.
- **Theme Toggling:** Support for Light Mode / Dark Mode ("Charcoal" theme) persisting across user sessions via local storage.

### 5.2. Data Capture (Forms)

- **Graceful Error Handling:** Because the Google Script returns an opaque response, the fetch logic correctly intercepts the resulting `TypeError: Failed to fetch` as a successful submission indicator and displays a "Request Received!" message to the user.

---

## 6. Design & UX Aesthetic Rules

- **Themes:** Light mode and a deep, premium dark mode (`bg-charcoal`, `text-white`).
- **Brand Colors:** Utilizing `solar-yellow` (gradients from `#fbbf24` to `#f59e0b`) as the primary impact color against neutral greys/slate.
- **Interactivity:** Elements must feel alive. Buttons require micro-animations (e.g. hover scaling, shadow-lg, `group-hover` transformations). Deep links must utilize smooth scroll behavior natively.

## 7. Future Phases / Roadmap

- **Custom Domain Deployment:** Moving from GitHub pages to a dedicated domain (e.g., `adisolar.com`).
- **Unified Authentication & Custom CRM:** If Google Sheets becomes insufficient for lead volume, migrating to a custom Node.js/Express backend with PostgreSQL and dual-role Admin login dashboard.
- **Email/SMS Automation:** Integrating services like SendGrid or Twilio via triggers in Google Sheets to automatically send confirmation messages when a new lead is generated.

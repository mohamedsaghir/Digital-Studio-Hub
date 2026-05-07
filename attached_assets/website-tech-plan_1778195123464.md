# Website Tech Plan
## Digital Studio Landing Page

Goal: Build a clean, premium, light-mode landing page for a digital studio that sells website creation and social media content services.

---

# 1. Project Goal

The website should help the business:

- Get clients
- Build trust
- Present services clearly
- Show portfolio/demo projects
- Explain pricing
- Make it easy to contact or start a project

The website should feel:

- Modern
- Premium
- Clean
- Professional
- Business-focused
- Trustworthy

---

# 2. Positioning

## Main Positioning

Modern websites and social media content for local businesses.

## Main Message

Helping businesses build a professional online presence through modern websites and consistent social media visuals.

## Target Audience

- Local businesses in Germany
- Small businesses
- Restaurants
- Barbers
- Beauty salons
- Clinics
- Service providers
- Arabic/Turkish businesses in Germany

---

# 3. Core Services

Keep the first version focused only on two services.

## Service 1 — Website Development

Includes:

- Landing pages
- Business websites
- Responsive design
- Contact forms
- Booking/contact integration
- Google Maps integration
- Basic SEO
- Fast performance

## Service 2 — Social Media Content

Includes:

- Instagram post design
- Story design
- Branding consistency
- Visual content support
- Content layout/design direction

---

# 4. Recommended Tech Stack

## Framework

Use Next.js.

Reasons:

- SEO-friendly
- Fast performance
- Good developer experience
- Easy deployment with Vercel
- Professional structure
- Scalable for future pages and services

## Language

Use TypeScript.

Reasons:

- Safer code
- Better maintainability
- Better structure for future growth

## Styling

Use Tailwind CSS.

Reasons:

- Fast UI development
- Easy responsive design
- Works perfectly with design systems
- Clean utility-first workflow

## UI Components

Use shadcn/ui.

Recommended components:

- Button
- Card
- Badge
- Separator
- Accordion
- Sheet
- Input
- Textarea

Use shadcn/ui only where it improves structure and consistency.
Do not overuse components unnecessarily.

## Animation

Use Framer Motion lightly.

Use for:

- Smooth hero content entrance
- Subtle card hover effects
- Section fade-ins
- CTA animation

Avoid:

- Heavy motion
- Complex animation everywhere
- Distracting transitions

---

# 5. Visual Direction

## Mode

Light mode only.

Do not build dark mode for the first version.

## Brand Colors

Use only this color palette:

```css
#0D1B2A
#1B263B
#415A77
#778DA9
#E0E1DD
#F5F5F5
```

## Recommended Usage

- Background: `#F5F5F5`
- Cards: `#E0E1DD` or `#F5F5F5`
- Main text: `#0D1B2A`
- Secondary text: `#415A77`
- Borders: `#778DA9`
- Primary buttons: `#0D1B2A`
- Button text: `#F5F5F5`
- Subtle accents: `#415A77` and `#778DA9`

## Typography

Recommended fonts:

- English: Inter or Manrope
- Arabic: Cairo

Use clean typography with strong hierarchy.

---

# 6. Landing Page Sections

## 1. Navbar

Content:

- Logo
- Home
- Services
- Work
- Pricing
- Process
- Contact
- CTA button: Let’s Talk

Behavior:

- Sticky on scroll
- Light background
- Clean border/shadow
- Mobile menu using shadcn/ui Sheet

---

## 2. Hero Section

Purpose:

The hero section must immediately explain what the business does and why it matters.

Headline:

```text
Modern Websites & Content
for Growing Businesses
```

Subheadline:

```text
We create professional websites and social media visuals that help businesses look trustworthy, attract customers, and grow online.
```

CTA buttons:

- Start a Project
- View Work

Trust line:

```text
Based in Germany • Modern Design • Business-Focused Approach
```

Hero visual:

- Website preview
- Mobile screen preview
- Social media post preview
- Floating badges

---

# 7. Interactive Hero Background

## Effect Name

Anti-Gravity Network Effect

## Goal

Add a subtle interactive background to the hero section that feels modern, premium, and technical without making the website look too flashy.

## Behavior

The background should include:

- Small floating particles/nodes
- Thin connecting lines between nearby nodes
- Mouse interaction
- Nodes gently move away from the cursor, creating an anti-gravity feel
- Smooth motion
- Low opacity
- Light-mode friendly colors

## Design Rules

The effect must:

- Stay subtle
- Not reduce text readability
- Use only brand colors
- Work in light mode
- Not distract from the CTA
- Be disabled or simplified on mobile if performance is affected

## Recommended Colors For Effect

Use only:

```css
#415A77
#778DA9
#E0E1DD
```

## Technical Approach

Create a reusable component:

```text
components/hero/network-background.tsx
```

Component responsibilities:

- Render a canvas inside the hero background
- Generate particles dynamically
- Animate particles using requestAnimationFrame
- Track mouse position
- Push nearby particles away from the cursor
- Draw lines between nearby particles
- Resize canvas on window resize
- Clean up animation frames and event listeners

## Performance Rules

- Use canvas, not hundreds of DOM elements
- Use requestAnimationFrame
- Limit particle count
- Reduce particles on small screens
- Clean up listeners on unmount
- Avoid unnecessary React state updates during animation
- Use refs for animation data

## Suggested Particle Counts

Desktop:

```text
50–80 particles
```

Tablet:

```text
35–50 particles
```

Mobile:

```text
20–30 particles
```

## Accessibility

The canvas should be decorative only.

Use:

```tsx
aria-hidden="true"
```

Do not place important content inside the canvas.

---

# 8. Services Section

Headline:

```text
What We Do
```

Subheadline:

```text
Simple, modern, and business-focused digital solutions for growing brands.
```

Cards:

## Website Development

Description:

Modern responsive websites designed to help businesses build trust, improve visibility, and convert visitors into customers.

Features:

- Responsive design
- Landing pages
- Business websites
- SEO basics
- Contact forms
- Booking systems

## Social Media Content

Description:

Professional social media visuals that keep your brand consistent and visually strong across platforms.

Features:

- Post design
- Story design
- Branding consistency
- Professional visuals
- Content support

---

# 9. Why Choose Us Section

Headline:

```text
Modern Design With a Business Mindset
```

Cards:

## Professional Look

Build trust with a clean and premium online presence.

## Business-Focused

The goal is not only design. The goal is helping businesses grow.

## Mobile-First

Websites optimized for desktop, tablet, and mobile.

## Clear Communication

Simple process, fast communication, and reliable delivery.

---

# 10. Portfolio Section

Headline:

```text
Selected Work
```

Content:

Show 3–4 projects.

Recommended project examples:

- Barber website concept
- Restaurant landing page
- Medical clinic website
- Social media branding pack

Project card structure:

- Project image
- Category
- Project title
- Short description
- CTA: View Project

---

# 11. Pricing Section

Headline:

```text
Flexible Solutions for Growing Businesses
```

Subheadline:

```text
Transparent starting prices for businesses that want a professional online presence without unnecessary complexity.
```

## Pricing Card 1 — Starter Website

Best for:

Small businesses and personal brands.

Price:

```text
Starting from €499
```

Includes:

- Modern landing page
- Mobile responsive design
- Contact form
- Basic SEO
- WhatsApp integration
- Fast performance

CTA:

```text
Get Started
```

## Pricing Card 2 — Business Website

Best for:

Growing businesses.

Price:

```text
Starting from €999
```

Includes:

- Multi-page website
- Premium UI design
- Mobile responsive layout
- SEO basics
- Booking/contact system
- Google Maps integration
- Social media integration

CTA:

```text
Start Your Project
```

## Pricing Card 3 — Website + Content Package

Best for:

Businesses that want a complete digital presence.

Price:

```text
Custom Pricing
```

Includes:

- Website design and development
- Social media post design
- Story design
- Branding consistency
- Content support

CTA:

```text
Contact Us
```

---

# 12. Installment Section

Headline:

```text
Professional Digital Solutions With Flexible Payments
```

Subheadline:

```text
Installment options are available for selected projects to help businesses launch professionally without a large upfront cost.
```

Payment options:

## 2 Payments

- 50% before project start
- 50% after completion

## Monthly Installments

Available for selected larger projects and packages.

## Ongoing Support

Optional monthly support for updates, maintenance, and content.

---

# 13. Process Section

Headline:

```text
Simple & Clear Process
```

## Step 1 — Discovery

Understand the business, goals, target audience, and project needs.

## Step 2 — Design

Create a modern visual direction and layout.

## Step 3 — Development

Build the website or content system with clean structure and responsive design.

## Step 4 — Launch

Deliver the final result and help the business go live confidently.

---

# 14. Contact Section

Fields:

- Name
- Email
- Business name
- Service needed
- Message

CTA:

```text
Send Message
```

Optional:

- WhatsApp button
- Email link
- LinkedIn link

---

# 15. Footer

Content:

- Logo
- Short brand description
- Navigation links
- Contact email
- Location: Germany
- Copyright

Footer text:

```text
Modern websites and digital content for businesses that want to grow online.
```

---

# 16. Suggested Project Structure

```bash
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── ui/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   │
│   └── hero/
│       └── network-background.tsx
│
├── sections/
│   ├── hero-section.tsx
│   ├── services-section.tsx
│   ├── why-us-section.tsx
│   ├── portfolio-section.tsx
│   ├── pricing-section.tsx
│   ├── installment-section.tsx
│   ├── process-section.tsx
│   └── contact-section.tsx
│
├── data/
│   ├── services.ts
│   ├── projects.ts
│   ├── pricing.ts
│   └── process.ts
│
├── lib/
│   └── utils.ts
│
└── types/
    └── index.ts
```

---

# 17. Clean Code Rules

## Avoid Duplication

Use data arrays for repeated UI.

Examples:

- Services cards from `data/services.ts`
- Pricing cards from `data/pricing.ts`
- Process steps from `data/process.ts`
- Portfolio projects from `data/projects.ts`

Do not hardcode repeated cards manually.

## Component Rules

Each section should be its own component.

Examples:

```text
HeroSection
ServicesSection
PricingSection
ProcessSection
ContactSection
```

Reusable components:

```text
SectionHeader
FeatureCard
PricingCard
CTAButton
```

## Naming Rules

Use clear names:

Good:

```text
NetworkBackground
PricingCard
ServiceCard
HeroSection
```

Avoid:

```text
Box1
CardComp
SectionA
```

---

# 18. SEO Requirements

Add:

- Page title
- Meta description
- Open Graph image
- Semantic HTML
- Sitemap
- Robots.txt

Recommended homepage title:

```text
Modern Websites & Social Media Content for Businesses in Germany
```

Recommended meta description:

```text
Professional website development and social media content design for local businesses in Germany. Build trust, improve your online presence, and attract more customers.
```

---

# 19. Performance Requirements

Target:

- Fast loading
- Optimized images
- Minimal JavaScript
- Good Lighthouse score
- Smooth hero background animation

Rules:

- Use optimized images
- Use canvas for the network effect
- Avoid large animation libraries if not needed
- Use lazy loading for portfolio images
- Keep bundle size clean

---

# 20. Deployment

Recommended platform:

Vercel

Reasons:

- Best for Next.js
- Simple deployment
- Fast CDN
- Easy previews
- Professional workflow

---

# 21. Future Improvements

Add later:

- Blog
- Case studies
- CMS
- German language version
- Arabic language version
- Booking calendar
- Client dashboard
- Maintenance packages
- Testimonials
- Newsletter

---

# 22. MVP Development Order

## Step 1

Set up project:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

## Step 2

Create design system:

- Colors
- Typography
- Buttons
- Cards
- Section spacing

## Step 3

Build layout:

- Navbar
- Footer
- Main page structure

## Step 4

Build hero section:

- Hero content
- CTA buttons
- Anti-gravity network background

## Step 5

Build main sections:

- Services
- Why Us
- Portfolio
- Pricing
- Installments
- Process
- Contact

## Step 6

Optimize:

- SEO
- Performance
- Mobile design
- Accessibility

## Step 7

Deploy:

- Vercel
- Custom domain
- Professional email

---

# 23. Main Reminder

Do not overengineer the first version.

The goal is not to build a huge platform.

The goal is to create a professional landing page that builds trust and converts visitors into clients.

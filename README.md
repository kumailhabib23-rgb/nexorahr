# Nexora HR — Multi-page marketing website

A responsive React + Vite public website using the Nexora HR navy/indigo/purple visual identity.

## Pages
- `/` — Home
- `/features` — HR and people management
- `/operations` — Tasks, deadlines, evidence, notifications, chat and preferences
- `/ai-tools` — HR, task and partner assistants with human-oversight notes
- `/partners` — NGO partner portal, project scope, permissions and exports
- `/solutions` — Organization types and use cases
- `/about` — About Nexora HR
- `/pricing` — Custom pricing enquiry
- `/contact` — Contact form demo

## Run locally
```bash
npm install
npm run dev
```

Production build:
```bash
npm run build
npm run preview
```

## Notes
- Uses React, Vite, Framer Motion and Lucide React.
- Page transitions, scroll-reveal cards, floating hero dashboard cards, hover effects, and reduced-motion support are included.
- Hero artwork is CSS-built; no external or generated image is required.
- Login and Get Started currently link to `/login` and `/register`. Configure these paths to match your existing portal deployment.
- Contact form is a frontend demo and does not send email until connected to a backend endpoint.
- Existing backend and `hr_portal` database are not included or modified by this public website package.

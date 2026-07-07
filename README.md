AERVYN

A modern flight, hotel, and car rental booking platform built with React, Vite, and Django.

**Live demo:** [aervyn.netlify.app](https://aervyn.netlify.app)

## Overview

Aervyn is a full-featured travel booking web app that lets users search and book flights, hotels, and car rentals in one place. 
It's built to feel fast, responsive, and polished across mobile, tablets and desktops with real authentication, persistent user data, 
and a design system built from scratch and in uniform.

## Features

- **Authentication** — Email/password sign-up and login with Google and GitHub OAuth support
- **Flight Search** — Browse and filter flights with detailed route, timing, and pricing info
- **Hotel & Car Rentals** — Detailed views with mobile bottom-sheet and desktop modal patterns
- **Favorites System** — Save flights, hotels, and cars with persistent state across sessions
- **Profile Management** — Editable profile image and display name, centrally managed via context
- **Fully Responsive** — Custom breakpoint system with smooth entrance animations, built mobile-first
- **Protected Routing** — Auth-gated pages with React Router

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite |
| Styling | SCSS (BEM-style, variable-driven design tokens) |
| Backend / Auth / DB | Django and Supabase |
| Routing | React Router |
| Deployment | Netlify |
| Data | Static JSON (flights, hotels, cars) fetched at runtime |


## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- A Supabase project (for auth and data)

## Deployment

This project is deployed on **Netlify**, connected directly to this GitHub repo for continuous deployment — every push to `main` triggers an automatic rebuild and redeploy.

Key deployment notes:
- `public/_redirects` handles client-side routing so page refreshes on nested routes don't 404
- Environment variables are set in Netlify's **Site settings → Environment variables**
- Supabase redirect URLs are configured to match the live Netlify domain

## Roadmap

- [ ] Responsive polish across all pages
- [ ] Fix remaining icon filter and image loading edge cases
- [ ] Complete OAuth flow (Google / GitHub)
- [ ] Booking confirmation flow
- [ ] Favorite Pages available
- [ ] Deploy custom domain

## Author

Built by **Jibare** — self-taught developer and designer based in Port Harcourt, currently focused on software engineering and Smart contract development.

- X (Twitter): https://x.com/devjibare?s=11
- Portfolio: coming soon

## License

This project is for portfolio and learning purposes.

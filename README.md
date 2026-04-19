# User Behavior & Conversion Analytics Platform

A full-stack web application built to simulate a SaaS product funnel, instrumented with Google Analytics 4 to capture and analyze user behavior across sessions, clicks, and navigation paths.

## Tech Stack

- **Frontend:** React + Vite, Tailwind CSS, React Router
- **Analytics:** Google Analytics 4 (GA4)
- **Data Warehouse:** BigQuery (GCP)
- **Dashboard:** Looker Studio

## Features

- 5-page SaaS funnel: Landing → Features → Pricing → Signup → Success
- Custom GA4 event tracking (clicks, form interactions, conversions)
- BigQuery integration via daily GA4 export
- Looker Studio dashboard with KPIs: conversion rate, session duration, event count
- A/B testing across landing page variants

## Event Taxonomy

| Event | Category | Description |
|---|---|---|
| `page_view` | auto | Fires on every page change |
| `get_started_button` | engagement | Landing page CTA click |
| `feature_click` | engagement | Feature card clicked |
| `plan_selected` | conversion | Pricing plan chosen |
| `form_start` | engagement | User starts signup form |
| `signup_complete` | conversion | User completes signup |
| `variant_assigned` | experiment | A/B test variant assigned |

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/analytics-app.git
cd analytics-app

# 2. Install dependencies
npm install

# 3. Add your GA4 Measurement ID in src/main.jsx
# Replace G-XXXXXXXXXX with your actual ID
ReactGA.initialize('G-XXXXXXXXXX')

# 4. Run locally
npm run dev
```

> **Note:** `node_modules` is not included. Run `npm install` to generate it locally.

## .gitignore

Make sure your `.gitignore` includes:

```
node_modules
dist
.env
```

## A/B Testing

Traffic is split 50/50 between two landing page variants:
- **Variant A** — "Get Started" button (blue)
- **Variant B** — "Start Free Trial" button (green)

Results tracked via GA4 event labels and compared by downstream `signup_complete` conversion rate.

## Dashboard KPIs

- Total Users
- Session Key Event Rate (Conversion Rate)
- Average Session Duration
- Event Count
- Sessions by Page (funnel drop-off)
- Sessions over Time

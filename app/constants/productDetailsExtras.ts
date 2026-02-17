import { type ProductDetailExtras } from "@/app/(main)/products/_components/types";

export const sharedImplementation: ProductDetailExtras["implementation"] = [
  {
    title: "Discovery & success metrics",
    description: "Clarify goals, current tools, owners, and data access.",
    duration: "3-5 days",
  },
  {
    title: "Design, configure, integrate",
    description: "Set up roles, UI/UX themes, and connect core systems & data.",
    duration: "1-2 weeks",
  },
  {
    title: "Pilot & user acceptance",
    description: "Run with a pilot group, collect feedback, and tighten safeguards.",
    duration: "5-7 days",
  },
  {
    title: "Launch, training & handover",
    description: "Production rollout with training, docs, and monitoring enabled.",
    duration: "3-5 days",
  },
];

export const productDetailsExtras: Record<string, ProductDetailExtras> = {
  "portfolio-website": {
    modules: [
      {
        title: "Marketing site + CMS",
        description: "Composable pages, sections, and blog powered by a headless CMS.",
      },
      {
        title: "Conversion kit",
        description: "Lead forms, CTAs, and scheduling blocks tuned for fast handoffs.",
      },
      {
        title: "Analytics & SEO baseline",
        description: "Core Web Vitals optimizations, schema markup, and tracking pixels.",
      },
    ],
    useCases: [
      {
        title: "Founder or agency portfolio",
        description: "Crisp story-telling, case studies, and social proof blocks.",
      },
      {
        title: "Service catalog",
        description: "Highlight offerings with pricing tiers, FAQs, and contact flows.",
      },
      {
        title: "Hiring & careers mini-site",
        description: "Show roles, benefits, and culture with ATS-linked forms.",
      },
    ],
    integrations: [
      "Headless CMS (Sanity/Contentful)",
      "Analytics & pixels (GA4, Meta, LinkedIn)",
      "Scheduling (Calendly/HubSpot Meetings)",
      "CRM/form capture (HubSpot, Zoho, Pipedrive)",
    ],
    metrics: [
      {
        value: "2-3 weeks",
        label: "Launch window",
        description: "From kickoff to first production release",
      },
      {
        value: "<1s LCP",
        label: "Performance target",
        description: "Optimized Core Web Vitals on primary pages",
      },
      {
        value: "90%+ editable",
        label: "Marketing-owned",
        description: "Pages & sections editable without engineering",
      },
    ],
    implementation: sharedImplementation,
    support: [
      "Editor training with Loom walkthroughs",
      "30-day performance & uptime monitoring",
      "Quarterly UX and SEO tune-up option",
    ],
  },
  "hr-management-software": {
    modules: [
      {
        title: "Employee hub",
        description: "Single source of truth for profiles, docs, and lifecycle events.",
      },
      {
        title: "Time, leave & shifts",
        description: "Rosters, attendance, approvals, and compliance guardrails.",
      },
      {
        title: "Payroll & compliance",
        description: "Allowances, deductions, payslips, and statutory exports.",
      },
    ],
    useCases: [
      {
        title: "Shift-heavy teams",
        description: "Retail, manufacturing, and field teams with rostered work.",
      },
      {
        title: "Distributed teams",
        description: "Hybrid or remote companies needing consistent approvals.",
      },
      {
        title: "SMBs formalizing HR",
        description: "Move away from spreadsheets to auditable workflows.",
      },
    ],
    integrations: [
      "HRIS/ERP (SAP, Oracle, Zoho People)",
      "Payroll providers & banks",
      "Identity & SSO (Okta, Azure AD)",
      "Messaging (Slack/Teams)",
    ],
    metrics: [
      {
        value: "25-40%",
        label: "Admin time saved",
        description: "Reduction in manual reconciliation",
      },
      {
        value: "<3 mins",
        label: "Approval time",
        description: "Average for leave/OT requests",
      },
      {
        value: "99.9%",
        label: "Uptime target",
        description: "Operational SLA with monitoring",
      },
    ],
    implementation: sharedImplementation,
    support: [
      "Role-based access and audit readiness",
      "Compliance-friendly exports & reports",
      "HR operations playbooks and handover",
    ],
  },
  "hospital-management-software": {
    modules: [
      {
        title: "Patient intake & EMR",
        description: "Registrations, vitals, visit history, and consent management.",
      },
      {
        title: "Scheduling & queues",
        description: "Doctor calendars, OT blocks, queue tokens, and reminders.",
      },
      {
        title: "Billing & insurance",
        description: "Tariffs, claims, settlements, and audit-ready ledgers.",
      },
      {
        title: "Inventory & pharmacy",
        description: "Stock, batches, expiries, and controlled dispensing.",
      },
    ],
    useCases: [
      {
        title: "OPD multi-specialty",
        description: "Faster consults with pre-visit data capture and tokens.",
      },
      {
        title: "In-patient & wards",
        description: "Bed management, nurse charts, and discharge workflows.",
      },
      {
        title: "Diagnostics & labs",
        description: "Orders, sample tracking, and result publishing.",
      },
    ],
    integrations: [
      "LIS/HL7 lab interfaces",
      "Insurance clearing & TPAs",
      "Payment gateways & POS",
      "SMS/WhatsApp notifications",
    ],
    metrics: [
      {
        value: "15-25%",
        label: "Faster billing",
        description: "Shorter cycle from visit to settlement",
      },
      {
        value: "30% fewer",
        label: "No-shows",
        description: "Automated reminders and queue transparency",
      },
      {
        value: "Audit-ready",
        label: "Traceability",
        description: "Every action logged by role",
      },
    ],
    implementation: sharedImplementation,
    support: [
      "Privacy, consent, and audit templates",
      "Onsite/remote go-live hypercare",
      "Backups and disaster recovery plan",
    ],
  },
  "cv-sorting-ai": {
    modules: [
      {
        title: "Parsing & enrichment",
        description: "Extract skills, entities, and normalize titles/locations.",
      },
      {
        title: "AI scoring",
        description: "Configurable models with explainable feature weights.",
      },
      {
        title: "Reviewer workspace",
        description: "Bulk triage, comments, exports, and hiring team views.",
      },
    ],
    useCases: [
      {
        title: "High-volume roles",
        description: "Inbound applications for support, sales, or operations.",
      },
      {
        title: "Campus & referral drives",
        description: "Rank large batches quickly with fairness guardrails.",
      },
      {
        title: "Diversity-aware shortlisting",
        description: "Apply bias checks and monitoring on key attributes.",
      },
    ],
    integrations: [
      "ATS (Greenhouse, Lever, Workable)",
      "Job board imports & webhooks",
      "SSO + role-based access",
      "Slack/Email notifications",
    ],
    metrics: [
      {
        value: "60% faster",
        label: "Screening time",
        description: "vs. manual review",
      },
      {
        value: "Explainable",
        label: "Scoring",
        description: "Feature-level rationale for each candidate",
      },
      {
        value: "Bias checks",
        label: "Governance",
        description: "Configurable fairness constraints",
      },
    ],
    implementation: sharedImplementation,
    support: [
      "Model monitoring & drift alerts",
      "Quarterly re-training cycles",
      "Hiring ops runbooks and QA",
    ],
  },
  "ai-chatbot-implementation": {
    modules: [
      {
        title: "Multichannel surfaces",
        description: "Web widget, mobile SDK, WhatsApp, Messenger, and in-app chat.",
      },
      {
        title: "Knowledge sync",
        description: "Scheduled syncs from docs, sites, and ticket history with RAG.",
      },
      {
        title: "Escalation & QA",
        description: "Human handoff, triage rules, and response quality reviews.",
      },
    ],
    useCases: [
      {
        title: "Customer support",
        description: "FAQs, order status, returns, and troubleshooting.",
      },
      {
        title: "Internal helpdesk",
        description: "IT, HR, and policy questions with secure data boundaries.",
      },
      {
        title: "Lead capture",
        description: "Qualify visitors, schedule demos, and pass to sales.",
      },
    ],
    integrations: [
      "Zendesk/Freshdesk/Intercom",
      "Shopify/WooCommerce order data",
      "CRM & ticketing pipelines",
      "Telemetry (Datadog/Sentry) for errors",
    ],
    metrics: [
      {
        value: "40-60%",
        label: "Ticket deflection",
        description: "Self-serve resolutions",
      },
      {
        value: "<5s",
        label: "First response time",
        description: "Across supported channels",
      },
      {
        value: "CSAT lift",
        label: "Customer delight",
        description: "Measured via post-chat surveys",
      },
    ],
    implementation: sharedImplementation,
    support: [
      "Response quality evals and audits",
      "Safety guardrails + PII masking",
      "Human-in-loop workflows and playbooks",
    ],
  },
  "e-commerce-website": {
    modules: [
      {
        title: "Catalog & merchandising",
        description: "Collections, filters, variants, bundles, and promos.",
      },
      {
        title: "Checkout & payments",
        description: "Optimized flows with tax, shipping, COD, and fraud checks.",
      },
      {
        title: "Order ops",
        description: "Fulfillment statuses, notifications, returns, and refunds.",
      },
    ],
    useCases: [
      {
        title: "D2C brand launch",
        description: "Launch campaign-ready storefronts quickly.",
      },
      {
        title: "Marketplace or multi-vendor",
        description: "Manage multiple sellers, catalogs, and payouts.",
      },
      {
        title: "Subscription commerce",
        description: "Recurring billing, trials, and membership perks.",
      },
    ],
    integrations: [
      "Payments (Stripe, SSLCommerz, PayPal)",
      "Fulfillment/logistics (Shippo, EasyPost)",
      "Marketing (Klaviyo, Mailchimp, Meta/GA pixels)",
      "Inventory/ERP (Odoo, Zoho, QuickBooks)",
    ],
    metrics: [
      {
        value: "+15-25%",
        label: "Conversion uplift",
        description: "From checkout and performance optimizations",
      },
      {
        value: "99%",
        label: "Sync accuracy",
        description: "Orders, inventory, and refunds",
      },
      {
        value: "<2 weeks",
        label: "MVP timeline",
        description: "Campaign-ready first release",
      },
    ],
    implementation: sharedImplementation,
    support: [
      "Checkout A/B testing support",
      "Fraud controls and observability",
      "Promo & campaign playbooks",
    ],
  },
  "restaurant-management-software": {
    modules: [
      {
        title: "POS & dining room",
        description: "Tables, tabs, tipping, splits, and receipts.",
      },
      {
        title: "Kitchen display & routing",
        description: "Prep queues, station routing, and order timers.",
      },
      {
        title: "Inventory & recipes",
        description: "Yield, prep, wastage, and cost tracking per dish.",
      },
      {
        title: "Delivery hub",
        description: "Aggregator orders and in-house delivery tracking.",
      },
    ],
    useCases: [
      {
        title: "Dine-in operations",
        description: "Table service with live queue and waiter apps.",
      },
      {
        title: "Cloud/ghost kitchens",
        description: "Multi-brand menus with station routing.",
      },
      {
        title: "Franchise networks",
        description: "Outlet-level permissions and reporting.",
      },
    ],
    integrations: [
      "Printers/KDS hardware bridges",
      "Delivery aggregators (DoorDash/Uber Eats/local)",
      "Accounting/ERP connectors",
      "Payments & tipping providers",
    ],
    metrics: [
      {
        value: "12-18%",
        label: "Faster table turns",
        description: "With live queue visibility",
      },
      {
        value: "-8-12%",
        label: "Food cost variance",
        description: "Recipe-level tracking and alerts",
      },
      {
        value: "<60s",
        label: "Ticket to kitchen",
        description: "Order routing SLA",
      },
    ],
    implementation: sharedImplementation,
    support: [
      "Menu engineering & rollout support",
      "Outlet and shift-level permissions setup",
      "Downtime and failover runbooks",
    ],
  },
  "cloud-kitchen-app": {
    modules: [
      {
        title: "Multi-brand menu control",
        description: "Centralize items, pricing, and availability by outlet.",
      },
      {
        title: "Order orchestration",
        description: "Batching, throttling, and routing by prep capacity.",
      },
      {
        title: "Courier dispatch",
        description: "Assign, track, and notify riders with SLAs.",
      },
      {
        title: "Performance analytics",
        description: "Outlet, brand, and campaign level dashboards.",
      },
    ],
    useCases: [
      {
        title: "Aggregator-first brands",
        description: "Operate virtual brands with centralized control.",
      },
      {
        title: "Franchise cloud kitchens",
        description: "Shared kitchens with brand-level permissions.",
      },
      {
        title: "Pop-up menus",
        description: "Launch seasonal menus quickly with controlled rollout.",
      },
    ],
    integrations: [
      "Delivery APIs (Uber Eats, DoorDash, Foodpanda)",
      "POS bridges and printers",
      "Courier routing (Onfleet/Locus)",
      "WhatsApp/SMS notifications",
    ],
    metrics: [
      {
        value: "20%+",
        label: "Throughput gain",
        description: "Batching and smart routing",
      },
      {
        value: "-15%",
        label: "Wastage",
        description: "Prep forecasting and inventory alerts",
      },
      {
        value: "<5 mins",
        label: "Ready to dispatch",
        description: "From accept to handoff",
      },
    ],
    implementation: sharedImplementation,
    support: [
      "Ops dashboard & KDS training",
      "Outlet-specific SLA configurations",
      "Peak hour monitoring and hypercare",
    ],
  },
  "custom-software-development": {
    modules: [
      {
        title: "Discovery & solution design",
        description: "Workshops, requirements, and architecture runway.",
      },
      {
        title: "Prototype & UX",
        description: "Clickable prototypes and usability testing early.",
      },
      {
        title: "Delivery pods",
        description: "Front-end, back-end, and data engineers with QA.",
      },
      {
        title: "Observability & QA",
        description: "CI/CD, automated tests, logs, and dashboards.",
      },
    ],
    useCases: [
      {
        title: "Internal tools modernization",
        description: "Replace spreadsheets with governed workflows.",
      },
      {
        title: "Data & AI workflows",
        description: "Pipelines, RAG apps, and analytics surfaces.",
      },
      {
        title: "Platform rebuilds",
        description: "Re-architect legacy systems for scale and resilience.",
      },
    ],
    integrations: [
      "Existing ERPs/CRMs/data lakes",
      "SSO and identity providers",
      "CI/CD and cloud of choice",
      "Analytics & event pipelines",
    ],
    metrics: [
      {
        value: "2-4 weeks",
        label: "MVP window",
        description: "Prototype to pilot",
      },
      {
        value: "Sprint-based",
        label: "Delivery cadence",
        description: "Transparent backlog and demos",
      },
      {
        value: "SLOs agreed",
        label: "Quality gates",
        description: "Performance, security, tests",
      },
    ],
    implementation: sharedImplementation,
    support: [
      "Product management partnership",
      "Runbooks and documentation",
      "Post-launch iteration retainer",
    ],
  },
};

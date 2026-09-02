import type { Localized } from "@/lib/i18n";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type Status = "prod" | "pilot" | "dev" | "done";
export type Context = "solvant" | "krownsoft" | "freelance" | "personal" | "academic";

export type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: Localized;
};

export type ShipEntry = {
  date: string;
  env: "prod" | "beta";
  text: Localized;
};

export type NowItem = {
  tag: string;
  text: Localized;
};

export type Experience = {
  id: string;
  company: string;
  url?: string;
  role: Localized;
  period: Localized;
  location: Localized;
  summary: Localized;
  bullets: Localized[];
  stack: string[];
};

export type ProjectMetric = { value: string; label: Localized };

export type Project = {
  id: string;
  featured: boolean;
  hero?: boolean;
  status: Status;
  context: Context;
  role: Localized;
  period: string;
  title: Localized;
  problem: Localized;
  built: Localized[];
  metrics?: ProjectMetric[];
  stack: string[];
  link?: string;
  repo?: string;
};

export type SkillGroup = {
  label: Localized;
  items: string[];
  note?: Localized;
};

export type EducationItem = {
  kind: "degree" | "cert";
  title: Localized;
  org: string;
  period: string;
  detail: Localized;
};

/* ------------------------------------------------------------------ */
/* Hero: proof strip + ship log + now                                  */
/* ------------------------------------------------------------------ */

export const metrics: Metric[] = [
  {
    value: 1500,
    prefix: "+",
    label: {
      es: "commits en repos de equipo desde 2025",
      en: "commits in team repos since 2025",
    },
  },
  {
    value: 8,
    label: {
      es: "productos en producción en los que trabajé",
      en: "production products I have worked on",
    },
  },
  {
    value: 14,
    label: {
      es: "meses construyendo para clientes reales",
      en: "months building for real clients",
    },
  },
  {
    value: 4,
    suffix: "/4",
    label: {
      es: "cuatrimestre de la Tecnicatura (UTN) · egreso previsto 2026",
      en: "semester of the programming degree (UTN) · graduating 2026",
    },
  },
];

export const shipLog: ShipEntry[] = [
  {
    date: "2026-09-02",
    env: "prod",
    text: {
      es: "ERP de carpintería de aluminio: pase a producción verificado (12/12 smoke tests)",
      en: "Aluminium-joinery ERP: production cutover verified (12/12 smoke tests)",
    },
  },
  {
    date: "2026-08",
    env: "prod",
    text: {
      es: "Gestor de campañas outbound + white-label por cliente en Solvant Platform",
      en: "Outbound campaign manager + per-client white-label on Solvant Platform",
    },
  },
  {
    date: "2026-07",
    env: "prod",
    text: {
      es: "Discador de voz IA + bot de cobranzas: dos líneas de WhatsApp en producción",
      en: "AI voice dialer + collections bot: two WhatsApp lines live",
    },
  },
  {
    date: "2026-07",
    env: "prod",
    text: {
      es: "Plataforma multi-tenant de agencia de marketing: portal de cliente co-branded",
      en: "Multi-tenant marketing-agency platform: co-branded client portal",
    },
  },
  {
    date: "2026-06",
    env: "beta",
    text: {
      es: "Nocta: MVP multi-tenant con Mercado Pago OAuth y escaneo offline",
      en: "Nocta: multi-tenant MVP with Mercado Pago OAuth and offline scanning",
    },
  },
  {
    date: "2026-04",
    env: "prod",
    text: {
      es: "TaskFlow: exportación de auditoría, importación CSV masiva y alertas de atraso",
      en: "TaskFlow: audit-log export, bulk CSV import and overdue alerts",
    },
  },
  {
    date: "2026-02",
    env: "prod",
    text: {
      es: "F-Tracker: autenticación de dos factores (TOTP) de punta a punta",
      en: "F-Tracker: end-to-end two-factor authentication (TOTP)",
    },
  },
];

export const now: NowItem[] = [
  {
    tag: "Solvant",
    text: {
      es: "Sistemas y agentes de IA para PyMEs: discadores de voz, bots de WhatsApp, ERPs a medida.",
      en: "Systems and AI agents for SMBs: voice dialers, WhatsApp bots, custom ERPs.",
    },
  },
  {
    tag: "Krownsoft",
    text: {
      es: "Productos propios en producción: TaskFlow, ScoutPro, F-Tracker.",
      en: "Own products in production: TaskFlow, ScoutPro, F-Tracker.",
    },
  },
  {
    tag: "Freelance",
    text: {
      es: "App nativa Android (Expo) para trazabilidad de rondas de seguridad privada.",
      en: "Native Android app (Expo) for private-security patrol traceability.",
    },
  },
  {
    tag: "TUP · UTN",
    text: {
      es: "Último cuatrimestre + TIF: plataforma de gimnasios y rutinas con .NET y React.",
      en: "Final semester + capstone: gym & workout platform with .NET and React.",
    },
  },
  {
    tag: "Aprendiendo",
    text: {
      es: "Análisis de datos con Python (Pandas), gestión de desarrollo, inglés técnico.",
      en: "Data analysis with Python (Pandas), software project management, technical English.",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const experience: Experience[] = [
  {
    id: "solvant",
    company: "Solvant",
    url: "https://solvant.com.ar",
    role: {
      es: "Desarrollador full-stack · sistemas y agentes de IA",
      en: "Full-stack developer · systems and AI agents",
    },
    period: { es: "abr 2026 — actualidad", en: "Apr 2026 — present" },
    location: { es: "Rosario · remoto", en: "Rosario · remote" },
    summary: {
      es: "Consultora de IA aplicada a procesos de PyMEs. Diseño y construyo lo que corre detrás de los agentes de voz y WhatsApp: bases de datos multi-tenant, motores de cadencia, integraciones con ERPs y suites de evaluación que gatean cada deploy.",
      en: "Applied-AI consultancy for SMB operations. I design and build what runs behind the voice and WhatsApp agents: multi-tenant databases, cadence engines, ERP integrations and evaluation suites that gate every deploy.",
    },
    bullets: [
      {
        es: "Autor principal (~90% de los commits) del sistema de un estudio jurídico: discador de voz con IA + bot de cobranzas con motor de cadencias en SQL (ramp-up, cupos semanales, ventanas horarias, opt-out) y takeover humano.",
        en: "Lead author (~90% of commits) of a law firm's system: AI voice dialer + collections bot with a SQL cadence engine (ramp-up, weekly quotas, time windows, opt-out) and human takeover.",
      },
      {
        es: "Solvant Platform (portal de clientes): gestor de campañas outbound, cifrado AES-256-GCM de credenciales, sync idempotente contra Retell y RLS en todas las tablas. Más de 200 commits.",
        en: "Solvant Platform (client portal): outbound campaign manager, AES-256-GCM credential encryption, idempotent sync against Retell and RLS on every table. 200+ commits.",
      },
      {
        es: "Plataforma multi-tenant para una agencia de marketing (~20 workspaces): frontend Next.js 16 / React 19, cierre de brechas de RLS y migraciones. Segundo contribuidor del repo.",
        en: "Multi-tenant platform for a marketing agency (~20 workspaces): Next.js 16 / React 19 frontend, RLS gap fixes and migrations. Second-largest contributor.",
      },
      {
        es: "ERP a medida para un fabricante de carpintería de aluminio: frontend, schema del módulo de obras y suite E2E. En producción desde septiembre de 2026.",
        en: "Custom ERP for an aluminium-joinery manufacturer: frontend, works-module schema and E2E suite. In production since September 2026.",
      },
      {
        es: "Agentes de ventas B2B por WhatsApp integrados a Odoo: workflows n8n generados como código, suite de 129 evaluaciones (DeepEval) con tests de efectos reales, monitoreo con dead-man switch.",
        en: "B2B WhatsApp sales agents wired into Odoo: n8n workflows generated as code, a 129-eval suite (DeepEval) with real side-effect tests, dead-man-switch monitoring.",
      },
      {
        es: "Integraciones sobre sistemas sin API (RPA con Playwright y Scrapling) y auditoría de drift de configuración tratada como falla de CI.",
        en: "Integrations over API-less systems (RPA with Playwright and Scrapling) and configuration-drift audits treated as CI failures.",
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Python", "n8n", "Retell AI", "OpenAI", "Odoo", "Docker", "GitHub Actions"],
  },
  {
    id: "krownsoft",
    company: "Krownsoft",
    url: "https://krownsoft.com.ar",
    role: { es: "Desarrollador full-stack", en: "Full-stack developer" },
    period: { es: "jul 2025 — actualidad", en: "Jul 2025 — present" },
    location: { es: "Rosario · híbrido", en: "Rosario · hybrid" },
    summary: {
      es: "Estudio de software con productos propios. Equipo de dos: diseñamos, construimos y operamos plataformas completas, de la API a la app móvil y la infraestructura.",
      en: "Software studio with its own products. A team of two: we design, build and run complete platforms, from the API to the mobile app and the infrastructure.",
    },
    bullets: [
      {
        es: "TaskFlow (pedidos y producción en tiempo real): mayor contribuidor con 466 de 983 commits. API FastAPI + PostgreSQL (40 migraciones), dashboard React 19, app Flutter para operarios, WebSockets, RBAC y auditoría. En producción.",
        en: "TaskFlow (real-time orders & production): top contributor with 466 of 983 commits. FastAPI + PostgreSQL API (40 migrations), React 19 dashboard, Flutter app for operators, WebSockets, RBAC and audit log. In production.",
      },
      {
        es: "14 pipelines de GitHub Actions (staging y producción), Docker y Nginx; fixes de concurrencia en SQLAlchemy (joinedload + FOR UPDATE) y alertas de atraso con período de gracia.",
        en: "14 GitHub Actions pipelines (staging and production), Docker and Nginx; SQLAlchemy concurrency fixes (joinedload + FOR UPDATE) and overdue alerts with grace periods.",
      },
      {
        es: "ScoutPro: definí la estructura del proyecto y la capa de persistencia de jugadores. F-Tracker: commit inicial y autenticación 2FA (TOTP) de punta a punta.",
        en: "ScoutPro: defined the project structure and the player persistence layer. F-Tracker: initial commit and end-to-end 2FA (TOTP).",
      },
    ],
    stack: ["FastAPI", "Python", "PostgreSQL", "React", "TypeScript", "Flutter", "Dart", "Docker", "Nginx", "GitHub Actions"],
  },
  {
    id: "freelance",
    company: "Freelance",
    role: { es: "Desarrollador full-stack · productos propios y clientes directos", en: "Full-stack developer · own products and direct clients" },
    period: { es: "2026", en: "2026" },
    location: { es: "Rosario", en: "Rosario" },
    summary: {
      es: "Proyectos que llevo de punta a punta: relevamiento, arquitectura, código, pruebas de carga y entrega.",
      en: "Projects I take end to end: discovery, architecture, code, load testing and delivery.",
    },
    bullets: [
      {
        es: "Nocta: SaaS de entradas, barra y control de acceso por QR para boliches, con Mercado Pago OAuth por local y validación offline en puerta.",
        en: "Nocta: SaaS for tickets, bar orders and QR door control for nightclubs, with per-venue Mercado Pago OAuth and offline door validation.",
      },
      {
        es: "Trazabilidad de rondas para una empresa de seguridad privada: web + app nativa Android con geocercas, QR aleatorio, botón de pánico y aislamiento multi-cliente por RLS.",
        en: "Patrol traceability for a private-security company: web + native Android app with geofences, random-QR challenges, panic button and per-client RLS isolation.",
      },
      {
        es: "Web operativa para un estudio de fotografía de eventos: presupuestos en PDF en menos de un minuto y campaña de beneficios por QR con atribución.",
        en: "Operational website for an event-photography studio: PDF quotes in under a minute and a QR benefits campaign with attribution.",
      },
    ],
    stack: ["Next.js", "React", "Expo", "Supabase", "Mercado Pago", "PWA", "Vitest"],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    id: "voice-dialer-collections",
    featured: true,
    hero: true,
    status: "prod",
    context: "solvant",
    role: { es: "Autor principal · ~90% de los commits", en: "Lead author · ~90% of commits" },
    period: "2026",
    title: {
      es: "Discador de voz con IA + bot de cobranzas para un estudio jurídico",
      en: "AI voice dialer + collections bot for a law firm",
    },
    problem: {
      es: "El estudio llamaba a mano a unos 500 leads por mes y perseguía deudores por WhatsApp sin trazabilidad. El objetivo: pasar de 25 a más de 60 entrevistas mensuales sin sumar gente, y cobrar sin que un bot calcule cuotas.",
      en: "The firm hand-dialed about 500 leads a month and chased debtors over WhatsApp with no trace. The goal: go from 25 to 60+ monthly interviews without hiring, and collect without a bot ever computing instalments.",
    },
    built: [
      {
        es: "Motor de cadencias en SQL: ramp-up semanal, cupo por semana, ventanas horarias, opt-out universal y escalado a humano.",
        en: "SQL cadence engine: weekly ramp-up, weekly quota, time windows, universal opt-out and escalation to a human.",
      },
      {
        es: "Discador saliente con agente de voz (Retell AI) y clasificación de resultados de llamada por webhook.",
        en: "Outbound dialer with a voice agent (Retell AI) and call-outcome classification via webhook.",
      },
      {
        es: "Bot de cobranzas por WhatsApp con takeover humano obligatorio y re-validación pre-envío fail-closed.",
        en: "WhatsApp collections bot with mandatory human takeover and fail-closed pre-send re-validation.",
      },
      {
        es: "Corrección de una carrera (ack perdido) y de un kill-switch en bucle; guardas anti-escritura-indebida.",
        en: "Fixed a lost-ack race and a looping kill-switch; anti-improper-write guards.",
      },
      {
        es: "Generador de demandas en Word a partir de mora de 30 días; suites de guardrails y evaluaciones (DeepEval).",
        en: "Word lawsuit generator from 30-day overdue accounts; guardrail and evaluation suites (DeepEval).",
      },
    ],
    metrics: [
      { value: "~500", label: { es: "leads por mes", en: "leads per month" } },
      { value: "17", label: { es: "migraciones SQL", en: "SQL migrations" } },
      { value: "200", label: { es: "commits propios", en: "own commits" } },
      { value: "2", label: { es: "líneas de WhatsApp en producción", en: "WhatsApp lines in production" } },
    ],
    stack: ["Retell AI", "n8n", "Supabase", "PostgreSQL", "Evolution API", "Next.js", "DeepEval", "Telegram"],
  },
  {
    id: "taskflow",
    featured: true,
    status: "prod",
    context: "krownsoft",
    role: { es: "Mayor contribuidor · 466 de 983 commits", en: "Top contributor · 466 of 983 commits" },
    period: "2025 — 2026",
    title: {
      es: "TaskFlow — pedidos y producción en tiempo real",
      en: "TaskFlow — real-time orders and production",
    },
    problem: {
      es: "Empresas de manufactura y logística seguían pedidos por WhatsApp y planillas; los supervisores se enteraban de los atrasos cuando ya era tarde.",
      en: "Manufacturing and logistics companies tracked orders over WhatsApp and spreadsheets; supervisors learned about delays when it was already too late.",
    },
    built: [
      {
        es: "API FastAPI + PostgreSQL con 40 migraciones Alembic, RBAC de tres niveles y auditoría exportable.",
        en: "FastAPI + PostgreSQL API with 40 Alembic migrations, three-tier RBAC and exportable audit log.",
      },
      {
        es: "Dashboard React 19 con KPIs en vivo y app Flutter para operarios; WebSockets con fan-out a web y móvil.",
        en: "React 19 dashboard with live KPIs and a Flutter app for operators; WebSockets fanning out to web and mobile.",
      },
      {
        es: "Alertas de atraso con período de gracia, importación CSV masiva y fix de deadlock (joinedload + FOR UPDATE).",
        en: "Overdue alerts with grace periods, bulk CSV import and a deadlock fix (joinedload + FOR UPDATE).",
      },
      {
        es: "14 pipelines de GitHub Actions para staging y producción; Docker Compose + Nginx en VPS.",
        en: "14 GitHub Actions pipelines for staging and production; Docker Compose + Nginx on a VPS.",
      },
    ],
    metrics: [
      { value: "466", label: { es: "commits propios", en: "own commits" } },
      { value: "40", label: { es: "migraciones", en: "migrations" } },
      { value: "14", label: { es: "pipelines CI/CD", en: "CI/CD pipelines" } },
      { value: "63", label: { es: "PRs mergeados", en: "merged PRs" } },
    ],
    stack: ["FastAPI", "Python", "PostgreSQL", "React 19", "TypeScript", "Flutter", "WebSockets", "Docker", "Nginx", "GitHub Actions"],
    link: "https://dashboard.taskflow.com.ar",
  },
  {
    id: "solvant-platform",
    featured: true,
    status: "prod",
    context: "solvant",
    role: { es: "Desarrollador principal · más de 200 commits", en: "Lead developer · 200+ commits" },
    period: "2026",
    title: {
      es: "Solvant Platform — portal de clientes y gestor de campañas outbound",
      en: "Solvant Platform — client portal and outbound campaign manager",
    },
    problem: {
      es: "Cada cliente de la consultora necesitaba ver qué hacen sus agentes de voz y lanzar campañas por su cuenta, sin depender del equipo y sin ver datos de otros clientes.",
      en: "Every client of the consultancy needed to see what their voice agents do and launch campaigns on their own, without depending on the team and without seeing other clients' data.",
    },
    built: [
      {
        es: "Multi-tenant con Row-Level Security en el 100% de las tablas y routing por rol (cliente / admin).",
        en: "Multi-tenant with Row-Level Security on 100% of tables and role-based routing (client / admin).",
      },
      {
        es: "Cifrado AES-256-GCM de las API keys de cada cliente; se descifran solo en memoria del servidor durante un sync.",
        en: "AES-256-GCM encryption of each client's API keys; decrypted only in server memory during a sync.",
      },
      {
        es: "Sync idempotente contra Retell (agentes, números, llamadas) con journal de cada corrida.",
        en: "Idempotent sync against Retell (agents, numbers, calls) with a journal of every run.",
      },
      {
        es: "Motor de cadencias con cron cada 5 minutos, reintentos configurables, cierre automático, reporte diario y white-label por cliente.",
        en: "Cadence engine with a 5-minute cron, configurable retries, auto-completion, daily report and per-client white-label.",
      },
    ],
    metrics: [
      { value: "52", label: { es: "migraciones", en: "migrations" } },
      { value: "+200", label: { es: "commits propios", en: "own commits" } },
      { value: "100%", label: { es: "tablas con RLS", en: "tables under RLS" } },
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Retell API", "Tailwind 4", "Docker"],
    link: "https://clientes.solvant.com.ar",
  },
  {
    id: "nocta",
    featured: true,
    status: "pilot",
    context: "personal",
    role: { es: "Autor único · producto propio", en: "Sole author · own product" },
    period: "2026",
    title: {
      es: "Nocta — entradas, barra y control de acceso por QR para boliches",
      en: "Nocta — tickets, bar orders and QR door control for nightclubs",
    },
    problem: {
      es: "Los boliches venden entradas por transferencia y controlan la puerta con listas en papel; en la barra, la fila es lo que pierde ventas. Y nadie quiere que un tercero se quede con su recaudación.",
      en: "Nightclubs sell tickets by bank transfer and run the door with paper lists; at the bar, the queue is what loses sales. And nobody wants a third party holding their revenue.",
    },
    built: [
      {
        es: "Multi-tenant por construcción: RLS deny-by-default, superadmin → admin por local, test que verifica que toda ruta pasa por el guard.",
        en: "Multi-tenant by construction: deny-by-default RLS, superadmin → per-venue admin, a test asserting every route goes through the guard.",
      },
      {
        es: "Cada local cobra en su propia cuenta de Mercado Pago vía OAuth: el dinero nunca pasa por Nocta.",
        en: "Each venue collects into its own Mercado Pago account via OAuth: the money never passes through Nocta.",
      },
      {
        es: "QR firmados con HMAC, tokens comparados en tiempo constante y PWA offline con packs descargables y cola de sincronización.",
        en: "HMAC-signed QR codes, constant-time token checks and an offline PWA with downloadable packs and a sync queue.",
      },
      {
        es: "Reserva de stock atómica anti-oversell; el webhook devuelve 500 para reintentar en lugar de perder un cobro sin QR emitido.",
        en: "Atomic anti-oversell stock reservation; the webhook returns 500 to retry instead of losing a payment with no QR issued.",
      },
      {
        es: "Motor de promos y combos, 21 suites de tests (Vitest) y pruebas de carga y concurrencia contra staging.",
        en: "Promo and combo engine, 21 test suites (Vitest) and load/concurrency testing against staging.",
      },
    ],
    metrics: [
      { value: "32", label: { es: "migraciones SQL", en: "SQL migrations" } },
      { value: "21", label: { es: "suites de tests", en: "test suites" } },
      { value: "118", label: { es: "commits", en: "commits" } },
      { value: "US$65", label: { es: "infra proyectada / mes", en: "projected infra / month" } },
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Supabase", "Mercado Pago", "PWA", "Vitest", "Resend", "Vercel"],
  },
  {
    id: "security-patrols",
    featured: true,
    status: "dev",
    context: "freelance",
    role: { es: "Autor único · cliente directo", en: "Sole author · direct client" },
    period: "2026",
    title: {
      es: "Trazabilidad de rondas para una empresa de seguridad privada (web + app Android)",
      en: "Patrol traceability for a private-security company (web + Android app)",
    },
    problem: {
      es: "El cliente tenía un prototipo que no persistía datos, sin escaneo real y sin aislamiento entre clientes. Necesitaba evidencia de cada ronda que su propio cliente pudiera consultar sin intermediarios.",
      en: "The client had a prototype that persisted nothing, had no real scanning and no isolation between customers. They needed evidence of every round their own customers could check without intermediaries.",
    },
    built: [
      {
        es: "Escaneo real de puntos QR con cámara, doble timestamp (dispositivo + servidor) y geolocalización.",
        en: "Real QR checkpoint scanning with the camera, double timestamp (device + server) and geolocation.",
      },
      {
        es: "Geocerca por punto (bloquea el escaneo si el vigilador está lejos) y desafío de QR aleatorio cada X minutos, configurable por sitio.",
        en: "Per-checkpoint geofence (blocks the scan if the guard is too far) and a random-QR challenge every X minutes, configurable per site.",
      },
      {
        es: "Botón de pánico con push FCM de alta prioridad; incidentes con fotos en bucket privado y URLs firmadas.",
        en: "Panic button with high-priority FCM push; incidents with photos in a private bucket behind signed URLs.",
      },
      {
        es: "Tres roles aislados por RLS (vigilador / supervisor / cliente) + superadmin; app nativa Android con Expo, SQLite offline y actualizaciones OTA.",
        en: "Three roles isolated by RLS (guard / supervisor / client) + superadmin; native Android app with Expo, offline SQLite and OTA updates.",
      },
    ],
    metrics: [
      { value: "6", label: { es: "demos entregadas", en: "demos delivered" } },
      { value: "7", label: { es: "migraciones", en: "migrations" } },
      { value: "3+1", label: { es: "roles + superadmin", en: "roles + superadmin" } },
      { value: "0", label: { es: "dependencias en el paquete shared", en: "dependencies in the shared package" } },
    ],
    stack: ["Next.js 16", "React 19", "Expo", "React Native", "Supabase", "PostgreSQL", "Tailwind 4", "Vitest"],
  },
  {
    id: "marketing-platform",
    featured: true,
    status: "prod",
    context: "solvant",
    role: { es: "Segundo contribuidor · ~260 commits", en: "Second contributor · ~260 commits" },
    period: "2026",
    title: {
      es: "Plataforma multi-tenant para una agencia de marketing (~20 workspaces)",
      en: "Multi-tenant platform for a marketing agency (~20 workspaces)",
    },
    problem: {
      es: "Una agencia de performance manejaba planificación, contenido, aprobaciones y reportes de unos 20 clientes en herramientas sueltas, sin un portal donde el cliente aprobara con un toque.",
      en: "A performance agency ran planning, content, approvals and reporting for ~20 clients across scattered tools, with no portal where a client could approve in one tap.",
    },
    built: [
      {
        es: "Frontend Next.js 16 / React 19: composer multi-plataforma con previews fieles (IG, FB, TikTok, YT), calendario, kanban y portal de cliente co-branded con Brand Kit editable.",
        en: "Next.js 16 / React 19 frontend: multi-platform composer with faithful previews (IG, FB, TikTok, YT), calendar, kanban and a co-branded client portal with an editable Brand Kit.",
      },
      {
        es: "Cierre de brechas de escritura entre clientes en las políticas de RLS; migraciones sobre un esquema de casi 300.",
        en: "Closed cross-client write gaps in the RLS policies; migrations on a schema of nearly 300.",
      },
      {
        es: "Routing por host (cliente. / agencia.) en middleware y CI de cuatro pipelines con Vitest y Playwright.",
        en: "Host-based routing (client. / agency.) in middleware and a four-pipeline CI with Vitest and Playwright.",
      },
    ],
    metrics: [
      { value: "~20", label: { es: "workspaces", en: "workspaces" } },
      { value: "296", label: { es: "migraciones (proyecto)", en: "migrations (project)" } },
      { value: "~260", label: { es: "commits propios", en: "own commits" } },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind 4", "Playwright", "Docker", "EasyPanel"],
  },
  {
    id: "aluminium-erp",
    featured: true,
    status: "prod",
    context: "solvant",
    role: { es: "Frontend, schema del módulo de obras y suite E2E · 116 commits", en: "Frontend, works-module schema and E2E suite · 116 commits" },
    period: "2026",
    title: {
      es: "ERP a medida para un fabricante de carpintería de aluminio",
      en: "Custom ERP for an aluminium-joinery manufacturer",
    },
    problem: {
      es: "Reemplazar Excel y un software de escritorio propietario con dongle por un sistema donde el cotizador es la raíz de todo: presupuesto → pedido de material → factura del proveedor → margen de obra.",
      en: "Replace Excel and a dongle-locked proprietary desktop app with a system where the quoting engine is the root of everything: quote → material order → supplier invoice → job margin.",
    },
    built: [
      {
        es: "Frontend Next.js 16 / React 19 del cotizador y los módulos operativos; dashboard resiliente (una query que falla degrada a 'sin dato', no rompe la página).",
        en: "Next.js 16 / React 19 frontend for the quoting engine and operational modules; resilient dashboard (a failing query degrades to 'no data', never blanks the page).",
      },
      {
        es: "Schema del módulo de obras y suite E2E; CI con job de calibración que falla el PR si el motor de precios se desvía del baseline.",
        en: "Works-module schema and E2E suite; CI with a calibration job that fails the PR if the pricing engine drifts from the baseline.",
      },
      {
        es: "Motor de precios calibrado a 1,10% de error contra 12.897 aberturas reales; pase a producción el 2 de septiembre de 2026.",
        en: "Pricing engine calibrated to 1.10% error against 12,897 real openings; production cutover on 2 September 2026.",
      },
    ],
    metrics: [
      { value: "12.897", label: { es: "aberturas reales de calibración", en: "real openings used for calibration" } },
      { value: "1,10%", label: { es: "error del motor de precios", en: "pricing-engine error" } },
      { value: "5", label: { es: "workflows de CI", en: "CI workflows" } },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Python", "GitHub Actions"],
  },

  /* ---------------- compact ---------------- */
  {
    id: "whatsapp-b2b-agents",
    featured: false,
    status: "prod",
    context: "solvant",
    role: { es: "Builder n8n, evals y monitoreo", en: "n8n builder, evals and monitoring" },
    period: "2026",
    title: {
      es: "Agentes de ventas B2B por WhatsApp integrados a Odoo",
      en: "B2B WhatsApp sales agents wired into Odoo",
    },
    problem: {
      es: "Cotizar, crear pedidos y cobrar por QR directamente desde WhatsApp para un distribuidor de chapas y un laboratorio de instrumental agrícola.",
      en: "Quote, create orders and collect by QR straight from WhatsApp for a steel-sheet distributor and an agricultural-instruments maker.",
    },
    built: [
      {
        es: "30 workflows n8n generados desde un builder Python idempotente por nombre; suite de 129 evaluaciones (DeepEval) con tests de efectos reales sobre Odoo; monitoreo con dead-man switch y dedupe de ráfagas.",
        en: "30 n8n workflows generated from an idempotent-by-name Python builder; a 129-eval suite (DeepEval) with real side-effect tests on Odoo; dead-man-switch monitoring and burst dedupe.",
      },
    ],
    stack: ["n8n", "Odoo", "Supabase", "OpenAI", "Evolution API", "Chatwoot", "Python", "DeepEval"],
  },
  {
    id: "savings-plan-brain",
    featured: false,
    status: "dev",
    context: "solvant",
    role: { es: "RPA, tests y auditoría de drift", en: "RPA, tests and drift audits" },
    period: "2026",
    title: {
      es: "Cerebro de IA en WhatsApp para una concesionaria de planes de ahorro",
      en: "WhatsApp AI brain for a vehicle savings-plan dealership",
    },
    problem: {
      es: "Calificar leads, auditar y cobrar cuotas sobre tres sistemas del fabricante que no tienen API.",
      en: "Qualify leads, audit and collect instalments over three manufacturer systems with no API.",
    },
    built: [
      {
        es: "'API artificial' sobre portales sin API (Playwright + Scrapling), detector de suscripciones nuevas, 33 tests y un auditor de configuración que trata el drift como falla.",
        en: "An 'artificial API' over API-less portals (Playwright + Scrapling), a new-subscription detector, 33 tests and a config auditor that treats drift as a failure.",
      },
    ],
    stack: ["n8n", "Python", "Playwright", "Supabase", "Retell AI", "Chatwoot"],
  },
  {
    id: "scoutpro",
    featured: false,
    status: "prod",
    context: "krownsoft",
    role: { es: "Estructura y persistencia", en: "Structure and persistence" },
    period: "2025",
    title: { es: "ScoutPro — scouting de jugadores multiplataforma", en: "ScoutPro — cross-platform player scouting" },
    problem: {
      es: "Evaluar varios jugadores a la vez en cancha, con sesiones que se retoman sin perder datos.",
      en: "Evaluate several players at once pitchside, with sessions that resume without losing data.",
    },
    built: [
      {
        es: "Definí la estructura del proyecto y construí la capa de persistencia de jugadores y el renombrado en sesión (Flutter + FastAPI + Alembic).",
        en: "Defined the project structure and built the player persistence layer and in-session renaming (Flutter + FastAPI + Alembic).",
      },
    ],
    stack: ["Flutter", "Dart", "FastAPI", "PostgreSQL", "Alembic"],
  },
  {
    id: "ftracker",
    featured: false,
    status: "prod",
    context: "krownsoft",
    role: { es: "Commit inicial y 2FA", en: "Initial commit and 2FA" },
    period: "2025 — 2026",
    title: { es: "F-Tracker — estadísticas de fútbol en vivo", en: "F-Tracker — live football statistics" },
    problem: {
      es: "Registrar acciones de partido en vivo desde cualquier dispositivo, con cuentas seguras.",
      en: "Log live match actions from any device, with secure accounts.",
    },
    built: [
      {
        es: "Autenticación de dos factores TOTP de punta a punta: aprovisionamiento por QR en la API y pantallas de alta y verificación en Flutter.",
        en: "End-to-end TOTP two-factor auth: QR provisioning in the API and setup/verify screens in Flutter.",
      },
    ],
    stack: ["Flutter", "FastAPI", "pyotp", "JWT", "PostgreSQL"],
  },
  {
    id: "photo-studio",
    featured: false,
    status: "dev",
    context: "freelance",
    role: { es: "Autor único", en: "Sole author" },
    period: "2026",
    title: { es: "Web operativa para un estudio de fotografía de eventos", en: "Operational website for an event-photography studio" },
    problem: {
      es: "Quien responde primero con una propuesta seria se queda con la fecha; el fotógrafo armaba cada presupuesto a mano.",
      en: "Whoever answers first with a serious proposal wins the date; the photographer built every quote by hand.",
    },
    built: [
      {
        es: "Panel privado que genera presupuestos en PDF en menos de un minuto, campaña de beneficios por QR con atribución y galerías desde SmugMug.",
        en: "Private panel that generates PDF quotes in under a minute, a QR benefits campaign with attribution and SmugMug-fed galleries.",
      },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "Vercel"],
  },
  {
    id: "tif-gym",
    featured: false,
    status: "dev",
    context: "academic",
    role: { es: "Backend · equipo de 3", en: "Backend · team of 3" },
    period: "2026",
    title: { es: "TIF — plataforma de gimnasios y rutinas", en: "Capstone — gym and workout platform" },
    problem: {
      es: "Rutina planificada y entrenamiento real viven separados; los turnos y beneficios de cada gimnasio, también.",
      en: "Planned routines and actual workouts live apart; so do each gym's bookings and perks.",
    },
    built: [
      {
        es: "API REST en .NET + React: rutinas planificadas vs. realizadas serie por serie, turnos con confirmación automática, suscripción Pro, roles usuario / gimnasio / superadmin y 2FA.",
        en: ".NET REST API + React: planned vs. performed routines set by set, auto-confirmed bookings, Pro subscription, user / gym / superadmin roles and 2FA.",
      },
    ],
    stack: [".NET", "C#", "React", "REST", "SQL"],
  },
  {
    id: "grow-an-abyss",
    featured: false,
    status: "dev",
    context: "personal",
    role: { es: "Autor único", en: "Sole author" },
    period: "2026",
    title: { es: "Grow an Abyss — juego idle para Roblox", en: "Grow an Abyss — idle game for Roblox" },
    problem: {
      es: "Un ecosistema bioluminiscente que crece mientras descendés: cuanto más profundo, más raras las criaturas.",
      en: "A bioluminescent ecosystem that grows as you descend: the deeper you go, the rarer the creatures.",
    },
    built: [
      {
        es: "Prototipo jugable en Luau con Rojo: tres loops (atraer, ecosistema, mejoras + descenso), bestiario y mundo construido en runtime.",
        en: "Playable Luau prototype with Rojo: three loops (attract, ecosystem, upgrades + descent), bestiary and a world built at runtime.",
      },
    ],
    stack: ["Luau", "Roblox Studio", "Rojo"],
  },
  {
    id: "nlp-recommender",
    featured: false,
    status: "done",
    context: "personal",
    role: { es: "Autor único", en: "Sole author" },
    period: "2024",
    title: { es: "Recomendador con NLP para League of Legends", en: "NLP recommender for League of Legends" },
    problem: {
      es: "Recomendar opciones a partir de texto libre, sin reglas escritas a mano.",
      en: "Recommend options from free text, without hand-written rules.",
    },
    built: [
      {
        es: "Embeddings con sentence-transformers, similitud coseno y un scraper Selenium para armar el dataset; interfaz en Tkinter.",
        en: "sentence-transformers embeddings, cosine similarity and a Selenium scraper to build the dataset; Tkinter UI.",
      },
    ],
    stack: ["Python", "sentence-transformers", "Selenium", "Tkinter"],
  },
  {
    id: "python-collection",
    featured: false,
    status: "done",
    context: "personal",
    role: { es: "Formación autodidacta", en: "Self-taught foundation" },
    period: "2024",
    title: { es: "Colección Python + Deep Learning", en: "Python collection + Deep Learning" },
    problem: {
      es: "Las bases: 30 horas de Python avanzado y tres módulos de TensorFlow antes de la Tecnicatura.",
      en: "The foundations: 30 hours of advanced Python and three TensorFlow modules before the degree.",
    },
    built: [
      {
        es: "14 proyectos (scraping, asistente de voz, Space Invaders en Pygame), sistema de gestión de flota en POO (~1.800 líneas) y CNN / NLP con TensorFlow.",
        en: "14 projects (scraping, voice assistant, Space Invaders in Pygame), an OOP fleet-management system (~1,800 lines) and CNN / NLP with TensorFlow.",
      },
    ],
    stack: ["Python", "Pygame", "TensorFlow", "Selenium"],
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const skills: SkillGroup[] = [
  {
    label: { es: "Lenguajes", en: "Languages" },
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Dart", "C# / .NET", "Luau"],
  },
  {
    label: { es: "Frontend", en: "Frontend" },
    items: ["React 19", "Next.js 15 / 16", "Server Actions", "Tailwind CSS 4", "PWA", "Recharts", "Radix UI"],
  },
  {
    label: { es: "Backend", en: "Backend" },
    items: ["Node.js", "FastAPI", "REST", "tRPC", "WebSockets", "Webhooks idempotentes", "SQLAlchemy / Alembic"],
  },
  {
    label: { es: "Mobile", en: "Mobile" },
    items: ["Flutter", "Expo / React Native", "EAS Build & Update", "SQLite offline"],
  },
  {
    label: { es: "Datos", en: "Data" },
    items: ["PostgreSQL", "Supabase (RLS, Auth, Storage, Edge Functions)", "Redis", "Migraciones SQL", "MySQL", "Pandas"],
  },
  {
    label: { es: "IA y automatización", en: "AI & automation" },
    items: ["n8n (workflows como código)", "Retell AI", "OpenAI API", "DeepEval", "Evolution API / WhatsApp", "Chatwoot", "Odoo (XML-RPC)"],
  },
  {
    label: { es: "DevOps e infra", en: "DevOps & infra" },
    items: ["Docker", "Nginx", "GitHub Actions (staging / prod)", "Vercel", "EasyPanel · Hostinger VPS", "Cloudflare", "Tailscale"],
  },
  {
    label: { es: "Seguridad y calidad", en: "Security & quality" },
    items: ["Multi-tenant + RLS", "AES-256-GCM", "JWT · 2FA TOTP · OAuth", "Vitest", "pytest", "Playwright", "Pruebas de carga", "ADRs · Conventional Commits"],
  },
  {
    label: { es: "Integraciones", en: "Integrations" },
    items: ["Mercado Pago (OAuth, webhooks)", "Resend", "Telegram", "Meta / TikTok / YouTube OAuth", "SmugMug", "RPA (Playwright, Scrapling)"],
  },
];

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export const education: EducationItem[] = [
  {
    kind: "degree",
    title: { es: "Tecnicatura Universitaria en Programación", en: "University Technical Degree in Programming" },
    org: "Universidad Tecnológica Nacional — Facultad Regional Rosario",
    period: "2025 — 2026",
    detail: {
      es: "Último cuatrimestre (4 de 4). Trabajo Integrador Final en curso: plataforma de gimnasios y rutinas (.NET + React), rol backend. Programación I–IV, Bases de Datos I–II, Metodología de Sistemas, Análisis de Datos, Gestión de Desarrollo.",
      en: "Final semester (4 of 4). Capstone in progress: gym & workout platform (.NET + React), backend role. Programming I–IV, Databases I–II, Systems Methodology, Data Analysis, Software Project Management.",
    },
  },
  {
    kind: "degree",
    title: { es: "Ingeniería en Sistemas de Información (primer año)", en: "Information Systems Engineering (first year)" },
    org: "Universidad Tecnológica Nacional — Facultad Regional Rosario",
    period: "2022 — 2023",
    detail: {
      es: "Cursado del primer año antes de reorientarme a la Tecnicatura para llegar antes a producción.",
      en: "Completed the first year before switching to the technical degree to get to production sooner.",
    },
  },
  {
    kind: "degree",
    title: { es: "Técnico en Informática Profesional y Personal", en: "Technician in Professional and Personal Computing" },
    org: "Colegio Salesiano San José — Rosario",
    period: "2015 — 2021",
    detail: {
      es: "Secundario técnico: redes, hardware, programación y soporte de sistemas.",
      en: "Technical high school: networks, hardware, programming and systems support.",
    },
  },
  {
    kind: "cert",
    title: { es: "Python TOTAL — Programador Avanzado en 16 días", en: "Python TOTAL — Advanced Programmer in 16 days" },
    org: "Udemy · Federico Garay",
    period: "oct 2024",
    detail: { es: "30,5 horas. Certificado UC-aeec9711.", en: "30.5 hours. Certificate UC-aeec9711." },
  },
  {
    kind: "cert",
    title: { es: "TensorFlow: introducción, CNN y NLP", en: "TensorFlow: introduction, CNNs and NLP" },
    org: "Serie de cursos autodidacta",
    period: "2024",
    detail: { es: "Redes convolucionales y procesamiento de lenguaje natural.", en: "Convolutional networks and natural language processing." },
  },
];

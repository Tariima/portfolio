import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/lib/i18n";
import { SITE } from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = "Matías Sione — Desarrollador full-stack";
const description =
  "Desarrollador full-stack en Rosario, Argentina. Llevo software a producción: plataformas web multi-tenant, apps móviles y agentes de IA (voz y WhatsApp) para negocios reales. Next.js · TypeScript · Python · Supabase · n8n.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: "%s · Matías Sione",
  },
  description,
  keywords: [
    "Matías Sione",
    "desarrollador full-stack",
    "full-stack developer",
    "Rosario",
    "Argentina",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "Supabase",
    "PostgreSQL",
    "n8n",
    "agentes de IA",
    "Flutter",
    "portfolio",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: { canonical: SITE.url },
  openGraph: {
    title,
    description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.fullName,
  alternateName: SITE.name,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  jobTitle: "Full-stack developer",
  address: { "@type": "PostalAddress", addressLocality: "Rosario", addressRegion: "Santa Fe", addressCountry: "AR" },
  sameAs: [SITE.github, SITE.linkedin],
  worksFor: [
    { "@type": "Organization", name: "Solvant", url: "https://solvant.com.ar" },
    { "@type": "Organization", name: "Krownsoft", url: "https://krownsoft.com.ar" },
  ],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad Tecnológica Nacional — Facultad Regional Rosario" },
  knowsAbout: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Supabase", "n8n", "Flutter", "AI agents"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-bg text-fg antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

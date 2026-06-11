import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/lib/i18n";
import { SITE } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Matías Sione — Desarrollador full-stack",
  description:
    "Portfolio de Matías Sione. Desarrollador full-stack: Next.js, TypeScript y Python. Aplicaciones web, integraciones de pago y plataformas multi-tenant.",
  keywords: [
    "Matías Sione",
    "desarrollador full-stack",
    "Next.js",
    "TypeScript",
    "Python",
    "React",
    "portfolio",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: "Matías Sione — Desarrollador full-stack",
    description:
      "Aplicaciones web, integraciones de pago y plataformas multi-tenant. Next.js · TypeScript · Python.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

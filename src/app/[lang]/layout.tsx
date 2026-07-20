/*
   импорт типа - создает контракт для данных, которые будут использоваться в компоненте. 
   Это помогает TypeScript проверять правильность данных
*/

import type { Metadata } from "next"; //
import { IBM_Plex_Sans, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import { LangProvider } from "@/hooks/useLang";

// Site typeface: IBM Plex Sans. cyrillic subset is required — RU is the default locale.
// Self-hosted by next/font (no external request, no layout shift). Exposed as a CSS
// variable that globals.css maps onto --font-ui and --font-reading.
const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

// Terminal typeface: Ubuntu Mono — the font GNOME Terminal ships with on Ubuntu.
// cyrillic subset is required: terminal comments are authored in RU too.
// globals.css maps this variable onto the --font-term theme token.
const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-ubuntu-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI-Rooms",
  description: "Learn AI through interactive rooms and challenges",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }]
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const { lang } = params;

  return (
    <html lang={lang} className={`${plexSans.variable} ${ubuntuMono.variable}`} suppressHydrationWarning>
      <body>
        {/* Apply persisted UI theme before hydration to avoid a flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('ui-theme')==='saas')document.documentElement.setAttribute('data-theme','saas')}catch(e){}`,
          }}
        />
        <LangProvider lang={lang}>
          <AppShell>{props.children}</AppShell>
        </LangProvider>
      </body>
    </html>
  );
}

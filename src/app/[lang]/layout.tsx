/*
   импорт типа - создает контракт для данных, которые будут использоваться в компоненте. 
   Это помогает TypeScript проверять правильность данных
*/

import type { Metadata } from "next"; // 
import "./globals.css";
import AppShell from "@/components/AppShell";
import { LangProvider } from "@/hooks/useLang";

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
    <html lang={lang}>
      <body>
        <LangProvider lang={lang}>
          <AppShell>{props.children}</AppShell>
        </LangProvider>
      </body>
    </html>
  );
}

/*
   импорт типа - создает контракт для данных, которые будут использоваться в компоненте. 
   Это помогает TypeScript проверять правильность данных
*/




import type { Metadata } from "next"; // 
import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className} style={{ backgroundColor: "#0f0f0f", color: "#e0e0e0" }}>
        <AppShell lang={lang}>{props.children}</AppShell>
      </body>
    </html>
  );
}

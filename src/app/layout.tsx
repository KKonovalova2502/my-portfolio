import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { LangProvider } from '../providers/LangProvider'; // створиш окремо

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio - Kseniia Konovalova',
  description: 'Full stack developer, React/Next.js/Node.js specialization',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LangProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

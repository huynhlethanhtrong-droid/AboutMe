import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';

const display = Cormorant_Garamond({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700']
});

const sans = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Huỳnh Lê Thanh Trọng | Portfolio',
  description: 'Editorial personal portfolio for Huỳnh Lê Thanh Trọng.',
  openGraph: {
    title: 'Huỳnh Lê Thanh Trọng',
    description: 'A personal collection of work, observations, and everything in between.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable} bg-paper font-sans text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}

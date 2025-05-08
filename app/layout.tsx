import type { Metadata } from 'next';
import "./globals.css";
import { Providers } from "./providers";
import AuthProvider from './providers/AuthProvider';
import Script from 'next/script';
import localFont from 'next/font/local';

const geistMono = localFont({
  src: [
    {
      path: './fonts/GeistMonoVF.woff',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'PathForge - Learning Platform',
  description: 'Interactive learning platform for developers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-secondary text-primary min-h-screen font-sans ${geistMono.variable} antialiased`}
      >
        <Providers>
          <AuthProvider>
            {children}
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}

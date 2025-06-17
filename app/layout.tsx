import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ankit Kumar - Full-Stack Developer',
  description: 'Full-Stack Developer passionate about Web3 & AI. Building scalable web applications with React, Next.js, and Node.js.',
  keywords: ['Ankit Kumar', 'Full-Stack Developer', 'Web3', 'AI', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Ankit Kumar' }],
  openGraph: {
    title: 'Ankit Kumar - Full-Stack Developer',
    description: 'Full-Stack Developer passionate about Web3 & AI',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
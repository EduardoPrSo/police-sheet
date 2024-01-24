'use client'
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import "./globals.css"

export default function RootLayout({
  children, session
}: Readonly<{
  children: React.ReactNode;
  session?: Session;
}>) {
  return (
    <html lang="pt-br">
      <body>        
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}

import React from 'react';
import './globals.css';
export const metadata = { title: 'Alexandra Monroe' };
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

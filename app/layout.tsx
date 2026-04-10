import React from 'react';
import './globals.css';
export const metadata = { title: 'Portfolio Preview — Salience Studio' };
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}

        {/* Floating Get Started button */}
        <div style={{
          position: "fixed",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "14px 28px",
          background: "linear-gradient(135deg, #10b981, #059669)",
          borderRadius: "999px",
          boxShadow: "0 8px 32px rgba(16,185,129,0.45), 0 2px 8px rgba(0,0,0,0.4)",
          cursor: "pointer",
          textDecoration: "none",
          whiteSpace: "nowrap",
          border: "1px solid rgba(52,211,153,0.4)",
        }}
        >
          <a
            href="https://saliencestudio.io/api/auth/signin/github"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
            </svg>
            <span style={{
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "white",
            }}>
              Get Started Free
            </span>
            <span style={{
              fontSize: "13px",
              fontWeight: 800,
              color: "rgba(255,255,255,0.7)",
            }}>→</span>
          </a>
        </div>
      </body>
    </html>
  );
}

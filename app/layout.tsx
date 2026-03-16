import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles
import Script from 'next/script';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Emaar Properties | Visionary Living',
  description: 'Discover world-class communities crafted by Emaar.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#FAF9F6] text-black antialiased" suppressHydrationWarning>
        {children}
        <Script id="voice-widget-config" strategy="afterInteractive">
          {`
            window.VOICE_WIDGET_CONFIG = {
              vapiPublicKey: "3413ee7b-c5f5-4dc3-93f1-a2185da2aa15",
              assistantId: "8178eb81-38fe-451b-9477-7a5289cfda89", // This is the ID for EMMAR
              businessName: "EMMAR",
              primaryColor: "#4f46e5", // Indigo (to match the EMMAR theme)
              secondaryColor: "#7c3aed",
              position: "bottom-right"
            };
          `}
        </Script>
        <Script src="https://voice-ai-admin-536573436709.us-central1.run.app/voice-widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

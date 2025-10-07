import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Decorba',
  description: 'Event Backdrops and Party Supplies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-[#F8F8F8]">
        {children}
        <Toaster />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/chat-widget@latest/dist/chat-widget.js';
                script.async = true;
                document.body.appendChild(script);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}

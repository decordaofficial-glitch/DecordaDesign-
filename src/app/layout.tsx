import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Decorba',
  description: 'Event Backdrops and Party Supplies',
  icons: {
    icon: 'https://res.cloudinary.com/dh7m6g7f8/image/upload/v1759491772/Fabicon_32x32-03_murthm.png?v=2',
  },
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
      </body>
    </html>
  );
}

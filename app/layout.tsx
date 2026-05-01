import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'SS | Bold Fits. Global Vibes.',
  description: 'Premium all-over print bodycon dresses for women worldwide.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

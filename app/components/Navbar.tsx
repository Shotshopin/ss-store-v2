import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-semibold tracking-wider">
          SS
        </Link>
        <Link href="#featured" className="text-sm uppercase tracking-[0.2em] text-white/80 transition hover:text-white">
          Shop
        </Link>
      </nav>
    </header>
  );
}

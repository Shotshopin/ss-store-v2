import Image from 'next/image';
import Link from 'next/link';
import { products } from './data';

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image src="/hero.svg" alt="SS bodycon dress" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 px-6 text-center fade-in">
          <h1 className="text-6xl font-semibold tracking-[0.2em] md:text-8xl">SS</h1>
          <p className="mt-5 text-xl tracking-[0.14em] md:text-2xl">Bold Fits. Global Vibes.</p>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/85 md:text-base">
            Statement dresses designed to turn heads
          </p>
          <Link
            href="#featured"
            className="mt-10 inline-block border border-white px-10 py-4 text-sm uppercase tracking-[0.25em] transition hover:bg-white hover:text-black"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-7xl px-6 py-24 fade-in">
        <h2 className="mb-10 text-3xl md:text-4xl">Featured Products</h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {products.map((product) => (
            <Link key={product.slug} href={`/product/${product.slug}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-sm md:text-base">{product.name}</h3>
              <p className="mt-1 text-white/80">$39.99</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 py-8 text-center text-sm uppercase tracking-[0.22em] text-white/85 md:text-base">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 md:flex-row md:justify-between md:gap-8">
          <p>Worldwide Shipping</p>
          <p>Premium Quality</p>
          <p>7-Day Returns</p>
        </div>
      </section>

      <section className="py-24 fade-in">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-3xl md:text-4xl">Trending</h2>
          <div className="flex snap-x gap-6 overflow-x-auto pb-2">
            {products.map((product) => (
              <div key={`trend-${product.slug}`} className="relative h-[460px] min-w-[300px] snap-start overflow-hidden md:min-w-[calc(50%-0.75rem)]">
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 80vw, 40vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

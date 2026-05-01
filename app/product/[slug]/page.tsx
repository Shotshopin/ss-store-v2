import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/app/data';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) notFound();

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 md:py-16">
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
          <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl">{product.name}</h1>
          <p className="mt-4 text-2xl">$39.99</p>
          <p className="mt-6 text-white/85">Designed to hug your curves and turn heads.</p>
          <button className="mt-8 w-full border border-white px-8 py-4 text-sm uppercase tracking-[0.25em] transition hover:bg-white hover:text-black md:w-auto">
            Add to Cart
          </button>
          <div className="mt-12 space-y-6 border-t border-white/10 pt-8 text-sm text-white/80">
            <div>
              <p className="mb-1 text-white">Shipping</p>
              <p>Made on demand. Delivered worldwide.</p>
            </div>
            <div>
              <p className="mb-1 text-white">Returns</p>
              <p>7-day no questions asked returns</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

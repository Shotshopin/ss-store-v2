export type Product = {
  slug: string;
  name: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: 'abstract-print-bodycon-dress',
    name: 'Abstract Print Bodycon Dress',
    image: '/dress-1.svg'
  },
  {
    slug: 'monochrome-wave-bodycon-dress',
    name: 'Monochrome Wave Bodycon Dress',
    image: '/dress-2.svg'
  },
  {
    slug: 'graphic-floral-bodycon-dress',
    name: 'Graphic Floral Bodycon Dress',
    image: '/dress-3.svg'
  },
  {
    slug: 'urban-stripe-bodycon-dress',
    name: 'Urban Stripe Bodycon Dress',
    image: '/dress-4.svg'
  }
];

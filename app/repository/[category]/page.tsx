import CategoryContent from './CategoryContent';
import { categories } from '@/data/categories';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) return { title: 'Not Found' };
  return { title: `${cat.label} — Cantina Virtual` };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) notFound();
  return <CategoryContent categorySlug={params.category} />;
}
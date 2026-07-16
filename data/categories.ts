export type CategoryConfig = {
  label: string;
  slug: string;
  color: string;
};

export const categories: CategoryConfig[] = [
  { label: 'AI Companions', slug: 'ai-companions', color: '#DAB12A' },
  { label: 'Dating',        slug: 'dating',        color: '#E85D75' },
  { label: 'Live Cams',     slug: 'live-cams',     color: '#FF8C42' },
  { label: 'Fan Sites',     slug: 'fan-sites',     color: '#6A4C93' },
  { label: 'Pay Sites',     slug: 'pay-sites',     color: '#1B998B' },
  { label: 'Gay',           slug: 'gay',           color: '#4E9DE0' },
  { label: 'Games',         slug: 'games',         color: '#52B788' },
  { label: 'Transgender',   slug: 'transgender',   color: '#C77DFF' },
  { label: 'Unique Offers', slug: 'unique-offers', color: '#F72585' },
];

export function getCategoryColor(categoryLabel: string): string {
  const found = categories.find((c) => c.label === categoryLabel);
  return found ? found.color : '#6b7280';
}

export function getCategorySlug(categoryLabel: string): string {
  const found = categories.find((c) => c.label === categoryLabel);
  return found ? found.slug : '';
}
export type Offer = {
  slug: string;
  title: string;
  category: string;
  description: string;
  affiliateUrl: string;
  countries: string[];
  imageUrl?: string;
};

export const offers: Offer[] = [
  {
    slug: 'ohchat',
    title: 'OhChat',
    category: 'AI Companions',
    description: 'Real creators. Real connection.',
    affiliateUrl: 'https://t.vlmai-1.com/413627/10464/0?aff_sub=NCTRENTRY&aff_sub2=AI&aff_sub3=OHCHAT&source=REPO&aff_sub5=SF_006OG000004lmDN',
    countries: [
      'Australia', 'Austria', 'Belgium', 'Bulgaria', 'Canada', 'Croatia',
      'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany',
      'Greece', 'Hungary', 'Ireland', 'Israel', 'Italy', 'Japan', 'Latvia',
      'Lithuania', 'Luxembourg', 'Malta', 'Monaco', 'Netherlands', 'New Zealand',
      'Norway', 'Poland', 'Portugal', 'Romania', 'Singapore', 'Slovakia', 'Spain',
      'Sweden', 'Switzerland', 'United Arab Emirates', 'Turkey', 'United Kingdom',
      'United States'
    ],
    imageUrl: ''
  }
];
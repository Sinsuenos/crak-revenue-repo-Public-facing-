/**
 * Offers data source.
 *
 * This is the single source of truth for the public offers listing.
 * Swap these placeholder entries for real offers later — no other file
 * needs to change. Each offer exposes only what the public page needs:
 *
 *   - slug         : short identifier used in the /go/<slug> redirect route
 *   - title        : human-readable offer title shown on /repository
 *   - affiliateUrl : the real affiliate destination (never shown to visitors)
 *
 * NOTE: This page is strictly public. Never add profit, commission, EPC,
 * conversion, or any other internal metric to this structure.
 */

export type Offer = {
  slug: string;
  title: string;
  affiliateUrl: string;
};

export const offers: Offer[] = [
  {
    slug: "test-offer-1",
    title: "Test Offer 1",
    affiliateUrl: "https://example.com/offer-1",
  },
  {
    slug: "test-offer-2",
    title: "Test Offer 2",
    affiliateUrl: "https://example.com/offer-2",
  },
  {
    slug: "test-offer-3",
    title: "Test Offer 3",
    affiliateUrl: "https://example.com/offer-3",
  },
];

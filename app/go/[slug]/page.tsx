import { notFound, redirect } from "next/navigation";
import { offers } from "@/data/offers";

/**
 * Dynamic short-link redirect.
 *
 * Visitors hit /go/<slug> from the public repository page (or from anywhere
 * else the short link is shared). We look up the slug in offers.ts and issue
 * a server-side redirect to the real affiliate URL. The destination URL is
 * never rendered to the page — only the short slug is public.
 *
 * If the slug does not match any offer, return a 404.
 */
export default function GoRedirectPage({
  params,
}: {
  params: { slug: string };
}) {
  const offer = offers.find((o) => o.slug === params.slug);

  if (!offer) {
    notFound();
  }

  redirect(offer.affiliateUrl);
}

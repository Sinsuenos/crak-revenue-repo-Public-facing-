import Link from "next/link";
import { offers } from "@/data/offers";

export const metadata = {
  title: "Offer Repository — Cantina Virtual",
  description: "Public list of available offers with shortened links.",
};

export default function RepositoryPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Offer Repository</h1>
        <p className="mt-2 text-neutral-600">
          Browse the available offers below. Each link opens the offer through
          a shortened redirect path.
        </p>
      </header>

      <ul className="divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
        {offers.map((offer) => {
          const shortLink = `/go/${offer.slug}`;
          return (
            <li
              key={offer.slug}
              className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <p className="truncate text-base font-medium text-neutral-900">
                  {offer.title}
                </p>
                <p className="truncate font-mono text-sm text-neutral-500">
                  {shortLink}
                </p>
              </div>
              <Link
                href={shortLink}
                className="inline-flex shrink-0 items-center rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
              >
                Open
              </Link>
            </li>
          );
        })}
      </ul>

      <footer className="mt-10">
        <Link
          href="/"
          className="text-sm text-neutral-500 underline-offset-4 hover:underline"
        >
          ← Back to home
        </Link>
      </footer>
    </main>
  );
}

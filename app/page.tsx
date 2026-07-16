import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Cantina Virtual</h1>
      <p className="mt-3 text-neutral-600">
        A public directory of available offers. Each offer is reachable through
        a clean short link that redirects to its destination.
      </p>
      <Link
        href="/repository"
        className="mt-8 inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
      >
        View offers
      </Link>
    </main>
  );
}

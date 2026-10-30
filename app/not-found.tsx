import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-[0.34em] text-accent">404</p>
        <h1 className="mt-4 font-serif text-5xl text-ink md:text-7xl">Page not found</h1>
        <Link href="/" className="mt-8 inline-flex border border-line px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-ink">
          Return home
        </Link>
      </div>
    </main>
  );
}

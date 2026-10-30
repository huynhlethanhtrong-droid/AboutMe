import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { getEntryIndex, getJournalBySlug, getLocaleFromSearch, journalEntries, withLang } from '@/src/data/site';

export function generateStaticParams() {
  return journalEntries.map((entry) => ({ slug: entry.slug }));
}

export default function JournalDetailPage({ params, searchParams }: { params: { slug: string }; searchParams?: { lang?: string } }) {
  const locale = getLocaleFromSearch(searchParams?.lang ?? '');
  const entry = getJournalBySlug(params.slug);

  if (!entry) {
    notFound();
  }

  const index = getEntryIndex(entry.slug);
  const nextEntry = index < journalEntries.length - 1 ? journalEntries[index + 1] : journalEntries[0];

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation locale={locale} />

      <article className="mx-auto max-w-[1100px] px-4 pb-16 pt-14 sm:px-6 lg:px-10">
        <Link href={withLang('/', locale)} className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-accent">
          <ArrowLeft size={14} />
          {locale === 'vi' ? 'Quay lại' : 'Back'}
        </Link>

        <header className="mt-8 border-b border-line pb-8">
          <p className="text-[10px] uppercase tracking-[0.28em] text-accent">{entry.category[locale]}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-none md:text-7xl">{entry.title[locale]}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted">
            <span>{entry.date}</span>
            <span>•</span>
            <span>{entry.readTime}</span>
          </div>
        </header>

        {entry.coverImage ? (
          <div className="relative mt-10 h-[500px] overflow-hidden border border-line bg-[#efeae2]">
            <Image src={entry.coverImage} alt={entry.title[locale]} fill sizes="100vw" className="object-cover" />
          </div>
        ) : null}

        <div className="mx-auto mt-12 max-w-[760px] space-y-8 text-lg leading-9 text-ink/80">
          {entry.content.map((paragraph, index) => (
            <p key={`${paragraph.vi}-${index}`}>{paragraph[locale]}</p>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-accent">{locale === 'vi' ? 'Bài tiếp theo' : 'Next note'}</p>
            <h2 className="mt-3 font-serif text-3xl text-ink">{nextEntry.title[locale]}</h2>
          </div>
          <Link href={withLang(`/journal/${nextEntry.slug}`, locale)} className="inline-flex items-center gap-3 border border-line px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-ink transition hover:bg-ink hover:text-paper">
            {locale === 'vi' ? 'Đọc tiếp' : 'Read next'}
            <ArrowRight size={14} />
          </Link>
        </div>
      </article>
    </main>
  );
}

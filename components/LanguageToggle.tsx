'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import type { Locale } from '@/src/data/site';

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const nextLocale: Locale = locale === 'vi' ? 'en' : 'vi';
  const params = new URLSearchParams(searchParams.toString());
  params.set('lang', nextLocale);

  return (
    <Link href={`${pathname}?${params.toString()}`} className="text-[10px] font-medium uppercase tracking-[0.26em] text-ink transition hover:text-muted">
      {locale === 'vi' ? 'EN' : 'VI'}
    </Link>
  );
}

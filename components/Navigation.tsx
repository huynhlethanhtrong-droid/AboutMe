'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { navLabels, type Locale } from '@/src/data/site';

const baseNav = ['home', 'about', 'work', 'photography', 'journal', 'contact'];

export function Navigation({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);

  const buildHref = (target: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', locale);
    const base = target === 'home' ? '/' : '/';
    return `${base}?${params.toString()}#${target === 'home' ? '' : target}`.replace(/#$/, '');
  };

  const nextLocale: Locale = locale === 'vi' ? 'en' : 'vi';
  const nextParams = new URLSearchParams(searchParams.toString());
  nextParams.set('lang', nextLocale);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link href={`/?${new URLSearchParams({ lang: locale }).toString()}`} className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-ink">
          HUỲNH LÊ THANH TRỌNG
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {baseNav.map((key) => (
            <Link
              key={key}
              href={buildHref(key)}
              className="relative text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted transition hover:text-ink"
            >
              <span className="after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100">
                {navLabels[key][locale]}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href={`${pathname}?${nextParams.toString()}`} className="hidden text-[10px] font-medium uppercase tracking-[0.26em] text-ink transition hover:text-muted md:inline-flex">
            {locale === 'vi' ? 'EN' : 'VI'}
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-full border border-line p-2 md:hidden"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-line bg-paper px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {baseNav.map((key) => (
              <Link
                key={key}
                href={buildHref(key)}
                onClick={() => setMobileOpen(false)}
                className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted"
              >
                {navLabels[key][locale]}
              </Link>
            ))}
            <Link href={`${pathname}?${nextParams.toString()}`} onClick={() => setMobileOpen(false)} className="pt-2 text-[10px] font-medium uppercase tracking-[0.26em] text-ink">
              {locale === 'vi' ? 'English' : 'Tiếng Việt'}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

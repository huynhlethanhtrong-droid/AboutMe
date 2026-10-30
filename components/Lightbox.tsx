'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Locale, PhotoItem } from '@/src/data/site';

export function Lightbox({ items, locale }: { items: PhotoItem[]; locale: Locale }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current === null ? 0 : (current + 1) % items.length));
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current === null ? items.length - 1 : (current - 1 + items.length) % items.length));
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [activeIndex, items.length]);

  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden rounded-none border border-line bg-white/40 text-left transition-transform hover:-translate-y-1 ${
              item.aspect === 'portrait' ? 'md:row-span-2' : item.aspect === 'square' ? 'md:aspect-square' : 'md:aspect-[4/3]'
            }`}
          >
            <div className="relative h-full min-h-[260px] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title[locale]}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent p-4 text-white">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/80">{item.category[locale]}</p>
              <p className="mt-2 font-serif text-2xl">{item.title[locale]}</p>
            </div>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#111111]/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl overflow-hidden border border-white/10 bg-paper">
            <button
              type="button"
              aria-label="Close photography viewer"
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center border border-black/10 bg-white/80 text-ink"
            >
              <X size={18} />
            </button>

            <div className="relative h-[70vh] min-h-[420px] w-full">
              <Image src={activeItem.image} alt={activeItem.title[locale]} fill sizes="80vw" className="object-contain" />
            </div>

            <div className="flex items-center justify-between gap-6 border-t border-line bg-paper p-4 sm:p-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.26em] text-accent">{activeItem.category[locale]}</p>
                <h3 className="mt-2 font-serif text-3xl text-ink">{activeItem.title[locale]}</h3>
                <p className="mt-2 max-w-xl text-sm text-muted">{activeItem.caption[locale]}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveIndex((current) => (current === null ? 0 : (current - 1 + items.length) % items.length))}
                  className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink transition hover:bg-ink hover:text-paper"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndex((current) => (current === null ? 0 : (current + 1) % items.length))}
                  className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink transition hover:bg-ink hover:text-paper"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

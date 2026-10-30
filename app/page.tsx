import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { CopyEmailButton } from '@/components/CopyEmailButton';
import { Navigation } from '@/components/Navigation';
import { Lightbox } from '@/components/Lightbox';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import {
  aboutInterests,
  getLocaleFromSearch,
  heroCopy,
  journalEntries,
  navLabels,
  personalInfo,
  photographyItems,
  projects,
  socialLinks,
  withLang
} from '@/src/data/site';

export default function HomePage({ searchParams }: { searchParams?: { lang?: string } }) {
  const locale = getLocaleFromSearch(searchParams?.lang ?? '');

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation locale={locale} />

      <section id="home" className="mx-auto max-w-[1440px] px-4 pb-10 pt-14 sm:px-6 lg:px-10 lg:pb-20 lg:pt-16">
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <Reveal>
            <div className="space-y-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-accent">
                {locale === 'vi' ? 'Khám phá' : 'Explore'}
              </p>
              <h1 className="max-w-[760px] whitespace-pre-line font-serif text-[3.8rem] leading-[0.82] tracking-[-0.06em] text-ink sm:text-[5rem] lg:text-[7.8rem]">
                {heroCopy.title[locale]}
              </h1>
              <p className="max-w-xl text-base leading-7 text-muted md:text-lg">
                {heroCopy.subtitle[locale]}
              </p>
              <div className="flex items-center gap-4 pt-2 text-sm">
                <span className="inline-flex items-center gap-2 text-muted">
                  <MapPin size={14} />
                  {personalInfo.location[locale]}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative h-[430px] overflow-hidden border border-line bg-[#eae4dc] md:h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                alt="Editorial portrait placeholder"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1d1d1b]/60 to-transparent p-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.26em] text-white/70">{personalInfo.tagline[locale]}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-line pt-5 text-[10px] uppercase tracking-[0.26em] text-muted">
          <span>{locale === 'vi' ? 'Cuộn xuống' : 'Scroll'}</span>
          <ArrowDown size={14} />
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionHeading number="01 /" title={locale === 'vi' ? 'Về tôi' : 'About'} subtitle={locale === 'vi' ? 'Một chút về tôi.' : 'A little about me.'} />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <div className="relative min-h-[500px] overflow-hidden border border-line bg-[#efeae2]">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
                alt="Portrait placeholder"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-accent">
                  {locale === 'vi' ? 'Sự quan tâm' : 'Interests'}
                </p>
                <h3 className="max-w-xl font-serif text-4xl leading-tight text-ink md:text-5xl">
                  {locale === 'vi' ? 'Một chút về tôi.' : 'A little about me.'}
                </h3>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-muted">{personalInfo.intro[locale]}</p>

              <div className="grid gap-4 border-t border-line pt-5 sm:grid-cols-2">
                {aboutInterests.map((item) => (
                  <div key={item[locale]} className="flex items-center justify-between border-b border-line py-3">
                    <span className="text-base text-ink">{item[locale]}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-accent">—</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionHeading number="02 /" title={locale === 'vi' ? 'Dự án chọn lọc' : 'Selected Work'} subtitle={locale === 'vi' ? 'Một tập hợp các hình ảnh, không gian và ý tưởng.' : 'A selection of visual studies, atmosphere, and spatial ideas.'} />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <Link href={withLang(`/work/${project.slug}`, locale)} className="group block overflow-hidden border border-line bg-white/50 transition hover:-translate-y-1">
                <div className="relative h-[420px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title[locale]}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.24em] text-accent">
                    <span>{project.category[locale]}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-[2.1rem] leading-none text-ink">{project.title[locale]}</h3>
                    <ArrowUpRight size={18} className="text-ink" />
                  </div>
                  <p className="text-sm leading-6 text-muted">{project.description[locale]}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="photography" className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionHeading
          number="03 /"
          title={locale === 'vi' ? 'Nhiếp ảnh' : 'Photography'}
          subtitle={locale === 'vi' ? 'Mảnh vỡ của nơi chốn, ánh sáng và thời gian.' : 'Fragments of places, light, and time.'}
        />

        <Lightbox items={photographyItems} locale={locale} />
      </section>

      <section id="journal" className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionHeading number="04 /" title={locale === 'vi' ? 'Ghi chép' : 'Journal'} subtitle={locale === 'vi' ? 'Những suy nghĩ ngắn, nơi chốn và những cuốn sách.' : 'Short reflections, places, and books.'} />

        <div className="grid gap-6 lg:grid-cols-3">
          {journalEntries.map((entry, index) => (
            <Reveal key={entry.slug} delay={index * 0.08}>
              <Link href={withLang(`/journal/${entry.slug}`, locale)} className="group block overflow-hidden border border-line bg-white/50 transition hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  {entry.coverImage ? (
                    <Image
                      src={entry.coverImage}
                      alt={entry.title[locale]}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : null}
                </div>
                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-accent">
                    <span>{entry.category[locale]}</span>
                    <span>{entry.readTime}</span>
                  </div>
                  <h3 className="font-serif text-[2.1rem] leading-none text-ink">{entry.title[locale]}</h3>
                  <p className="text-sm text-muted">{entry.date}</p>
                  <p className="text-sm leading-6 text-muted">{entry.excerpt[locale]}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10">
        <div className="overflow-hidden border border-line bg-[#1d1d1b] p-6 text-white md:p-10 lg:p-14">
          <SectionHeading number="" title={locale === 'vi' ? 'Beyond the screen.' : 'Beyond the screen.'} light />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {['Running', 'Swimming', 'Trekking', 'Reading'].map((item, index) => (
              <div key={item} className="border border-white/10 p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">0{index + 1}</p>
                <h3 className="mt-4 font-serif text-3xl text-white">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {locale === 'vi' ? 'Những khoảnh khắc chậm lại và cách ta đi qua không gian.' : 'Moments of slower movement and a more attentive way of seeing.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionHeading number="05 /" title={locale === 'vi' ? 'Liên hệ' : 'Contact'} subtitle={locale === 'vi' ? 'Hãy cùng tạo ra điều có ý nghĩa.' : 'Let’s make something meaningful.'} />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-8">
              <h3 className="font-serif text-5xl leading-none text-ink md:text-7xl">
                {locale === 'vi' ? 'Hãy cùng tạo ra điều có ý nghĩa.' : "Let's make something meaningful."}
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 border border-line px-4 py-3 text-sm uppercase tracking-[0.2em] text-ink transition hover:bg-ink hover:text-paper">
                  <Mail size={14} />
                  {personalInfo.email}
                </a>
                <CopyEmailButton email={personalInfo.email} locale={locale} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-4 border border-line bg-white/40 p-6">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-line py-4 text-sm uppercase tracking-[0.18em] text-ink hover:text-muted">
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="mx-auto max-w-[1440px] border-t border-line px-4 py-8 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-ink">{personalInfo.name}</p>
            <p className="mt-2 text-sm text-muted">{locale === 'vi' ? 'Làm bằng sự tò mò và sự có chủ ý.' : 'Made with curiosity and intention.'}</p>
          </div>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-muted">
            <span>{new Date().getFullYear()}</span>
            <Link href={withLang('/', locale)}>{locale === 'vi' ? 'Về đầu trang' : 'Back to top'}</Link>
            <Link href={withLang('/#contact', locale)}>{navLabels.contact[locale]}</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

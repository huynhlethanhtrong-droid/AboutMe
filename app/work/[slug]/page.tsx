import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { getLocaleFromSearch, getProjectBySlug, getProjectIndex, projects, withLang } from '@/src/data/site';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params, searchParams }: { params: { slug: string }; searchParams?: { lang?: string } }) {
  const locale = getLocaleFromSearch(searchParams?.lang ?? '');
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const index = getProjectIndex(project.slug);
  const nextProject = index < projects.length - 1 ? projects[index + 1] : projects[0];

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navigation locale={locale} />

      <section className="mx-auto max-w-[1440px] px-4 pb-16 pt-14 sm:px-6 lg:px-10">
        <Link href={withLang('/', locale)} className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-accent">
          <ArrowLeft size={14} />
          {locale === 'vi' ? 'Quay lại' : 'Back'}
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-accent">{project.category[locale]}</p>
            <h1 className="mt-4 font-serif text-5xl leading-none md:text-7xl">{project.title[locale]}</h1>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted md:text-lg">{project.overview[locale]}</p>
        </div>

        <div className="relative mt-10 h-[540px] overflow-hidden border border-line bg-[#efeae2]">
          <Image src={project.image} alt={project.title[locale]} fill sizes="100vw" className="object-cover" />
        </div>

        <div className="mt-10 grid gap-8 border-y border-line py-8 md:grid-cols-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-accent">{locale === 'vi' ? 'Vai trò' : 'Role'}</p>
            <p className="mt-3 text-base leading-7 text-muted">{project.role[locale]}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-accent">{locale === 'vi' ? 'Công cụ' : 'Tools'}</p>
            <p className="mt-3 text-base leading-7 text-muted">{project.tools.join(', ')}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-accent">{locale === 'vi' ? 'Năm' : 'Year'}</p>
            <p className="mt-3 text-base leading-7 text-muted">{project.year}</p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {project.gallery.map((image) => (
            <div key={image} className="relative h-[320px] overflow-hidden border border-line bg-[#efeae2]">
              <Image src={image} alt={project.title[locale]} fill sizes="(max-width: 1280px) 50vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-accent">{locale === 'vi' ? 'Dự án tiếp theo' : 'Next project'}</p>
            <h2 className="mt-3 font-serif text-3xl text-ink">{nextProject.title[locale]}</h2>
          </div>
          <Link href={withLang(`/work/${nextProject.slug}`, locale)} className="inline-flex items-center gap-3 border border-line px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-ink transition hover:bg-ink hover:text-paper">
            {locale === 'vi' ? 'Xem tiếp' : 'View next'}
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}

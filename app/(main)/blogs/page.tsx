"use client";

import Image from "next/image";
import Link from "next/link";
import BlogCard from "../../components/cards/BlogCard";
import Button from "../../components/button/Button";
import { useLanguage } from "../../i18n/LanguageProvider";

const blurDataUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/6XKZQAAAABJRU5ErkJggg==";

const BlogsPage = () => {
  const { t } = useLanguage();
  const blogsPage = t.blogsPage;

  const blogAccents = [
    "from-[#ede9fe]/70 via-white to-[#dbeafe]/70",
    "from-[#dcfce7]/70 via-white to-[#ccfbf1]/70",
    "from-[#fef3c7]/70 via-white to-[#ffe4e6]/70",
  ];

  return (
    <div className="w-full">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/banners/blog.jpg"
          alt={blogsPage.hero.imageAlt}
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataUrl}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-primary/60" />
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-primaryLight/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-140px] right-[-80px] h-[340px] w-[340px] rounded-full bg-sky-400/30 blur-3xl" />
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 py-8 text-white md:py-14 md:px-10">
          <span className="inline-flex w-fit self-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/80 md:self-start">
            {blogsPage.hero.label}
          </span>
          <div className="flex flex-col gap-5 text-center md:text-left">
            <h1 className="text-[32px] font-semibold leading-[1.05] md:text-[56px] font-spaceGrotesk">
              {blogsPage.hero.headline}
            </h1>
            <p className="max-w-[680px] text-[16px] text-white/80 md:text-[18px]">
              {blogsPage.hero.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              {blogsPage.hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/80"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Button href="/contact" theme="gradient">
                {blogsPage.hero.primaryCta}
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/20"
              >
                {blogsPage.hero.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {blogsPage.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur"
              >
                <p className="text-[22px] font-semibold">{stat.value}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1200px] px-6 py-14 md:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
            {blogsPage.list.label}
          </span>
          <h2 className="text-[30px] font-semibold text-slate-900 md:text-[40px] font-spaceGrotesk">
            {blogsPage.list.headline}
          </h2>
          <p className="max-w-[760px] text-[16px] text-slate-600 md:text-[18px]">
            {blogsPage.list.description}
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogsPage.blogs.map((blog, index) => (
            <BlogCard
              key={`${blog.title}-${index}`}
              {...blog}
              ctaLabel={blogsPage.list.cardCta}
              accent={blogAccents[index % blogAccents.length]}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;

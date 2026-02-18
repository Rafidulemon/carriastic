"use client";

import Link from "next/link";
import {
  FiCpu,
  FiLayers,
  FiShield,
  FiBookOpen,
  FiPenTool,
} from "react-icons/fi";
import BlogCard from "../../components/cards/BlogCard";
import blogAnimation from "@/public/gifs/jsons/blogs.json"
import Button from "../../components/button/Button";
import { useLanguage } from "../../i18n/LanguageProvider";
import Header from "../../components/navigations/Header";
import HeroBreadcrumb from "@/app/components/navigations/HeroBreadcrumb";
import Lottie from "lottie-react";

const BlogsPage = () => {
  const { t } = useLanguage();
  const blogsPage = t.blogsPage;
  const heroIcons = [FiLayers, FiCpu, FiShield, FiBookOpen, FiPenTool];

  const blogAccents = [
    "from-[#ede9fe]/70 via-white to-[#dbeafe]/70",
    "from-[#dcfce7]/70 via-white to-[#ccfbf1]/70",
    "from-[#fef3c7]/70 via-white to-[#ffe4e6]/70",
  ];

  return (
    <div className="w-full">
      <section
        id="blogs-hero"
        className="home-hero relative flex min-h-[100svh] flex-col overflow-hidden pb-10 text-white md:min-h-screen"
      >
        <div className="pointer-events-none absolute inset-0 home-grid" />
        <div className="home-orb home-orb-two" />
        <div className="home-orb home-orb-three" />
        <Header isDark />

        <div className="hero-smooth-reveal relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center gap-10 px-6 pt-8 sm:gap-12 sm:pt-10 md:gap-14 md:px-10 lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col gap-6 text-center lg:items-start lg:text-left">
            <HeroBreadcrumb
              items={[
                { label: blogsPage.hero.home, href: "/" },
                { label: blogsPage.hero.blog },
              ]}
            />
            <h1 className="text-[32px] font-semibold leading-[1.05] md:text-[56px] font-spaceGrotesk drop-shadow-[0_14px_30px_rgba(9,0,16,0.4)]">
              {blogsPage.hero.headline}
            </h1>
            <p className="max-w-[640px] text-[16px] text-white/80 md:text-[18px] lg:text-justify">
              {blogsPage.hero.description}
            </p>
            <ul className="flex flex-col gap-3 text-[14px] text-white/80">
              {blogsPage.hero.badges.map((badge, index) => {
                const Icon = heroIcons[index % heroIcons.length];
                return (
                  <li
                    key={badge}
                    className="flex items-center justify-center gap-3 lg:justify-start"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-primaryLight">
                      <Icon className="text-[18px]" />
                    </span>
                    <span>{badge}</span>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button
                href="/contact"
                theme="gradient"
                className="w-full sm:w-auto"
              >
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

          <div className="relative flex-1 pb-6 md:pb-0">
            <div className="relative overflow-hidden">
                <Lottie
                  animationData={blogAnimation}
                  loop
                  autoplay
                  className="h-full w-full"
                  aria-label={blogsPage.hero.label}
                />
            </div>
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

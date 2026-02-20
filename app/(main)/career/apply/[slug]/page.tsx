"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { z } from "zod";
import type { FieldError } from "react-hook-form";
import {
  FiArrowLeft,
  FiAlertTriangle,
  FiCheckCircle,
  FiClock,
  FiMapPin,
  FiSend,
  FiUpload,
} from "react-icons/fi";
import Button from "../../../../components/button/Button";
import Header from "../../../../components/navigations/Header";
import HeroBreadcrumb from "../../../../components/navigations/HeroBreadcrumb";
import EmailInput from "../../../../components/inputs/EmailInput";
import FileInput from "../../../../components/inputs/FileInput";
import TextArea from "../../../../components/inputs/TextArea";
import TextInput from "../../../../components/inputs/TextInput";
import { useLanguage } from "../../../../i18n/LanguageProvider";
import jobs from "../../../../../data/jobs.json";

const slugifyRole = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const applicationSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional().or(z.literal("")),
  linkedin: z.string().url("LinkedIn must be a URL").optional().or(z.literal("")),
  portfolio: z.string().url("Portfolio must be a URL").optional().or(z.literal("")),
  coverLetter: z
    .string()
    .min(20, "Cover letter should be at least 20 characters")
    .optional()
    .or(z.literal("")),
  resume: z
    .instanceof(File, { message: "Resume file is required" })
    .refine((file) => file.size <= 10 * 1024 * 1024, "Max file size is 10MB")
    .refine(
      (file) => /\.(pdf|doc|docx)$/i.test(file.name),
      "Only PDF, DOC, or DOCX files are allowed",
    ),
});

const ApplyPage = () => {
  const { t } = useLanguage();
  const params = useParams<{ slug: string }>();
  const [fileName, setFileName] = useState<string>("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
  });

  const job = useMemo(
    () => jobs.find((item) => item.slug === slugifyRole(params?.slug ?? "")),
    [params?.slug],
  );

  const handleInputChange =
    (field: keyof typeof formData) => (value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setResumeFile(file ?? null);
    setFileName(file ? file.name : "");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);

    try {
      applicationSchema.parse({ ...formData, resume: resumeFile });
      setErrors({});
      setSubmitted(true);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = err.flatten().fieldErrors as Record<string, string[]>;
        const mapped: Record<string, string> = {};
        Object.entries(fieldErrors).forEach(([key, value]) => {
          if (value?.length) mapped[key] = value[0];
        });
        setErrors(mapped);
      }
    }
  };

  if (!job) {
    return (
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center px-6 text-center">
          <FiAlertTriangle className="mb-3 text-amber-500" size={32} />
          <h1 className="text-2xl font-semibold text-slate-900">
            Role not found
          </h1>
          <p className="mt-2 text-slate-600">
            The position you’re looking for is unavailable. Please browse all
            open roles.
          </p>
          <div className="mt-6 flex gap-3">
            <Button href="/career" theme="gradient">
              Back to careers
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:border-sky-300 hover:text-sky-800"
            >
              Talk to us
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <section className="mx-auto w-full max-w-6xl px-6 pt-28 pb-10 md:pt-32">
        <div className="w-fit">
          <HeroBreadcrumb
            items={[
              { label: t.nav.home, href: "/" },
              { label: t.nav.career, href: "/career" },
              { label: job.title },
            ]}
          />
        </div>

        <div className="mt-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-7 text-white shadow-[0_24px_60px_rgba(15,23,42,0.25)] md:px-9 md:py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[12px] uppercase tracking-[0.26em] text-white/70">
                {job.type}
              </span>
              <h1 className="text-[30px] font-semibold leading-tight md:text-[38px] font-spaceGrotesk">
                {job.title}
              </h1>
              <p className="text-white/80 md:max-w-3xl">{job.intro}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[14px] text-white/80">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2">
                <FiMapPin className="text-[16px]" />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2">
                <FiClock className="text-[16px]" />
                {job.type}
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 pb-16 lg:flex-row lg:items-start">
        <article className="w-full rounded-3xl bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] lg:w-[58%]">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                Job description
              </p>
              <h2 className="text-2xl font-semibold text-slate-900">
                {job.title}
              </h2>
            </div>
            <Link
              href="/career"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900"
            >
              <FiArrowLeft /> All roles
            </Link>
          </div>

          <div className="space-y-6">
            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">Mission</h3>
              <p className="text-slate-600">{job.mission}</p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">
                Responsibilities
              </h3>
              <ul className="space-y-2 text-slate-700">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex gap-2">
                    <FiCheckCircle className="mt-[3px] text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">
                Requirements
              </h3>
              <ul className="space-y-2 text-slate-700">
                {job.requirements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <FiCheckCircle className="mt-[3px] text-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {job.niceToHave?.length ? (
              <section className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  Nice to have
                </h3>
                <ul className="space-y-2 text-slate-700">
                  {job.niceToHave.map((item) => (
                    <li key={item} className="flex gap-2">
                      <FiCheckCircle className="mt-[3px] text-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {job.perks?.length ? (
              <section className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  Perks & benefits
                </h3>
                <ul className="space-y-2 text-slate-700">
                  {job.perks.map((item) => (
                    <li key={item} className="flex gap-2">
                      <FiCheckCircle className="mt-[3px] text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </article>

        <aside className="w-full rounded-3xl bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] lg:sticky lg:top-24 lg:w-[42%]">
          <div className="mb-4">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
              Application
            </p>
            <h3 className="text-xl font-semibold text-slate-900">
              Apply for {job.title}
            </h3>
            <p className="text-sm text-slate-600">
              We typically respond within 3–5 business days.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                label="Full name"
                name="name"
                placeholder="Jane Doe"
                isRequired
                className="w-full"
                value={formData.name}
                onChange={(e) => handleInputChange("name")(e.target.value)}
                error={
                  errors.name
                    ? ({ message: errors.name } as FieldError)
                    : undefined
                }
              />
              <EmailInput
                label="Email"
                name="email"
                placeholder="you@example.com"
                isRequired
                className="w-full"
                value={formData.email}
                onChange={(e) => handleInputChange("email")(e.target.value)}
                error={
                  errors.email
                    ? ({ message: errors.email } as FieldError)
                    : undefined
                }
              />
              <TextInput
                label="Phone"
                name="phone"
                placeholder="+1 555 000 1234"
                className="w-full"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone")(e.target.value)}
                error={
                  errors.phone
                    ? ({ message: errors.phone } as FieldError)
                    : undefined
                }
              />
              <TextInput
                label="LinkedIn"
                name="linkedin"
                placeholder="https://linkedin.com/in/you"
                className="w-full"
                value={formData.linkedin}
                onChange={(e) => handleInputChange("linkedin")(e.target.value)}
                error={
                  errors.linkedin
                    ? ({ message: errors.linkedin } as FieldError)
                    : undefined
                }
              />
            </div>

            <TextInput
              label="Portfolio / GitHub"
              name="portfolio"
              placeholder="https://"
              className="w-full"
              value={formData.portfolio}
              onChange={(e) => handleInputChange("portfolio")(e.target.value)}
              error={
                errors.portfolio
                  ? ({ message: errors.portfolio } as FieldError)
                  : undefined
              }
            />

            <TextArea
              label="Cover letter"
              name="coverLetter"
              placeholder="Tell us why you’re excited about this role…"
              height="140px"
              className="w-full"
              value={formData.coverLetter}
              onChange={(e) => handleInputChange("coverLetter")(e.target.value)}
              error={
                errors.coverLetter
                  ? ({ message: errors.coverLetter } as FieldError)
                  : undefined
              }
            />

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <FiUpload className="text-sky-500" />
                <span>Upload CV/Resume</span>
              </div>
              <FileInput
                id="resume"
                name="resume"
                label="Choose file"
                accept=".pdf,.doc,.docx"
                isRequired
                onChange={handleFileChange}
                error={
                  errors.resume
                    ? ({ message: errors.resume } as FieldError)
                    : undefined
                }
              />
              <p className="text-xs text-slate-500">
                {fileName
                  ? `Selected: ${fileName}`
                  : "PDF, DOC, or DOCX only. Max 10MB."}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              {submitted ? (
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">
                  <FiCheckCircle /> Application ready to send
                </span>
              ) : (
                <span className="text-sm text-slate-500">
                  We never share your information without permission.
                </span>
              )}
              <Button
                type="submit"
                theme="gradient"
                className="flex items-center gap-2"
              >
                <FiSend />
                Submit application
              </Button>
            </div>
          </form>
        </aside>
      </main>
    </div>
  );
};

export default ApplyPage;

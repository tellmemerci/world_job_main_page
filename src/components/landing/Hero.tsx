import { ArrowRight, Sparkles } from "lucide-react";
import { jobs } from "@/data/jobs";
import { CtaLink } from "./CtaLink";
import { JobCard } from "./JobCard";

export function Hero() {
  const [a, b, c] = jobs;

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
            <Sparkles size={14} className="text-cyan" />
            Для специалистов из России · $ и € · без релокации
          </div>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Валютная удалёнка.
            <span className="mt-2 block bg-gradient-to-r from-purple via-blue to-cyan bg-clip-text text-transparent">
              ИИ, который помогает её получить.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Собираем резюме под международный рынок, пишем cover letter и отправляем
            работодателям. Worldwide remote — из дома, в валюте.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaLink href="/app" className="px-6 py-3.5 text-[15px]">
              Собрать резюме с ИИ
              <ArrowRight size={16} />
            </CtaLink>
            <CtaLink href="#how" variant="outline">
              Как это работает
            </CtaLink>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/8 pt-6">
            <div>
              <dt className="text-xs text-muted">Вилка</dt>
              <dd className="mt-1 font-display text-lg text-white">$4k–$12k</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Формат</dt>
              <dd className="mt-1 font-display text-lg text-white">Remote</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Рынок</dt>
              <dd className="mt-1 font-display text-lg text-white">Worldwide</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-md lg:h-[500px] lg:max-w-none">
          <div className="absolute left-1/2 top-6 w-[86%] -translate-x-[58%] rotate-[-8deg] opacity-80 float-c">
            <JobCard job={c} compact />
          </div>
          <div className="absolute left-1/2 top-28 w-[88%] -translate-x-[38%] rotate-[6deg] opacity-90 float-b">
            <JobCard job={b} compact />
          </div>
          <div className="absolute left-1/2 top-48 w-[92%] -translate-x-1/2 float-a">
            <JobCard job={a} />
          </div>
        </div>
      </div>
    </section>
  );
}

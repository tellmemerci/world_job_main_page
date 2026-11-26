import { jobs } from "@/data/jobs";
import { CtaLink } from "./CtaLink";
import { JobCard } from "./JobCard";
import { Reveal } from "./Reveal";

export function JobFeed() {
  return (
    <section id="jobs" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan">Лента</p>
              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                Вакансии, на которые стоит откликаться
              </h2>
              <p className="mt-3 max-w-xl text-muted">
                Worldwide remote с вилкой в валюте. ИИ подберёт роли под ваш стек и сам
                отправит резюме.
              </p>
            </div>
            <CtaLink href="/app" variant="outline">
              Открыть кабинет
            </CtaLink>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, i) => (
            <Reveal key={`${job.company}-${job.title}`} delay={i * 0.04}>
              <JobCard job={job} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

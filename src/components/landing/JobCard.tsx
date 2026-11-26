import type { Job } from "@/data/jobs";

const accents = {
  purple: "from-purple/25 to-transparent",
  blue: "from-blue/25 to-transparent",
  cyan: "from-cyan/25 to-transparent",
};

export function JobCard({ job, compact = false }: { job: Job; compact?: boolean }) {
  const accent = accents[job.accent ?? "purple"];

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.035] p-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.06]">
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${accent} opacity-70`} />
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/8 text-[11px] font-bold tracking-tight">
            {job.company.slice(0, 2)}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{job.company}</p>
            <p className="text-[11px] text-muted">{job.time}</p>
          </div>
        </div>
        <span className="rounded-full bg-white/6 px-2 py-0.5 text-[10px] uppercase tracking-wide text-cyan">
          {job.format}
        </span>
      </div>
      <h3 className={`relative mt-3 font-medium leading-snug text-white ${compact ? "text-sm" : "text-[15px]"}`}>
        {job.title}
      </h3>
      <p className="relative mt-2 font-display text-lg tracking-tight text-white">{job.salary}</p>
      <div className="relative mt-3 flex flex-wrap gap-1.5">
        <span className="rounded-full bg-purple/20 px-2 py-0.5 text-[11px] text-purple">{job.level}</span>
        <span className="rounded-full bg-blue/15 px-2 py-0.5 text-[11px] text-blue">{job.geo}</span>
        {!compact &&
          job.skills.slice(0, 2).map((skill) => (
            <span key={skill} className="rounded-full bg-white/6 px-2 py-0.5 text-[11px] text-white/70">
              {skill}
            </span>
          ))}
      </div>
    </article>
  );
}

import { Reveal } from "./Reveal";

const stats = [
  { value: "2 400+", label: "вакансий в подборке" },
  { value: "18k", label: "откликов с ИИ" },
  { value: "$6.4k", label: "средняя вилка" },
];

const quotes = [
  {
    name: "Анна, Product Designer",
    text: "За две недели — три созвона с европейскими командами. Резюме впервые выглядело как международное, а не перевод с HH.",
  },
  {
    name: "Кирилл, Frontend",
    text: "Не хотел сам писать cover letter. ИИ отправил 20 писем, я только ходил на интервью. Офер в евро, полностью remote.",
  },
  {
    name: "Мария, Data Analyst",
    text: "Боялась, что из РФ не возьмут. Фильтры WWORLD JOB отсекли «EU only», остались компании, которым реально всё равно.",
  },
];

export function Proof() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-6 rounded-3xl border border-white/8 bg-white/[0.03] p-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {quotes.map((quote, i) => (
            <Reveal key={quote.name} delay={i * 0.08}>
              <blockquote className="h-full rounded-3xl border border-white/8 bg-white/[0.03] p-6">
                <p className="text-sm leading-6 text-white/80">«{quote.text}»</p>
                <footer className="mt-4 text-xs uppercase tracking-wide text-cyan">{quote.name}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

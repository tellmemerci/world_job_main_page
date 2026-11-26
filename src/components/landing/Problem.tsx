import { Reveal } from "./Reveal";

export function Problem() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-white/8 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Локальный рынок</p>
            <h2 className="mt-3 font-display text-3xl text-white">HH, рубли, потолок.</h2>
            <ul className="mt-6 space-y-3 text-muted">
              <li>Те же вакансии, та же вилка, те же 40 откликов в пустоту.</li>
              <li>Резюме на русском не читают в международных командах.</li>
              <li>Cover letter «вручную» — часы, которые никто не открывает.</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="h-full rounded-3xl border border-cyan/25 bg-gradient-to-br from-purple/20 via-blue/10 to-transparent p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan/80">WWORLD JOB</p>
            <h2 className="mt-3 font-display text-3xl text-white">Валюта. ИИ. Отклик за вас.</h2>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>Вакансии worldwide, которые реально берут из РФ.</li>
              <li>Резюме и письмо под каждую роль — на английском, без канцелярита.</li>
              <li>ИИ отправляет работодателям и ведёт вас до созвона.</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

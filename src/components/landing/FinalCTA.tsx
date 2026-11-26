import { ArrowRight } from "lucide-react";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple/30 via-blue/20 to-cyan/10 px-6 py-16 text-center">
          <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-cyan/30 blur-3xl" />
          <h2 className="font-display text-3xl text-white sm:text-5xl">
            Собери резюме с ИИ
            <br />и выйди на валютный рынок.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Кабинет уже в пути. Оставь профиль — агент начнёт собирать отклики, как только
            доступ откроется.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaLink href="/app" className="px-8 py-3.5 text-base">
              Перейти в кабинет
              <ArrowRight size={18} />
            </CtaLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

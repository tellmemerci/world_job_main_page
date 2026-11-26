"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Профиль за 5 минут",
    text: "Опыт, стек, английский, желаемая вилка. Без анкеты на 40 полей.",
  },
  {
    n: "02",
    title: "ИИ собирает резюме",
    text: "CV и cover letter под международный шаблон — коротко, по делу, на английском.",
  },
  {
    n: "03",
    title: "Отклики и сопровождение",
    text: "Отправляем работодателям, подсказываем на интервью, пока не будет офер.",
  },
];

const lines = [
  "Собрал резюме под Senior Frontend, remote worldwide.",
  "Cover letter без воды. Акцент на React, TypeScript, AI-инструменты.",
  "Отправил 12 компаниям. 3 уже открыли. Готовим созвон на завтра.",
];

export function HowItWorks() {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState("");
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (reduce) return undefined;

    const full = lines[line];
    if (shown.length < full.length) {
      const t = window.setTimeout(() => setShown(full.slice(0, shown.length + 1)), 28);
      return () => window.clearTimeout(t);
    }

    const t = window.setTimeout(() => {
      setShown("");
      setLine((n) => (n + 1) % lines.length);
    }, 1600);
    return () => window.clearTimeout(t);
  }, [shown, line, reduce]);

  const text = reduce ? lines[lines.length - 1] : shown;

  return (
    <section id="how" className="scroll-mt-24 px-4 py-8 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-cyan">Как это работает</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-white sm:text-4xl">
            Три шага. Дальше ИИ работает за вас.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="grid gap-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                  <p className="font-brand text-xs tracking-widest text-purple">{step.n}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16}>
            <div className="glass flex h-full min-h-[320px] flex-col rounded-3xl p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs text-white/40">WWORLD JOB · AI agent</span>
              </div>
              <div className="flex-1 rounded-2xl bg-black/30 p-5 font-mono text-[13px] leading-7 text-cyan/90">
                <p className="text-white/40">you → найди мне валютную удалёнку</p>
                <p className="mt-4 typing-caret text-white">
                  <span className="text-cyan">ai → </span>
                  {text}
                </p>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/8">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-purple via-blue to-cyan" />
              </div>
              <p className="mt-2 text-xs text-muted">12 откликов · 3 просмотра · 1 слот на интервью</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

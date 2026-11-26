"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

const items = [
  {
    q: "Можно ли найти работу из России?",
    a: "Да. Мы собираем worldwide remote, где нет жёсткого ограничения «только EU / US residency». Такие вакансии отдельно помечаем.",
  },
  {
    q: "Как платят в валюте?",
    a: "Обычно через ИП / самозанятость, международный контракт или платёжные сервисы работодателя. ИИ подскажет, что указать в профиле, и какие форматы встречаются у конкретной компании.",
  },
  {
    q: "Нужен ли английский?",
    a: "Для большинства ролей — да, хотя бы B1–B2. Есть русскоязычные международные команды: их тоже показываем, но вилка там чаще ниже.",
  },
  {
    q: "Что именно делает ИИ?",
    a: "Собирает резюме и cover letter под вакансию, адаптирует тон, отправляет отклик и напоминает про следующие шаги. Собеседования проходите вы — агент готовит к ним.",
  },
  {
    q: "Это бесплатно?",
    a: "Старт бесплатный: профиль и первое резюме. Расширенные автоотклики и приоритетный подбор — в кабинете, когда откроем доступ.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-display text-3xl text-white sm:text-4xl">Вопросы</h2>
        </Reveal>
        <div className="mt-8 divide-y divide-white/8 rounded-3xl border border-white/8">
          {items.map((item, i) => {
            const active = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(active ? -1 : i)}
                  aria-expanded={active}
                >
                  <span className="text-sm font-medium text-white sm:text-base">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-cyan transition ${active ? "rotate-180" : ""}`}
                  />
                </button>
                {active && <p className="px-5 pb-5 text-sm leading-6 text-muted">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

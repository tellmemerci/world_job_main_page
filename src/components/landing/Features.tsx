import { Bot, Globe2, Send, Wallet } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: Bot,
    title: "ИИ-резюме",
    text: "Не шаблон с ChatGPT. Структура, тон и метрики, которые читают рекрутеры в EU и US.",
  },
  {
    icon: Send,
    title: "Автоотправка",
    text: "Отклики уходят работодателям, пока вы работаете. Без копипаста в 20 формах.",
  },
  {
    icon: Globe2,
    title: "Worldwide подбор",
    text: "Только роли, где remote из России реально возможен — не «EU only» в мелком шрифте.",
  },
  {
    icon: Wallet,
    title: "Валюта и таймзона",
    text: "Вилка в $ / €, понятные выплаты, пересечение по часовым поясам.",
  },
];

export function Features() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl text-white sm:text-4xl">Что делает продукт</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.06}>
              <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-6 transition hover:border-white/16">
                <feature.icon className="text-cyan" size={22} />
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

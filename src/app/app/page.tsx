import { CtaLink } from "@/components/landing/CtaLink";
import { Aurora } from "@/components/landing/Aurora";

export default function AppPlaceholder() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-6">
      <Aurora />
      <div className="glass max-w-md rounded-3xl p-8 text-center">
        <p className="font-brand text-xs tracking-[0.2em] text-cyan">WWORLD JOB</p>
        <h1 className="mt-4 font-display text-3xl text-white">Кабинет скоро откроется</h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          Здесь будет ИИ-агент: резюме, отклики и подбор валютной удалёнки. Сейчас это
          заглушка для кнопки «Начать».
        </p>
        <div className="mt-6">
          <CtaLink href="/">На главную</CtaLink>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-brand text-sm tracking-[0.16em] text-white">WWORLD JOB</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Валютная удалёнка для специалистов из России. ИИ пишет резюме и стучится к
            работодателям.
          </p>
        </div>
        <div className="flex gap-12 text-sm text-white/70">
          <div className="flex flex-col gap-2">
            <a href="#how" className="hover:text-white">
              Как это работает
            </a>
            <a href="#jobs" className="hover:text-white">
              Вакансии
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/app" className="hover:text-white">
              Кабинет
            </Link>
            <span className="text-white/35">Оферта</span>
            <span className="text-white/35">Конфиденциальность</span>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-white/30">© {new Date().getFullYear()} WWORLD JOB</p>
    </footer>
  );
}

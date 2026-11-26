"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CtaLink } from "./CtaLink";

const links = [
  { href: "#how", label: "Как это работает" },
  { href: "#jobs", label: "Вакансии" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[#05070f]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-purple via-blue to-cyan text-xs font-black text-white">
            W
          </span>
          <span className="font-brand text-[15px] font-semibold tracking-[0.12em] text-white">
            WWORLD JOB
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/65 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <CtaLink href="/app" variant="ghost">
            Войти
          </CtaLink>
          <CtaLink href="/app">Начать</CtaLink>
        </div>

        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/6 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <CtaLink href="/app" className="mt-2 w-full">
              Начать
            </CtaLink>
          </div>
        </div>
      )}
    </header>
  );
}

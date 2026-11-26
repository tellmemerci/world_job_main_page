const items = [
  "$4k–$12k",
  "без релокации",
  "worldwide remote",
  "€3.5k+",
  "Frontend",
  "Product",
  "Design",
  "Data",
  "ИИ-резюме",
  "автоотклики",
  "English B1+",
  "оплата в валюте",
];

export function Marquee() {
  const row = [...items, ...items];

  return (
    <section className="relative border-y border-white/8 py-4" aria-hidden>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05070f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05070f] to-transparent" />
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-8 pr-8">
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 text-sm font-medium tracking-wide text-white/55"
            >
              <span className="h-1 w-1 rounded-full bg-cyan" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

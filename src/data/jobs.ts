export type Job = {
  company: string;
  title: string;
  salary: string;
  level: string;
  format: string;
  geo: string;
  time: string;
  skills: string[];
  accent?: "purple" | "blue" | "cyan";
};

export const jobs: Job[] = [
  {
    company: "ElevenLabs",
    title: "Senior Frontend Engineer",
    salary: "$6 500–8 500",
    level: "senior",
    format: "удалённо",
    geo: "worldwide",
    time: "сегодня",
    skills: ["React", "TypeScript", "AI"],
    accent: "purple",
  },
  {
    company: "Linear",
    title: "Product Designer",
    salary: "$7 000–9 200",
    level: "middle+",
    format: "удалённо",
    geo: "worldwide",
    time: "2 ч назад",
    skills: ["Figma", "Product", "UI"],
    accent: "blue",
  },
  {
    company: "Stripe",
    title: "Backend Engineer",
    salary: "€6 800–9 000",
    level: "senior",
    format: "удалённо",
    geo: "EU remote",
    time: "сегодня",
    skills: ["Go", "Payments", "API"],
    accent: "cyan",
  },
  {
    company: "Notion",
    title: "Fullstack Engineer",
    salary: "$5 800–8 000",
    level: "middle",
    format: "удалённо",
    geo: "worldwide",
    time: "вчера",
    skills: ["Next.js", "Postgres"],
    accent: "purple",
  },
  {
    company: "Remote.com",
    title: "Customer Success Manager",
    salary: "$4 200–5 600",
    level: "middle",
    format: "удалённо",
    geo: "worldwide",
    time: "сегодня",
    skills: ["B2B", "English B2"],
    accent: "blue",
  },
  {
    company: "Vercel",
    title: "Developer Advocate",
    salary: "$6 000–8 400",
    level: "senior",
    format: "удалённо",
    geo: "worldwide",
    time: "3 ч назад",
    skills: ["DX", "Talks", "Next.js"],
    accent: "cyan",
  },
  {
    company: "Revolut",
    title: "Data Analyst",
    salary: "€4 500–6 200",
    level: "middle",
    format: "удалённо",
    geo: "EU / CIS",
    time: "сегодня",
    skills: ["SQL", "Python"],
    accent: "purple",
  },
  {
    company: "Figma",
    title: "Motion Designer",
    salary: "$5 000–7 100",
    level: "middle+",
    format: "удалённо",
    geo: "worldwide",
    time: "вчера",
    skills: ["After Effects", "Brand"],
    accent: "blue",
  },
  {
    company: "OpenAI",
    title: "Prompt Engineer / AI Ops",
    salary: "$7 500–11 000",
    level: "senior",
    format: "удалённо",
    geo: "worldwide",
    time: "сегодня",
    skills: ["LLM", "Python", "Eval"],
    accent: "cyan",
  },
];

export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-purple/30 blur-[140px]" />
      <div className="absolute top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-blue/25 blur-[120px]" />
      <div className="absolute top-[38%] right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-cyan/18 blur-[130px]" />
      <div className="absolute bottom-[-10rem] left-[20%] h-[24rem] w-[36rem] rounded-full bg-purple/16 blur-[140px]" />
      <div className="noise absolute inset-0 opacity-[0.07] mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#05070f_72%)]" />
    </div>
  );
}

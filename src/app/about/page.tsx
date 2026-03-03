export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
      <h1 className="section-title text-5xl md:text-8xl">About</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-sm leading-relaxed text-white/78 md:text-base">
          <p>
            Closecall is an Amsterdam-born event identity focused on underground rhythm,
            high visual direction, and lineups that move between UK sounds, club edits, and genre-fluid energy.
          </p>
          <p>
            We treat each event as a full creative drop: artwork, social rollout, music direction,
            room flow, and community-first curation.
          </p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">Core Pillars</p>
          <ul className="mt-4 space-y-3 text-sm text-white/78">
            <li>• Curated lineups</li>
            <li>• Graphic-heavy visual identity</li>
            <li>• Intimate, energetic dance floors</li>
            <li>• Community + culture driven</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

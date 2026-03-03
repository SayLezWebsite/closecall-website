import Image from "next/image";

export default function Homepage() {
  return (
    <div className="min-h-screen">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image
          src="/brand/flyers/Close Call_Flyer (Blurred).png"
          alt="Closecall flyer"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/70 to-[#050505]" />

        <div className="relative mx-auto flex min-h-[84vh] w-full max-w-7xl flex-col justify-end px-5 pb-14 pt-20 md:px-8">
          <p className="mb-3 text-[10px] uppercase tracking-[0.32em] text-white/70 md:text-xs">Amsterdam nightlife collective</p>
          <h1 className="section-title max-w-5xl text-5xl leading-[0.9] md:text-8xl">Closecall</h1>
          <p className="mt-6 max-w-2xl text-sm text-white/75 md:text-base">
            Rhythm-first events, graphic-heavy visuals, intimate dance floors.
            Built for people who stay late and move hard.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-14 md:grid-cols-3 md:px-8">
        {[
          ["Next Event", "Closecall x Skatecafé", "Lineup + tickets will drop here."],
          ["Latest Mix", "Closecall Radio Select", "Fresh sets and edits from the crew."],
          ["Merch Drop", "Caps / Tees / Posters", "Limited capsules linked in merch tab."],
        ].map(([kicker, title, desc]) => (
          <article key={title} className="rounded-2xl border border-white/15 bg-white/[0.03] p-5">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">{kicker}</p>
            <h3 className="mt-3 section-title text-2xl leading-tight">{title}</h3>
            <p className="mt-3 text-sm text-white/72">{desc}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

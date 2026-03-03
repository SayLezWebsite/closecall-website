import Image from "next/image";
import Link from "next/link";

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-[#050505]" />

        <div className="relative mx-auto grid min-h-[82vh] w-full max-w-7xl grid-rows-[1fr_auto] px-5 pb-10 pt-16 md:px-8 md:pt-20">
          <div className="self-end">
            <p className="mb-4 text-[10px] uppercase tracking-[0.34em] text-white/70 md:text-xs">Closecall · Amsterdam</p>
            <h1 className="section-title max-w-5xl text-6xl leading-[0.85] md:text-9xl">Night Culture For The Restless</h1>
          </div>

          <div className="mt-8 grid gap-6 border-t border-white/15 pt-5 md:grid-cols-[1.3fr_1fr]">
            <p className="max-w-2xl text-sm text-white/72 md:text-base">
              Closecall is a nightlife concept blending cutting-edge club music, immersive visuals,
              and high-energy lineups. Designed with a raw, editorial edge.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/events" className="rounded-full border border-white px-5 py-2 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black">Explore Events</Link>
              <Link href="/music" className="rounded-full border border-white/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white/85 hover:border-white">Listen</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-16 md:grid-cols-3 md:px-8">
        {["Events", "Music", "Merch"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="group rounded-2xl border border-white/15 bg-white/[0.02] p-6 transition hover:bg-white/[0.06]"
          >
            <p className="section-title text-3xl">{item}</p>
            <p className="mt-3 text-sm text-white/72">Open {item.toLowerCase()} section</p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/55 group-hover:text-white/80">Enter</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

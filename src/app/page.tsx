import Image from "next/image";
import Link from "next/link";
import { closecallEvents } from "@/data/events";

export default function Homepage() {
  return (
    <div className="min-h-screen">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image
          src="/brand/flyers/Close Call_Flyer (Blurred).png"
          alt="Closecall flyer"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/72 to-[#050505]" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-20 md:px-8 md:pt-24">
          <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-white/65 md:text-xs">Closecall · Amsterdam</p>
          <h1 className="section-title max-w-6xl text-6xl leading-[0.82] md:text-9xl">Closecall</h1>

          <div className="mt-10 grid gap-8 border-t border-white/15 pt-6 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/55">Identity</p>
              <p className="mt-3 max-w-2xl text-sm text-white/74 md:text-base">
                A nightlife platform built around movement, visual impact, and genre-fluid club energy.
                Designed to feel raw, sharp, and cinematic.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/events" className="rounded-full border border-white px-5 py-2 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black">Events</Link>
                <Link href="/music" className="rounded-full border border-white/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white/85 hover:border-white">Music</Link>
              </div>
            </div>

            <div className="grid gap-2 text-sm text-white/82 md:text-base">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/55">Upcoming / Recent</p>
              {closecallEvents.map((event) => (
                <Link
                  key={event.title + event.date}
                  href="/events"
                  className="group border-b border-white/10 py-2 transition hover:border-white/40"
                >
                  <p className="section-title text-2xl leading-tight md:text-3xl">{event.title}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-white/58 group-hover:text-white/80">{event.venue} · {event.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-14 md:grid-cols-3 md:px-8">
        {[
          ["About", "Who we are and what we build."],
          ["Merch", "Limited releases and future store drops."],
          ["Contact", "Bookings, partnerships, and collaborations."],
        ].map(([item, sub]) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="group rounded-2xl border border-white/15 bg-white/[0.02] p-6 transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
          >
            <p className="section-title text-3xl">{item}</p>
            <p className="mt-3 text-sm text-white/72">{sub}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/55 group-hover:text-white/85">Enter</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

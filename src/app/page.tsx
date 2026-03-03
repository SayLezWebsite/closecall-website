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
          className="object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/72 to-[#050505]" />

        <div className="relative mx-auto grid min-h-[83vh] w-full max-w-7xl grid-rows-[1fr_auto] px-5 pb-8 pt-20 md:px-8 md:pt-24">
          <div className="self-end">
            <p className="meta-kicker mb-5">Closecall / Amsterdam / Night Series</p>
            <h1 className="section-title max-w-6xl text-6xl leading-[0.79] md:text-[9.5rem]">Engineered for late-night energy</h1>
          </div>

          <div className="mt-10 grid gap-8 border-t border-white/15 pt-5 md:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="meta-kicker">Manifesto</p>
              <p className="mt-3 max-w-xl text-sm text-white/72 md:text-base">
                Closecall blends underground rhythm, hard visual contrast, and high-pressure lineups into nights that move like cinema.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/events" className="rounded-full border border-white px-5 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-white hover:text-black">Events</Link>
                <Link href="/music" className="rounded-full border border-white/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white/85 transition hover:border-white">Music</Link>
              </div>
            </div>

            <div className="grid content-start gap-2">
              <p className="meta-kicker">Program index</p>
              {closecallEvents.map((event) => (
                <Link key={event.title + event.date} href="/events" className="group border-b border-white/10 py-2 transition hover:border-white/45">
                  <p className="section-title text-2xl leading-tight md:text-3xl">{event.title}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-white/58 transition group-hover:text-white/82">{event.venue} · {event.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["About", "Identity, direction, and culture frame."],
            ["Merch", "Future drops with store integration placeholder."],
            ["Contact", "Bookings, partnerships, social links."],
          ].map(([item, sub]) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="group rounded-2xl border border-white/15 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07]"
            >
              <p className="section-title text-3xl">{item}</p>
              <p className="mt-3 text-sm text-white/72">{sub}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/55 transition group-hover:text-white/86">Enter</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

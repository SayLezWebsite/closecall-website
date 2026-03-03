import Link from "next/link";
import { closecallEvents } from "@/data/events";

export default function Homepage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8 md:py-14">
      <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="meta-kicker">Closecall</p>
          <h1 className="section-title mt-3 text-6xl leading-[0.82] md:text-[8.2rem]">Night Systems</h1>
          <p className="mt-6 max-w-xl text-sm text-white/75 md:text-base">
            Closecall builds high-pressure nightlife moments through lineups, visual direction, and room energy.
          </p>
        </div>

        <div className="divider pt-4">
          <p className="meta-kicker">Program</p>
          <div className="mt-3 space-y-2">
            <Link href="/events" className="section-title block text-3xl leading-none md:text-5xl">Events~</Link>
            <Link href="/music" className="section-title block text-3xl leading-none md:text-5xl">Music~</Link>
            <Link href="/merch" className="section-title block text-3xl leading-none md:text-5xl">Merch~</Link>
            <Link href="/contact" className="section-title block text-3xl leading-none md:text-5xl">Connect+</Link>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1fr]">
        <div className="divider pt-4">
          <p className="meta-kicker">Upcoming / Recent</p>
          <div className="mt-3 space-y-3">
            {closecallEvents.map((event) => (
              <Link key={event.title + event.date} href="/events" className="block border-b border-white/15 pb-3">
                <p className="section-title text-2xl md:text-3xl">{event.title}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-white/60">{event.venue} · {event.date}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="divider pt-4">
          <p className="meta-kicker">Identity</p>
          <p className="mt-3 text-sm text-white/75 md:text-base">
            Editorial minimalism, underground attitude, and a clear event-first architecture.
          </p>
        </div>
      </div>
    </section>
  );
}

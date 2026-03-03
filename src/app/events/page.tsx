import Image from "next/image";
import { closecallEvents } from "@/data/events";

export default function EventsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
      <p className="meta-kicker">Closecall archive</p>
      <h1 className="section-title mt-3 text-5xl leading-[0.9] md:text-8xl">Events</h1>
      <p className="mt-5 max-w-3xl text-sm text-white/75 md:text-base">
        Confirmed Closecall editions with SAY LEZ and associated flyers.
      </p>

      <div className="mt-10 space-y-8">
        {closecallEvents.map((event) => (
          <article key={event.title + event.date} className="grid gap-5 border-t border-white/15 pt-5 md:grid-cols-[320px_1fr]">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
              <Image src={event.flyer} alt={`${event.title} flyer`} width={1000} height={1300} className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]" />
            </div>
            <div>
              <p className="meta-kicker">{event.city} · {event.venue}</p>
              <h2 className="section-title mt-2 text-3xl leading-[0.95] md:text-5xl">{event.title}</h2>
              <p className="mt-3 text-sm text-white/78">{event.date}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/55">Lineup</p>
              <p className="mt-2 text-sm text-white/78">{event.lineup.join(" · ")}</p>
              {event.eventUrl && (
                <a href={event.eventUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full border border-white px-4 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-white hover:text-black">
                  Open event
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

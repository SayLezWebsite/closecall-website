import Image from "next/image";
import { closecallEvents } from "@/data/events";

export default function EventsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
      <h1 className="section-title text-5xl md:text-8xl">Events</h1>
      <p className="mt-5 max-w-3xl text-sm text-white/75 md:text-base">
        Closecall events featuring SAY LEZ, including the latest editions and flyers.
      </p>

      <div className="mt-10 space-y-10">
        {closecallEvents.map((event) => (
          <article key={event.title + event.date} className="grid gap-5 rounded-2xl border border-white/15 bg-white/[0.02] p-4 md:grid-cols-[340px_1fr] md:p-5">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
              <Image src={event.flyer} alt={`${event.title} flyer`} width={1000} height={1300} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">{event.city} · {event.venue}</p>
              <h2 className="section-title mt-2 text-3xl md:text-5xl">{event.title}</h2>
              <p className="mt-3 text-sm text-white/78">{event.date}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/55">Lineup</p>
              <p className="mt-2 text-sm text-white/78">{event.lineup.join(" · ")}</p>
              {event.eventUrl && (
                <a href={event.eventUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full border border-white px-4 py-2 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black">
                  Event Link
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

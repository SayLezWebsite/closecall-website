export default function EventsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
      <h1 className="section-title text-5xl md:text-7xl">Events</h1>
      <div className="mt-8 space-y-4">
        {[
          ["Closecall x Skatecafé", "Amsterdam", "Tickets soon"],
          ["Closecall Warehouse", "TBA", "Lineup incoming"],
          ["Closecall Summer Session", "TBA", "Announcement soon"],
        ].map(([name, city, status]) => (
          <article key={name} className="rounded-2xl border border-white/15 bg-white/[0.03] p-5 md:p-6">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">{city}</p>
            <h2 className="mt-2 section-title text-3xl">{name}</h2>
            <p className="mt-2 text-sm text-white/72">{status}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

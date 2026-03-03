export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
      <h1 className="section-title text-5xl md:text-8xl">Contact</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">Bookings</p>
          <a href="mailto:info@closecall.nl" className="mt-3 block text-2xl text-white underline underline-offset-4 md:text-3xl">
            info@closecall.nl
          </a>
          <p className="mt-3 text-sm text-white/72">Event bookings, club nights, partnerships.</p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">Social</p>
          <p className="mt-3 text-sm text-white/80">Instagram / Spotify / SoundCloud links can be added here as soon as you send them.</p>
        </div>
      </div>
    </section>
  );
}

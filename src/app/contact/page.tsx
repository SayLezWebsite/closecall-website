export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
      <h1 className="section-title text-5xl md:text-7xl">Contact</h1>
      <div className="mt-8 max-w-2xl rounded-2xl border border-white/15 bg-white/[0.03] p-6">
        <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">Bookings & Partnerships</p>
        <a href="mailto:info@closecall.nl" className="mt-3 block text-2xl text-white underline underline-offset-4 md:text-3xl">
          info@closecall.nl
        </a>
        <p className="mt-4 text-sm text-white/72">For lineups, brand collabs, and event proposals.</p>
      </div>
    </section>
  );
}

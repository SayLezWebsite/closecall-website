export default function MusicPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
      <h1 className="section-title text-5xl md:text-7xl">Music</h1>
      <p className="mt-5 max-w-2xl text-sm text-white/75 md:text-base">
        Featured mixes, recorded sets, and release links. We can wire SoundCloud + YouTube embeds here next.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {["Closecall Mix 001", "Closecall Live Session", "Guest Mix", "Archive Drop"].map((item) => (
          <div key={item} className="rounded-xl border border-white/15 bg-white/[0.03] p-5">
            <p className="section-title text-2xl">{item}</p>
            <p className="mt-2 text-sm text-white/70">Embed slot ready.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

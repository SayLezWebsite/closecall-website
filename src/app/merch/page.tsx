export default function MerchPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
      <h1 className="section-title text-5xl md:text-7xl">Merch</h1>
      <p className="mt-5 max-w-2xl text-sm text-white/75 md:text-base">
        Limited drops only. Apparel, posters, and accessories tied to events and collaborations.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {["Capsule 01", "Poster Series", "Accessories"].map((drop) => (
          <div key={drop} className="rounded-xl border border-white/15 bg-white/[0.03] p-5">
            <p className="section-title text-2xl">{drop}</p>
            <p className="mt-2 text-sm text-white/70">Coming soon</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MerchPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
      <h1 className="section-title text-5xl md:text-8xl">Merch</h1>
      <p className="mt-5 max-w-2xl text-sm text-white/75 md:text-base">
        Limited drops only. Apparel, posters, and accessories tied to events and collaborations.
      </p>

      <div className="mt-10 rounded-2xl border border-white/15 bg-white/[0.03] p-6 md:p-8">
        <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">Store embed placeholder</p>
        <h2 className="section-title mt-2 text-3xl md:text-5xl">Closecall Shop</h2>
        <p className="mt-3 max-w-2xl text-sm text-white/72">Drop your future shop URL here (Shopify, BigCartel, WooCommerce, etc.) and this section will become a live embed/button block.</p>
        <div className="mt-5 rounded-xl border border-dashed border-white/25 bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">Placeholder URL</p>
          <code className="mt-2 block text-sm text-white/90">https://shop.itsaclosecall.nl</code>
        </div>
      </div>

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

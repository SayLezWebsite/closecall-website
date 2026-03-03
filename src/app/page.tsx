import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/15">
        <Image
          src="/brand/flyers/Close Call_Flyer (Blurred).png"
          alt="Closecall blurred flyer"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/75 to-[#070707]" />

        <div className="relative mx-auto flex min-h-[88vh] w-full max-w-6xl flex-col justify-between px-6 py-8 md:px-10">
          <header className="flex items-center justify-between">
            <Image
              src="/brand/logos/Close Call_Logo's (White)-01.png"
              alt="Closecall"
              width={160}
              height={58}
              className="h-auto w-36 md:w-44"
            />
            <nav className="flex items-center gap-5 text-sm uppercase tracking-[0.18em] text-white/80">
              <a href="#events" className="hover:text-white">Events</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
          </header>

          <div className="max-w-3xl pb-14">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">Amsterdam · Club Night</p>
            <h1 className="text-5xl uppercase leading-[0.95] tracking-[0.04em] md:text-8xl">Closecall</h1>
            <p className="mt-5 max-w-xl text-sm text-white/80 md:text-base">
              A high-energy nightlife concept blending underground rhythm, bold visuals, and curated lineups.
              This is the first launch version of the official Closecall website.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#events" className="rounded-full border border-white px-5 py-2 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black">See Events</a>
              <a href="#contact" className="rounded-full border border-white/35 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white/80 hover:border-white">Book / Contact</a>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <h2 className="text-2xl uppercase tracking-[0.2em] text-white/90">Upcoming</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["Closecall x Skatecafé", "Closecall Warehouse", "Closecall Summer Session"].map((name) => (
            <article key={name} className="rounded-xl border border-white/15 bg-white/[0.03] p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">TBA</p>
              <h3 className="mt-2 text-lg uppercase tracking-[0.08em]">{name}</h3>
              <p className="mt-3 text-sm text-white/70">Tickets and full lineups will be published here.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-16 md:grid-cols-[1.3fr_1fr] md:px-10">
        <div>
          <h2 className="text-2xl uppercase tracking-[0.2em] text-white/90">About Closecall</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
            Closecall is built for community and movement: genre-fluid, late-night focused, and visually distinct.
            Inspired by fashion-forward club culture and cinematic nightlife identity.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-white/15">
          <Image
            src="/brand/profile/Close Call_Profile_Picture-01.png"
            alt="Closecall profile"
            width={720}
            height={720}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <footer id="contact" className="border-t border-white/15 px-6 py-10 text-center text-sm text-white/65">
        Contact / bookings: <a className="text-white underline" href="mailto:info@closecall.nl">info@closecall.nl</a>
      </footer>
    </main>
  );
}

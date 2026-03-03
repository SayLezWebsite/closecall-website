import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
      <h1 className="section-title text-5xl md:text-7xl">About</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-sm leading-relaxed text-white/78 md:text-base">
          <p>
            Closecall is a nightlife platform rooted in UK-inspired rhythm, forward club music,
            and a visual language that feels sharp, raw, and cinematic.
          </p>
          <p>
            Every night is curated end-to-end: lineup, room energy, pacing, artwork, and after-movie output.
            The intention is simple — make nights that feel like moments.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/15">
          <Image
            src="/brand/profile/Close Call_Profile_Picture-02.png"
            alt="Closecall profile"
            width={900}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

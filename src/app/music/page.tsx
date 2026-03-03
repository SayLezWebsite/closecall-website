const spotifyUrl = "#"; // send your Closecall Spotify link and I will wire it
const soundcloudUrl = "#"; // send your Closecall SoundCloud link and I will wire it

export default function MusicPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
      <h1 className="section-title text-5xl md:text-8xl">Music</h1>
      <p className="mt-5 max-w-2xl text-sm text-white/75 md:text-base">
        Official Closecall listening hub. Spotify and SoundCloud blocks are ready to link.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <a href={spotifyUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 hover:bg-white/[0.06]">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">Platform</p>
          <h2 className="section-title mt-2 text-3xl">Spotify</h2>
          <p className="mt-3 text-sm text-white/72">Tap to open official profile / playlist.</p>
        </a>

        <a href={soundcloudUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 hover:bg-white/[0.06]">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/60">Platform</p>
          <h2 className="section-title mt-2 text-3xl">SoundCloud</h2>
          <p className="mt-3 text-sm text-white/72">Tap to open official profile / latest drops.</p>
        </a>
      </div>
    </section>
  );
}

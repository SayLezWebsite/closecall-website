import Link from "next/link";
import ReferenceSquareSlideshow from "@/components/ReferenceSquareSlideshow";

export default function Homepage() {
  return (
    <section className="relative mx-auto flex min-h-screen w-full max-w-[1900px] flex-col justify-between px-6 py-8 md:px-12 md:py-10">
      <div className="flex items-start justify-between">
        <div className="space-y-1 pt-1 text-black">
          <a href="#" className="utility-link">/Sign up</a>
          <a href="https://www.instagram.com/itsaclosecall/" target="_blank" rel="noreferrer" className="utility-link">/Instagram</a>
          <a href="#" className="utility-link">/TikTok</a>
          <a href="#" className="utility-link">/YouTube</a>
          <a href="#" className="utility-link">/Soundcloud</a>
        </div>
        <button aria-label="Close" className="text-4xl leading-none">×</button>
      </div>

      <div className="flex flex-1 items-center justify-center py-8">
        <ReferenceSquareSlideshow />
      </div>

      <div className="mx-auto w-full max-w-[520px] pb-4">
        <div className="grid grid-cols-2 gap-x-16 gap-y-4 border-t border-black/70 pt-3 text-left">
          <Link href="/music" className="block text-[24px] font-black uppercase leading-none tracking-[0.03em] md:text-[40px]">Records~</Link>
          <Link href="/events" className="block text-[24px] font-black uppercase leading-none tracking-[0.03em] md:text-[40px]">Events~</Link>
          <Link href="/about" className="block text-[24px] font-black uppercase leading-none tracking-[0.03em] md:text-[40px]">About~</Link>
          <Link href="/contact" className="block text-[24px] font-black uppercase leading-none tracking-[0.03em] md:text-[40px]">Connect+</Link>
        </div>
      </div>
    </section>
  );
}

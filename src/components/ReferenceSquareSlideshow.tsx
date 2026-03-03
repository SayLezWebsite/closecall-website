"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const slides = Array.from({ length: 14 }, (_, i) => `/slides/2026-03-03-closecall-${String(i + 1).padStart(2, "0")}.jpg`);

export default function ReferenceSquareSlideshow() {
  const randomized = useMemo(() => {
    const copy = [...slides];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const nextIn = 550 + Math.floor(Math.random() * 700); // 0.55s - 1.25s
      timer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % randomized.length);
        tick();
      }, nextIn);
    };
    tick();
    return () => clearTimeout(timer);
  }, [randomized.length]);

  return (
    <div className="relative mx-auto aspect-square w-[52vw] max-w-[460px] min-w-[220px] overflow-hidden border border-black/70 bg-black">
      {randomized.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Closecall slide"
          fill
          priority={i < 2}
          className={`object-cover saturate-110 contrast-125 brightness-90 transition-opacity duration-300 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.34),transparent_38%),linear-gradient(155deg,rgba(0,0,0,0.04),rgba(0,0,0,0.62))]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.32] [background-image:radial-gradient(rgba(0,0,0,0.92)_0.6px,transparent_0.6px)] [background-size:3px_3px] mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:repeating-linear-gradient(145deg,rgba(255,255,255,0.3)_0px,rgba(255,255,255,0.3)_1px,transparent_1px,transparent_9px)]" />
    </div>
  );
}

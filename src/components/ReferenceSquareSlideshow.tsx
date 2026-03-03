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
      const nextIn = 500 + Math.floor(Math.random() * 1000); // 0.5s - 1.5s
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
          className={`object-cover transition-opacity duration-300 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}

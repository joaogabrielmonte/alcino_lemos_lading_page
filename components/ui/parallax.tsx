"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
};

export function Parallax({ children, className = "" }: ParallaxProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateScroll = () => {
      const nextY = window.scrollY || window.pageYOffset || 0;
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setScrollY(nextY);
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const limitedScroll = Math.min(scrollY, 720);
  const style = {
    transform: `translate3d(0, ${limitedScroll * -0.14}px, 0) scale(${1 + limitedScroll * 0.00014}) rotate(${limitedScroll * -0.002}deg)`,
    willChange: "transform",
  } as CSSProperties;

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className = "", delay = 0, y = 24 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0, rootMargin: "0px 0px -30px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const style = { "--reveal-offset": `${Math.min(y, 24)}px`, "--reveal-delay": `${delay}s` } as CSSProperties;
  return <div ref={ref} className={`reveal-up ${entered ? "has-entered" : ""} ${className}`.trim()} style={style}>{children}</div>;
}

"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
};

export function PageTransition({
  children,
  className,
}: PageTransitionProps) {
  return (
    <motion.main
      className={className}
      initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

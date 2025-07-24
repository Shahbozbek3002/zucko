"use client";

import { COLORS } from "@/constants/colors";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

export const PageTransitionOverlay = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [showOverlay, setShowOverlay] = useState(false);
  const [canRender, setCanRender] = useState(true);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const handleStart = () => {
      if (!isFirstLoad.current) {
        setCanRender(false); // sahifani yashirish
        setShowOverlay(true); // overlayni ko‘rsatish
      }
    };

    const handleComplete = () => {
      isFirstLoad.current = false;

      setTimeout(() => {
        setShowOverlay(false);
        setCanRender(true);
      }, 700);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="page-transition"
            initial={{
              scale: 0,
              opacity: 1,
              x: "100%",
              y: "-100%",
            }}
            animate={{
              scale: 30,
              x: "0%",
              y: "0%",
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.2 },
            }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: COLORS.MAIN_BACKGROUND,
              zIndex: 9999,
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>

      {canRender && children}
    </>
  );
};

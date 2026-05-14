"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { HiOutlineArrowUp } from "react-icons/hi2";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-999 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-14 h-14">
            <svg
              className="absolute w-full h-full -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                className="text-primary/10"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#19c9d1"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>
            <div className="flex items-center justify-center w-11 h-11 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full shadow-lg transition-all duration-500">
              <HiOutlineArrowUp className="text-primary text-xl transition-transform duration-500" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

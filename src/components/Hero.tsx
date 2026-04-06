"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute top-[-5%] left-[-5%] w-100 h-100 rounded-full bg-soft-cyan/50 blur-[100px] opacity-60" />
      <div className="absolute bottom-[-5%] right-[-5%] w-100 h-100 rounded-full bg-secondary/10 blur-[100px]" />
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-degular text-navy/70 text-lg sm:text-xl md:text-2xl font-medium tracking-widest uppercase">
            Coming Soon to the Digital Space
          </p>
          <h1 className="font-mona text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 text-primary leading-[0.95]">
            Innovating the <br />
            <span className="text-secondary underline decoration-cyan-brand decoration-4 underline-offset-8">
              Digital Frontier
            </span>
          </h1>
          <p className="font-degular max-w-xl mx-auto text-lg md:text-xl text-navy/70 mb-10 font-medium leading-relaxed">
            Premium MERN & Next.js solutions crafted with world-class UI/UX
            standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

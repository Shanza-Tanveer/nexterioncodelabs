"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Container from "../layout/Container";
import { CORE_VALUES_DATA } from "@/constants/data";

const CoreValues = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const step = 1 / CORE_VALUES_DATA.items.length;
    const index = Math.floor(latest / step);
    if (index >= 0 && index < CORE_VALUES_DATA.items.length) {
      setActiveIndex(index);
    }
  });

  return (
    <section id="coreValues" ref={containerRef} className="relative">
      <div className="sticky top-0 h-screen bg-[url('/images/core-values-bg.webp')] bg-cover bg-center w-full flex items-center overflow-hidden py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="relative h-87.5 flex flex-col justify-center order-2 lg:order-1 antialiased">
              {CORE_VALUES_DATA.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -80, scale: 0.6 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    x: activeIndex === index ? 0 : -40,
                    scale: activeIndex === index ? 1 : 0.6,
                    zIndex: activeIndex === index ? 20 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  style={{
                    transformOrigin: "left center",
                    visibility: activeIndex === index ? "visible" : "hidden",
                  }}
                  className={`absolute inset-0 flex flex-col space-y-5 justify-center ${activeIndex === index ? "pointer-events-auto" : "pointer-events-none"}`}
                >
                  <h2 className="font-degular text-[1.5rem] font-bold md:text-[1.6rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.8rem]">
                    <span className="text-secondary">{item.title1}</span>
                    <span className="text-primary"> {item.title2}</span>
                  </h2>
                  <p className="font-mona text-sm text-primary md:text-base xl:text-lg 2xl:text-xl">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="relative flex justify-center items-center h-112.5 order-1 lg:order-2">
              <div className="relative w-75 h-75 md:w-112.5 md:h-112.5">
                <div className="absolute inset-0 m-auto w-32 h-32 md:w-58 md:h-58 z-20 flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-secondary"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
                    }}
                  ></div>
                  <div className="relative z-10 text-center text-white font-degular font-bold text-xl md:text-4xl leading-none capitalize">
                    {CORE_VALUES_DATA.centerText.line1}
                    <br />
                    <span className="text-accent-cyan ">
                      {CORE_VALUES_DATA.centerText.line2}
                    </span>
                  </div>
                </div>
                {CORE_VALUES_DATA.items.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute ${item.pos} z-30 transition-all duration-500`}
                  >
                    <div
                      className={`
                      w-14 h-14 md:w-20 md:h-20 rounded-full shadow-xl flex items-center justify-center text-2xl md:text-4xl transition-all duration-700
                      ${
                        activeIndex === index
                          ? "bg-accent-cyan text-white shadow-[0_0_30px_rgba(25,201,209,0.6)] drop-shadow-[0_0_10px_rgba(25,201,209,0.4)] border-2 border-white/20"
                          : "bg-[#e0f7f8] text-secondary border-2 border-accent-cyan/10 shadow-[0_10px_20px_rgba(0,0,0,0.05)] drop-shadow-[0_4px_6px_rgba(25,201,209,0.1)]"
                      }
                    `}
                    >
                      <item.icon />
                    </div>
                  </div>
                ))}

                <div className="absolute inset-0 border-3 border-dotted border-accent-cyan/40 rounded-full animate-[spin_40s_linear_infinite]"></div>
                <div className="absolute inset-0 border-3 border-double border-accent-cyan/40 rounded-full scale-75 animate-[spin_25s_linear_reverse_infinite]"></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="h-[600vh]" />
    </section>
  );
};

export default CoreValues;

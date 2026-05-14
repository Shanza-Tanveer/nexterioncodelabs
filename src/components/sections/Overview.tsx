"use client";
import Container from "../layout/Container";
import { OVERVIEW_DATA } from "@/constants/data";

const Overview = () => {
  return (
    <section
      id="overview"
      className="relative flex h-[90vh] items-center justify-center overflow-hidden bg-[url('/images/overview-bg.webp')] bg-cover bg-center pt-20 md:h-[80vh] lg:h-[80vh] xl:h-[80vh] 2xl:h-[85vh]"
    >
      <Container>
        <div
          className="relative flex flex-col items-center justify-center gap-4 will-change-transform md:p-20"
          style={{ opacity: 1, transform: "none" }}
        >
          <h1
            className="false w-full bg-linear-to-r from-from-primary via-to-primary to-to-primary bg-clip-text text-center font-degular font-bold leading-none tracking-tighter text-transparent will-change-transform text-[2.2rem] text-6xl lg:w-full xl:text-7xl 2xl:text-[5.5rem]"
            style={{ opacity: 1, transform: "none" }}
          >
            {OVERVIEW_DATA.headingLine1}
            <span className="bg-linear-to-r from-from-secondary to-to-secondary bg-clip-text text-transparent transition-all duration-1000 block">
              {OVERVIEW_DATA.headingLine2}
            </span>
          </h1>
          <p
            className="mt-3 w-[90%] text-center font-mona text-white/50 will-change-transform 2xl:text-[1.4rem]"
            style={{ opacity: 1, transform: "none" }}
          >
            {OVERVIEW_DATA.description}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Overview;

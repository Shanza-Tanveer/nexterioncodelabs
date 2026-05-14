"use client";
import Image from "next/image";
import Container from "../layout/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PORTFOLIO_DATA } from "@/constants/data";
import SectionHeader from "../ui/SectionHeader";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#dad2f4] bg-cover bg-center py-20"
    >
      <Container>
        <SectionHeader
          primaryTitle={PORTFOLIO_DATA.title.primary}
          secondaryTitle={PORTFOLIO_DATA.title.secondary}
          description={PORTFOLIO_DATA.description}
        />
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            speed={800}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".portfolio-pagination" }}
          >
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <SwiperSlide key={index} className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="flex flex-col justify-center space-y-6">
                    <h3 className="font-degular text-[1.5rem] font-bold md:text-[1.6rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.8rem] text-primary">
                      {project.title}
                    </h3>
                    <p className="font-mona text-sm text-primary md:text-base xl:text-lg 2xl:text-xl">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-149.25 h-89.75 drop-shadow-xl object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="portfolio-pagination mt-12 flex gap-3 justify-center" />
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;

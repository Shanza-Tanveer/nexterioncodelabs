"use client";
import Container from "../layout/Container";
import { SERVICES_DATA } from "@/constants/data";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[url('/images/services-bg.webp')] bg-cover bg-center py-20"
    >
      <Container>
        <SectionHeader
          primaryTitle={SERVICES_DATA.title.primary}
          secondaryTitle={SERVICES_DATA.title.secondary}
          description={SERVICES_DATA.description}
        />
        <div className="grid grid-cols-3 gap-6">
          {SERVICES_DATA.items.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col gap-y-2 h-full w-full bg-white/55 p-6 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-end">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={100}
                  height={100}
                  className="w-16 h-auto"
                />
              </div>
              <h3 className="text-[0.7rem] font-bold md:text-[1.2rem] group-hover:text-secondary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-mona font-regular leading-6 text-primary text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;

"use client";
import Container from "../layout/Container";
import { ABOUT_DATA } from "@/constants/data";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="aboutUs"
      className="relative overflow-hidden bg-[url('/images/about-bg.webp')] bg-cover bg-center py-20"
    >
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
          <div className="flex xl:hidden justify-center xl:justify-end mb-8 xl:mb-0">
            <Image
              src={ABOUT_DATA.image}
              alt="Nexterion Software Engineering Excellence"
              width={100}
              height={100}
              className="w-full sm:w-[70%] xl:w-[80%] h-auto"
            />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="w-full font-degular text-2xl sm:text-4xl 2xl:text-[2.4rem] font-bold text-primary capitalize">
              {ABOUT_DATA.heading.line1}
              <br />
              <span className="text-secondary">{ABOUT_DATA.heading.line2}</span>
            </h2>
            <div className="flex grow flex-col gap-3 text-base font-mona font-normal text-primary">
              {ABOUT_DATA.paragraphs.map((p, index) => (
                <p key={index}>
                  {p.text}
                  {p.highlight && (
                    <span className="text-secondary">{p.highlight}</span>
                  )}
                  {p.afterHighlight}
                </p>
              ))}
            </div>
            <div className="gradientButton w-full font-mona font-medium">
              <button type="submit">
                <span className="text-primary">{ABOUT_DATA.buttonText}</span>
              </button>
            </div>
          </div>
          <div className="hidden xl:flex justify-center xl:justify-end">
            <Image
              src={ABOUT_DATA.image}
              alt="About Us"
              width={100}
              height={100}
              className="w-full xl:w-[80%] h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

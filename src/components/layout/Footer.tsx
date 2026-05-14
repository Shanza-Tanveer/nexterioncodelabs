"use client";
import { FaLinkedinIn } from "react-icons/fa";
import Container from "./Container";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[url('/images/footer-bg.webp')] bg-cover bg-center py-6"
    >
      <Container>
        <div className="flex items-center justify-between">
          <p className="px-4 text-center font-mona md:text-start text-sm text-gray-400">
            © Copyright 2026 Nexterion CodeLabs. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3 me-16">
            <a
              href="https://linkedin.com"
              target="_blank"
              className="flex h-8 w-8 items-center justify-center xl:h-11 xl:w-11 group"
            >
              <div className="duration-400 flex h-full w-full items-center justify-center bg-icon text-gray-400 group-hover:text-to-secondary text-[22px]">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="mailto:hello@nexterion.com"
              className="flex h-8 w-8 items-center justify-center xl:h-11 xl:w-11 group"
            >
              <div className="duration-400 flex h-full w-full items-center justify-center bg-icon text-gray-400 group-hover:text-to-secondary text-[22px]">
                <TfiEmail strokeWidth={0.4} />
              </div>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;

"use client";
import { FaLinkedinIn } from "react-icons/fa";
import Container from "./Container";
import { TfiEmail } from "react-icons/tfi";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[url('/images/footer-bg.webp')] bg-cover bg-center"
    >
      <Container>
        <div className="flex items-center justify-between border-b-[1.8px] border-gray-700 py-9">
          <Link href={"/"}>
            <Image
              src="/images/logo.svg"
              alt="Nexterion CodeLabs Logo"
              width={100}
              height={100}
              className="w-45 h-auto"
            />
          </Link>
          <div className="flex items-center gap-3 me-16">
            <a
              href="https://www.linkedin.com/company/nexterioncodelabs"
              target="_blank"
              className="flex h-8 w-8 items-center justify-center xl:h-11 xl:w-11 group"
            >
              <div className="duration-400 flex h-full w-full items-center justify-center bg-icon text-gray-400 group-hover:text-to-secondary text-[22px]">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="mailto:info@nexterioncodelabs.com"
              className="flex h-8 w-8 items-center justify-center xl:h-11 xl:w-11 group"
            >
              <div className="duration-400 flex h-full w-full items-center justify-center bg-icon text-gray-400 group-hover:text-to-secondary text-[22px]">
                <TfiEmail strokeWidth={0.4} />
              </div>
            </a>
          </div>
        </div>
        <p className="flex items-center justify-center font-mona md:text-start text-sm text-gray-400 py-4">
          © Copyright 2026 Nexterion CodeLabs. All Rights Reserved.
        </p>
      </Container>
    </section>
  );
};

export default Footer;

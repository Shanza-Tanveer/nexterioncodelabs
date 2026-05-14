"use client";
import Image from "next/image";
import Container from "./Container";
import { MouseEvent } from "react";
import Link from "next/link";
import { NAV_LINKS, CONTACT_BUTTON_TEXT } from "@/constants/data";

const DesktopHeader = () => {
  const handleScroll = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-999 bg-navy hidden lg:flex items-center h-[4.4rem]">
      <Container>
        <div className="flex items-center justify-between">
          <Link
            href={""}
            className="relative h-[43%] w-28 md:h-[55%] md:w-40 lg:h-[50%]"
          >
            <Image
              src="/images/logo.svg"
              alt="Nexterion CodeLabs Logo"
              width={100}
              height={100}
              className="w-37.5 h-auto"
            />
          </Link>
          <nav className="flex justify-end items-center">
            <div className="hidden xl:flex space-x-10">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-lg font-degular font-normal capitalize text-gray-200 hover:text-white transition-all duration-500 ease-in-out"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          <div className="relative" style={{ transform: "none" }}>
            <Link
              className="dark-gradient-button text-base font-mona font-medium cursor-pointer"
              href="/contact"
            >
              <button className="cursor-pointer">{CONTACT_BUTTON_TEXT}</button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default DesktopHeader;

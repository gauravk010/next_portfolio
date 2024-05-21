"use client";
import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();
  return (
    <div className="w-[70%] mx-auto  max-2xl:w-[90%] max-xl:w-full">
      <footer className="px-20 mt-72 max-md:px-5">
        <div className="bg-[#171719] h-fit rounded-t-2xl flex flex-row justify-between items-start p-24 max-md:p-10 max-lg:flex-col  max-lg:gap-12">
          <div className="flex flex-col gap-6 flex-1">
            <Link href={"/"}>
              <h1 className="text-2xl font-semibold">Gaurav<span className="text-orange-500">.</span></h1>
            </Link>
            <Link className="text-2xl text-orange-500" href={"/"}>
              Home
            </Link>
            <Link className="text-2xl text-orange-500" href={"/about"}>
              About me
            </Link>
          </div>
          <div className="flex-1 flex flex-row  gap-4 max-lg:flex-col w-full">
            {path === "/" ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("connect")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="border font-medium text-xl w-fit border-orange-500 px-6 py-4 rounded-full flex items-center gap-2 hover:bg-neutral-600 duration-200 max-lg:w-full max-md:text-lg max-md:px-5 max-md:py-3 max-md:w-full"
              >
                <FiArrowUpRight className="text-2xl max-md:text-xl" />
                <span>Let's Connect</span>
              </button>
            ) : (
              <Link
                href={"/#connect"}
                className="border font-medium text-xl w-fit border-orange-500 px-6 py-4 rounded-full flex items-center gap-2 hover:bg-neutral-600 duration-200 max-lg:w-full max-md:text-lg max-md:px-5 max-md:py-3 max-md:w-full"
              >
                <FiArrowUpRight className="text-2xl max-md:text-xl" />
                <span>Let's Connect</span>
              </Link>
            )}
            <a
              href="https://www.linkedin.com/in/gaurav-kumar-815004153"
              target={"_blank"}
              className="border font-medium text-xl w-fit border-orange-500 px-6 py-4 rounded-full flex items-center gap-2 hover:bg-neutral-600 duration-200 max-lg:w-full max-lg:justify max-md:text-lg max-md:px-5 max-md:py-3 max-md:w-full"
            >
              <FaLinkedin className="text-2xl max-md:text-xl" /> <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

"use client";
import React, { useContext } from "react";
import { Context } from "../Context/Context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const Sidebar = () => {
  const context = useContext(Context);
  const { IsOpen, setIsOpen } = context;
  const path = usePathname();
  return (
    <div
      className={`${
        IsOpen ? "top-0 h-[6000px]" : "-top-full h-0"
      } w-full pt-32 bg-[#101011] fixed z-30 overflow-hidden  duration-500 ease-in-out max-lg:flex hidden`}
    >
      <nav
        className={`${
          IsOpen ? "" : ""
        } w-[70%] mx-auto max-sm:w-full h-fit flex flex-col  justify-between gap-4  duration-500 items-start px-10`}
      >
        <div className="flex flex-col gap-8 mt-8 text-lg text-gray-300 w-full">
          <Link
            onClick={() => {
              setIsOpen(!IsOpen);
            }}
            className="hover:text-white duration-150 text-2xl flex justify-between items-center w-full"
            href={"/"}
          >
            <span>Home</span>
            <span className="rounded-full bg-[#171719] p-3">
              <HiArrowRight />
            </span>
          </Link>
          <Link
            onClick={() => {
              setIsOpen(!IsOpen);
            }}
            className="hover:text-white duration-150 text-2xl flex justify-between items-center w-full"
            href={"/about"}
          >
            <span>About me</span>
            <span className="rounded-full bg-[#171719] p-3">
              <HiArrowRight />
            </span>
          </Link>
        </div>
        {path === "/" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("connect")
                .scrollIntoView({ behavior: "smooth" });
              setIsOpen(!IsOpen);
            }}
            className="border font-medium mt-8 text-xl border-orange-500 px-5 py-3 rounded-full flex items-center gap-2 hover:bg-neutral-600 duration-200 w-full"
          >
            <FiArrowUpRight className="text-xl" />
            <span>Let's Connect</span>
          </button>
        ) : (
          <Link
            href={"/#connect"}
            onClick={() => {
              setIsOpen(!IsOpen);
            }}
            className="border font-medium mt-8 text-xl border-orange-500 px-5 py-3 rounded-full flex items-center gap-2 hover:bg-neutral-600 duration-200 w-full"
          >
            <FiArrowUpRight className="text-xl" />
            <span>Let's Connect</span>
          </Link>
        )}
        <a
          href="https://www.linkedin.com/in/gaurav-kumar-815004153"
          target={"_blank"}
          className="border font-medium text-xl border-orange-500 px-5 py-3 rounded-full flex items-center gap-2 hover:bg-neutral-600 duration-200 w-full"
        >
          <FaLinkedin className="text-xl" />
          <span>LinkedIn</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;

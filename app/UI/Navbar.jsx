"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { Context } from "../Context/Context";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const context = useContext(Context);
  const { IsOpen, setIsOpen } = context;
  const path = usePathname();
  return (
    <div className={`bg-[#101011] w-full fixed z-50 pt-6 top-0`}>
      <nav className="bg-[#171719] w-[70%] mx-auto max-2xl:w-[90%] max-xl:w-full  h-20 rounded-full flex justify-between items-center px-20  max-md:px-10">
        <div>
          <Link href={"/"}>
            <h1 className="text-2xl font-semibold">Gaurav<span className="text-orange-500">.</span></h1>
          </Link>
        </div>
        <div className="flex gap-8 text-lg text-gray-300  max-lg:hidden">
          <Link className="hover:text-white duration-150" href={"/"}>
            Home
          </Link>
          <Link className="hover:text-white duration-150" href={"/about"}>
            About me
          </Link>
        </div>
        {path === "/" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("connect")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-lg font-medium max-lg:hidden"
          >
            <FiArrowUpRight className="text-2xl" />
            <span>Let's Connect</span>
          </button>
        ) : (
          <Link
            href={"/#connect"}
            className="flex items-center gap-2 text-lg font-medium max-lg:hidden"
          >
            <FiArrowUpRight className="text-2xl" />
            <span>Let's Connect</span>
          </Link>
        )}
        {!IsOpen ? (
          <button
            className="items-center gap-2 text-lg font-medium max-lg:flex hidden"
            onClick={() => {
              setIsOpen(!IsOpen);
            }}
          >
            <RxHamburgerMenu className="text-2xl" />
          </button>
        ) : (
          <button
            className="items-center gap-2 text-lg font-medium max-lg:flex hidden"
            onClick={() => {
              setIsOpen(!IsOpen);
            }}
          >
            <IoClose className="text-2xl" />
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

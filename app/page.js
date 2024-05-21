"use client";
import Link from "next/link";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import image from "@/app/assets/boy.png";
import blog from "@/app/assets/blog.png";
import man from "@/app/assets/man.jpg";
import admin from "@/app/assets/admin.png";
import { motion } from "framer-motion";

export default function Home() {
  const projectsRef = useRef(null);

  const data = [
    {
      img: `${blog.src}`,
      title: "Blog Ideas",
      topic: "Blogging Website",
      description: "Blog Ideas is a blogging website built using MERN stack.",
      link: "/blog-ideas",
    },
    {
      img: `${admin.src}`,
      title: "Admin Dashboard",
      topic: "CMS Website",
      description: "Admin Dashboard is built using the MERN stack.",
      link: "/admin-dashboard",
    },
  ];
  return (
    <div className="w-[70%] max-xl:w-full  max-2xl:w-[90%]  mx-auto">
      <div className="px-20 max-md:px-5 mt-32 max-md:mt-24 max-sm:mt-16  flex flex-row items-center animate-fadinginout max-lg:justify-start">
        <div className="flex-1 max-lg:w-full">
          <p className="text-4xl font-light max-md:text-3xl">Hi there! I am</p>
          <p className="text-9xl mt-10 max-md:text-7xl max-md:mt-7 max-sm:text-7xl max-sm:mt-5">
            Gaurav <br />
            Kumar
          </p>
          <p className="text-xl mt-10 max-md:text-lg  max-md:mt-8 text-gray-200">
            Web Developer
          </p>
          <img
            src={image.src}
            alt="bg"
            className="w-[600px] max-md:w-[350px] max-sm:w-[300px] max-lg:block hidden mt-16 max-md:mt-10 max-sm:mt-8"
          />
          <div className="mt-16 max-md:mt-9 max-sm:mt-7">
            <button
              onClick={() =>
                projectsRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="border font-medium text-xl  w-fit border-orange-500 px-6 py-4 rounded-full max-sm:text-lg max-sm:px-5 max-sm:py-3 max-sm:w-full flex items-center gap-2 hover:bg-neutral-600 duration-200"
            >
              <FiArrowUpRight className="text-2xl max-sm:text-xl" />
              <span>check out my work</span>
            </button>
          </div>
        </div>
        <div className="flex-1 max-lg:w-full max-lg:hidden block">
          <img src={image.src} alt="bg" className="w-[600px]" />
        </div>
      </div>
      <motion.div
        className="px-20 mt-72 max-md:px-5"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
      >
        <div className="border border-[#171719] rounded-2xl flex flex-row justify-between items-start w-full px-24 py-28 max-md:px-10 max-md:py-14 gap-16 min-h-[720px] relative max-lg:flex-col">
          <div className="w-[30%] max-lg:w-full max-md:items-center h-full max-lg:gap-8 gap-10 flex flex-col justify-between">
            <div className="w-[100%] max-lg:w-[250px] max-lg:h-[350px] h-[400px] max-xl:w-full border border-orange-500 rounded-2xl  relative">
              <img
                className="h-full relative object-cover rounded-2xl -top-6 -left-6"
                src={man.src}
                alt=""
              />
            </div>
            <div className="max-lg:text-start max-lg:w-[250px]">
              <p className="text-lg font-semibold">Gaurav Kumar</p>
              <p className="text-lg font-light">Web Developer</p>
            </div>
          </div>
          <div className="flex-1 h-full flex flex-col justify-between">
            <p className="text-3xl font-light flex-1 leading-relaxed max-lg:text-2xl">
              I’m a <span className="font-semibold">MERN Stack Developer</span>.
              I have just completed my Internship as a React Developer. Now I am
              looking for new opportunities to gain more real-world experience
              and contribute my learning in team environments.
            </p>
            <Link
              href={"/about"}
              className="mt-10 border font-medium text-xl w-fit border-orange-500 px-6 py-4 rounded-full flex items-center gap-2 hover:bg-neutral-600 duration-200 max-md:text-lg max-md:px-5 max-md:py-3 max-md:w-full"
            >
              <FiArrowUpRight className="text-2xl max-md:text-xl" />
              <span>More</span>
            </Link>
          </div>
        </div>
      </motion.div>
      <div className="px-20 pt-32 mt-72 max-md:px-5" ref={projectsRef}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
        >
          <h2 className="text-orange-500 text-2xl font-medium">Projects</h2>
          {data.map((item, index) => {
            return (
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
                key={index}
                className="bg-[#171719] rounded-2xl flex flex-row items-center mt-10 w-full h-[400px] max-lg:h-full  gap-6 max-lg:flex-col"
              >
                <div className="flex-1 overflow-hidden  rounded-tl-2xl h-full max-lg:w-full max-lg:h-[450px] max-md:h-[350px] max-sm:h-[250px]  rounded-bl-2xl max-lg:rounded-t-2xl  max-lg:rounded-bl-none">
                  <Link href={item.link}>
                    <img
                      className="hover:scale-110 h-full w-full object-cover transition-transform delay-[.7] ease-in-out"
                      src={item.img}
                      alt={item.title}
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="p-10">
                    <h1 className="text-4xl font-bold max-lg:text-3xl">
                      {item.title}
                    </h1>
                    <p className="text-xl mt-7 max-lg:text-lg max-md:mt-5">
                      {item.topic}
                    </p>
                    <p className="text-3xl mt-10 max-lg:text-2xl max-md:mt-8">
                      {item.description}
                    </p>
                    <Link
                      href={item.link}
                      className="mt-10 border font-medium text-xl w-fit border-orange-500 px-6 py-4 rounded-full flex items-center gap-2 hover:bg-neutral-600 duration-200 max-md:text-lg max-md:px-5 max-md:py-3 max-md:w-full"
                    >
                      <FiArrowUpRight className="text-2xl max-md:text-xl" />{" "}
                      <span>View</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <div className="px-20 pt-32 mt-72 max-md:px-5" id="connect">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
        >
          <div className="border border-[#171719] rounded-2xl w-full px-24 max-md:px-10 max-md:py-14 py-28">
            <div>
              <h1 className="text-5xl max-md:text-4xl font-medium">
                Let&apos;s Connect
              </h1>
            </div>
            <div>
              <form className="mt-12" action="">
                <div className="flex flex-col  gap-6 justify-between">
                  <div className="flex flex-col w-full">
                    <label htmlFor="name">
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="mt-2 bg-[#101011] border border-[#171719] px-2 py-4 rounded-2xl"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col  w-full">
                    <label htmlFor="email">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="mt-2 rounded-2xl bg-[#101011] border border-[#171719] px-2 py-4"
                      type="email"
                      name="email"
                    />
                  </div>
                </div>
                <div className="flex flex-row max-lg:flex-col gap-6 justify-between mt-8">
                  <div className="flex flex-col  w-full">
                    <label htmlFor="mobile">
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="mt-2 rounded-2xl bg-[#101011] border border-[#171719] px-2 py-4"
                      type="text"
                      name="mobile"
                    />
                  </div>
                  <div className="flex flex-col  w-full">
                    <label htmlFor="subject">
                      Subject<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="mt-2 rounded-2xl bg-[#101011] border border-[#171719] px-2 py-4"
                      type="text"
                      name="subject"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex flex-col w-full">
                    <label htmlFor="mobile">
                      Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="mt-2 rounded-2xl bg-[#101011] border border-[#171719] px-2 py-4"
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-10 border font-medium text-xl w-fit border-orange-500 px-6 py-4 rounded-full hover:bg-neutral-600 duration-200 max-md:text-lg max-md:px-5 max-md:py-3 max-md:w-full"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

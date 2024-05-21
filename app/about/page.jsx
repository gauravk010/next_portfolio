import React from "react";
import man from "@/app/assets/man.jpg";
import { FaRegCircleCheck } from "react-icons/fa6";

const About = () => {
  return (
    <div className="w-[70%] mx-auto max-xl:w-full max-2xl:w-[90%]">
      <div className="px-20 mt-40 max-md:px-5">
        <div className="flex flex-row justify-between items-start w-full gap-16 h-full relative max-lg:flex-col-reverse">
          <div className="flex-1 h-full flex flex-col gap-10 justify-between max-lg:w-full">
            <p className="text-3xl font-light flex-1 leading-relaxed h-[400px] max-lg:text-2xl">
              I’m a <span className="font-semibold">MERN Stack Developer</span>.
              I have just completed my Internship as a React Developer. Now I am
              looking for new opportunities to gain more real-world experience
              and contribute my learning in team environments. And most
              importantly to continue my learning by working in real life
              projects and alongside experienced people.
            </p>
            <div>
              <h1 className="text-orange-500 text-xl font-semibold">
                Education
              </h1>
              <p className="text-3xl font-light mt-5 max-lg:text-2xl">B.Com (Hons.)</p>
              <h1 className="text-orange-500 text-xl font-semibold mt-10">
                Skills
              </h1>
              <p className="flex items-center gap-4 text-xl mt-5 max-lg:text-lg">
                <span>
                  <FaRegCircleCheck className="text-[#eaeaea]" />
                </span>
                <span>HTML</span>
              </p>
              <p className="flex items-center gap-4 text-xl mt-5 max-lg:text-lg">
                <span>
                  <FaRegCircleCheck className="text-[#eaeaea] max-lg:text-lg" />
                </span>
                <span>CSS</span>
              </p>
              <p className="flex items-center gap-4 text-xl mt-5 max-lg:text-lg">
                <span>
                  <FaRegCircleCheck className="text-[#eaeaea] max-lg:text-lg" />
                </span>
                <span>JavaScript</span>
              </p>
              <p className="flex items-center gap-4 text-xl mt-5 max-lg:text-lg">
                <span>
                  <FaRegCircleCheck className="text-[#eaeaea] " />
                </span>
                <span>React.js</span>
              </p>
              <p className="flex items-center gap-4 text-xl mt-5 max-lg:text-lg">
                <span>
                  <FaRegCircleCheck className="text-[#eaeaea]" />
                </span>
                <span>Next.js</span>
              </p>
              <p className="flex items-center gap-4 text-xl mt-5 max-lg:text-lg">
                <span>
                  <FaRegCircleCheck className="text-[#eaeaea]" />
                </span>
                <span>Node.js</span>
              </p>
              <p className="flex items-center gap-4 text-xl mt-5 max-lg:text-lg">
                <span>
                  <FaRegCircleCheck className="text-[#eaeaea]" />
                </span>
                <span>MongoDB</span>
              </p>
              <p className="flex items-center gap-4 text-xl mt-5 max-lg:text-lg">
                <span>
                  <FaRegCircleCheck className="text-[#eaeaea]" />
                </span>
                <span>Bootstrap</span>
              </p>
              <p className="flex items-center gap-4 text-xl mt-5 max-lg:text-lg">
                <span>
                  <FaRegCircleCheck className="text-[#eaeaea]" />
                </span>
                <span>Tailwind CSS</span>
              </p>
            </div>
          </div>
          <div className="w-[25%] h-full flex flex-col gap-10 justify-between max-lg:w-full max-md:items-center">
            <div className="w-[100%] max-lg:w-[300px] h-[400px] border border-orange-500 rounded-2xl  relative">
              <img
                className="h-full relative object-cover rounded-2xl -top-6 -left-6"
                src={man.src}
                alt="about"
              />
            </div>
            <div className="max-lg:text-start max-lg:w-[300px]">
              <p className="text-lg font-semibold">Gaurav Kumar</p>
              <p className="text-lg font-light">Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

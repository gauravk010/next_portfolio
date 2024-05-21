import React from "react";
import blogImg from "@/app/assets/blogideas.png";
import { FaRegCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const blog = () => {
  return (
    <div className="w-[70%] max-xl:w-full  max-2xl:w-[90%]  mx-auto">
      <div className="px-20 mt-32 max-md:px-5">
        <div>
          <h1 className="text-5xl max-lg:text-4lg">Blog Ideas</h1>
          <p className="mt-5 tracking-wider font-medium text-lg max-lg:text-base">
            Blogging website
          </p>
        </div>
        <div className="flex-1 overflow-hidden rounded-2xl max-lg:h-[400px]  max-md:h-[350px] max-sm:h-[250px] h-[600px] mt-10">
          <img
            className="h-full w-full object-cover "
            src={blogImg.src}
            alt={"blog-ideas"}
          />
        </div>
        <div>
          <h1 className="text-orange-500 text-xl max-lg:text-lg font-semibold mt-32 max-md:mt-20">
            Description
          </h1>
          <p className="inline-flex items-center gap-4 text-xl mt-5 max-lg:text-lg">
            <span>
              <FaRegCircleCheck className="text-[#eaeaea]" />
            </span>
            <span>
              Blog Ideas is a blogging website built using MERN stack in which
              user can perform CRUD operations.
            </span>
          </p>
          <p className="flex items-center gap-4 text-xl mt-5 max-lg:text-lg">
            <span>
              <FaRegCircleCheck className="text-[#eaeaea] " />
            </span>
            <span>
              It has login and sign up facility so that only registered user can
              perform operations such as create, delete and update.
            </span>
          </p>
          <p className="inline-flex items-center gap-4 text-xl mt-5 max-lg:text-lg">
            <span>
              <FaRegCircleCheck className="text-[#eaeaea]" />
            </span>
            <span>
              It also ensures user and user’s data security as I have used jwt
              and bcrypt.
            </span>
          </p>
          <p className="text-xl max-lg:text-lg mt-5">
            <span className="font-semibold">Note</span> - I'm using Render for
            my Backend, and it is a free web service that goes 15 minutes
            without receiving inbound traffic. So, please be patient if the
            website's API keeps loading, wait and just reload the website after
            one minute, as it takes up to a minute to restart the service.
          </p>
          <Link
            href={"https://blog-ideas.vercel.app/"}
            target="_blank"
            className="mt-10 border font-medium text-xl w-fit border-orange-500 px-6 py-4 rounded-full flex items-center gap-2 hover:bg-neutral-600 duration-200 max-md:text-lg max-md:px-5 max-md:py-3 max-md:w-full"
          >
            <FiArrowUpRight className="text-2xl max-md:text-xl" /> <span>Live</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default blog;

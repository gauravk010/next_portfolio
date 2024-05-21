import React from "react";
import adminImg from "@/app/assets/admindash.png";
import { FaRegCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const admin = () => {
  return (
    <div className="w-[70%] max-xl:w-full  max-2xl:w-[90%]  mx-auto">
      <div className="px-20 mt-32 max-md:px-5">
        <div>
          <h1 className="text-5xl max-lg:text-4lg">Admin Dashboard</h1>
          <p className="mt-5 tracking-wider font-medium text-lg max-lg:text-base">
            Admin Dashboard website
          </p>
        </div>
        <div className="flex-1 overflow-hidden rounded-2xl h-[600px] max-lg:h-[400px]  max-md:h-[350px] max-sm:h-[250px] mt-10">
          <img
            className="h-full w-full object-cover "
            src={adminImg.src}
            alt={"admin-dashboard"}
          />
        </div>
        <div>
          <h1 className="text-orange-500 text-xl font-semibold mt-32 max-md:mt-20 max-lg:text-lg">
            Description
          </h1>
          <p className="inline-flex items-center gap-4 text-xl mt-5 max-lg:text-lg">
            <span>
              <FaRegCircleCheck className="text-[#eaeaea]" />
            </span>
            <span>
              Admin Dashboard is built using the MERN stack in which users can
              perform CRUD operations.
            </span>
          </p>
          <p className="flex items-center gap-4 text-xl mt-5 max-lg:text-lg">
            <span>
              <FaRegCircleCheck className="text-[#eaeaea]" />
            </span>
            <span>
              I have used the Recharts library to present the data in the
              dashboard and many more packages like yup and useForm to manage
              and validate the form.
            </span>
          </p>
          <p className="inline-flex items-center gap-4 text-xl mt-5 max-lg:text-lg">
            <span>
              <FaRegCircleCheck className="text-[#eaeaea]" />
            </span>
            <span>
              It has a login and sign-up facility so that only registered users
              can perform CRUD operations. It also ensures user and user’s data
              security as I have used jwt and bcrypt.
            </span>
          </p>
          <p className="text-xl mt-5 max-lg:text-lg">
            <span className="font-semibold">Note</span> - I'm using Render for
            my Backend, and it is a free web service that goes 15 minutes
            without receiving inbound traffic. So, please be patient if the
            website's API keeps loading, wait and just reload the website after
            one minute, as it takes up to a minute to restart the service.
          </p>
          <Link
            href={"https://admin-dashboard-frontend-teal.vercel.app/"}
            target="_blank"
            className="mt-10 border font-medium text-xl w-fit border-orange-500 px-6 py-4 rounded-full flex items-center gap-2 hover:bg-neutral-600 duration-200 max-md:text-lg max-md:px-5 max-md:py-3 max-md:w-full"
          >
            <FiArrowUpRight className="text-2xl  max-md:text-xl" /> <span>Live</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default admin;

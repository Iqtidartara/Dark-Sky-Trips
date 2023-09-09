import React from "react";
import Link from "next/link";
import { CONTACT_US_LINK } from "@/constants";

const About = () => {
  return (
    <section className="bg-[#090808] w-full py-16">
      <div className=" max-w-6xl mx-auto text-gray-400 ">
        <div className="w-full flex flex-col md:flex-row items-center justify-between py-12 px-5 md:px-10 gap-5 md:gap-10">
          <div className="w-full md:w-1/2 flex items-center justify-center ">
            <img src="/about.jpg" alt="about"  className="rounded-xl"/>
          </div>
          <div className="w-full md:w-1/2 md:mr-10">
            <h1 className="text-white font-inter font-semibold text-2xl md:text-3xl text-center md:text-left">
              Our Promise to You
            </h1>

            <br />
            <p className="text-gray-400 font-inter font-medium text-base">
              At Dark Sky Trips, we are committed to providing you with an
              unforgettable experience.
              <br />
              <br />
              Our knowledgeable guides, comfortable accommodations, and safety
              measures ensure your journey is as seamless as it is magical.
              <br />
              <br />
              We take pride in our eco-conscious approach, respecting the
              natural environment we explore.
            </p>
            <br />
            <br />
            <Link
              href={CONTACT_US_LINK}
              className="inline-block px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm text-white font-medium bg-[#FF5209] duration-150 hover:bg-[#101010] active:bg-[#101010] rounded-lg border-2 border-orange-500 shadow-lg hover:shadow-none"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-evenly gap-5 md:gap-10 mt-10 mb-10 md:mr-40">
          <div className="text-center md:text-left">
            <h1 className="text-orange-500 font-inter text-xl md:text-4xl font-bold">
              100+
            </h1>
            <p className="text-white font-inter text-sm md:text-base font-bold">
              Global customers
            </p>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-orange-500 font-inter text-xl md:text-4xl font-bold">
              200+
            </h1>
            <p className="text-white font-inter text-sm md:text-base font-bold">
              Completed Trips
            </p>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-orange-500 font-inter text-xl md:text-4xl font-bold">
             15+
            </h1>
            <p className="text-white font-inter text-sm md:text-base font-bold">
              Expert workers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

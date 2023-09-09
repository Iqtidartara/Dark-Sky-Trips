import { CONTACT_US_LINK } from "@/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const MainPage = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat h-[40rem] w-full flex flex-col items-center relative"
      style={{
        backgroundImage: 'url("/bg1.jpg")',
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Change opacity as needed
      }}
    >
      <div className="bg-black/40 w-full h-full flex justify-center">
        <div className="w-full max-w-6xl mt-4 ">
          <div className="flex items-center justify-between p-4">
          <Image
  src="/LOGO.png"
  alt="Logo"
  width={600}
  height={600}
/>

            <Link
              href={CONTACT_US_LINK}
              className="inline-block px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm text-white font-medium bg-[#FF5209] duration-150 hover:bg-[#101010] active:bg-[#101010] rounded-lg border-2 border-orange-500 shadow-lg hover:shadow-none"
            >
              Contact us
            </Link>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <div className="mx-auto px-4 text-center md:max-w-5xl ">
              <div className="mx-auto text-center ">
                {/* <h3 className="text-gray-100 text-2 xl md:text-4xl font-semibold sm:text-4xl">
                Build the future with us
              </h3> */}

                <h2 className="text-3xl text-[#FF5209] font-extrabold mx-auto md:text-5xl mt-8  leading-10">
                  Experience Beauty of Gilgit Baltistan & Paksitan{" "}
                  <span className="text-transparent bg-clip-text bg-[#ffffff]">
                    with Dark Sky Trips
                  </span>
                </h2>
                <br />

                <p className="mt-3 mx-auto text-gray-300 md:max-w-2xl ">
                  Dark Sky Trips invites you to embark on an extraordinary
                  journey through the pristine landscapes of Gilgit-Baltistan
                  and Pakistan. Get ready to witness the unparalleled beauty of
                  this region like never before.
                </p>
                <br />
              </div>
              <div className="flex flex-col md:flex-row gap-3 items-center mt-4 justify-center">
                <Link
                  href={CONTACT_US_LINK}
                  className="block py-2 px-4 text-white font-medium bg-[#FF5209] duration-150 hover:bg-[#101010] active:bg-[#101010] rounded-lg border-2 border-orange-500 shadow-lg hover:shadow-none"
                >
                  Contact us
                </Link>
                <Link
                  href="#packages-section"
                  className="block py-2 px-4 text-white hover:text-gray-400 font-medium duration-150 active:bg-gray-100  rounded-lg border-2 border-orange-500"
                >
                  See Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;

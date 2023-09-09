'use client'
import Link from "next/link";
import React, { useState } from "react";
import { PD, PHONE_NUMBER } from "@/constants";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Check } from "lucide-react";
import ReactWhatsapp from "react-whatsapp";

const MainLinks = () => {
  const [pdc, setPdc] = useState(0);
  return (
    <section id='packages-section' className="bg-[#090808] w-full py-16">
      <div className="max-w-6xl mx-auto text-gray-400">
        <div className="space-y-5 mx-auto text-center pl-4 pr-4 sm:pl-8 sm:pr-8">
          <h2 className="text-xl sm:text-3xl md:text-5xl text-white font-extrabold mx-auto">
          Customized Packages for  <br className="" />
            <span className="text-transparent bg-clip-text md:text-[2.2rem]  bg-[#FF5209]">
              {" "}
              Every Mode, Every Budget, and Every Adventure!
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base">
          Whether you`&apos;`re an intrepid explorer, a budget-conscious backpacker, or seeking a luxurious escape, our comprehensive selection of packages guarantees an unforgettable adventure. Discover the beauty of diverse landscapes, cultures, and experiences, all while staying within your budget
          </p>
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <Link
              href="javascript:void(0)"
              className="block py-2 px-4 text-white font-medium bg-[#FF5209] duration-150 hover:bg-[#101010] active:bg-[#101010] rounded-lg border-2 border-orange-500 shadow-lg hover:shadow-none mb-3 sm:mb-0"
            >
              Contacts us
            </Link>
            <Link
              href="javascript:void(0)"
              className="block py-2 px-4 text-white hover:text-gray-400 font-medium duration-150 active:bg-gray-100 rounded-lg border-2 border-orange-500"
            >
              See Plans
            </Link>
          </div> */}
        </div>
        <div>
          <div className="capitalize flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-10">
            {PD.map((data, index) => (
              <button
                key={index}
                onClick={() => {
                  setPdc(index);
                }}
                className={`hover:bg-orange-500/25 hover:text-white rounded-full border border-orange-500 py-1 px-2 sm:px-3 md:px-4 mb-2 sm:mb-0 ${
                  index === pdc ? "bg-orange-500 text-white" : ""
                }`}
              >
                {data.name}
              </button>
            ))}
          </div>

          <div
            className="mt-6 sm:mt-8 h-[15rem] md:h-[25rem] rounded-xl flex items-center justify-center"
            style={{
              background: `url('${PD[pdc].image}') center/cover no-repeat`,
            }}
          >
            <h1 className="text-white font-bold text-xl sm:text-3xl">
              {PD[pdc].name}
            </h1>
          </div>

          <h1 className="text-white font-bold text-xl sm:text-3xl mt-6 sm:mt-8">
            {PD[pdc].name} <span className="text-orange-500 cursor-pointer" >Packages</span> 
          </h1>

          <div className="mt-4 p-2 sm:p-4 grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {PD[pdc].packages.map((pg, index) => {
              const lii = pg.description.split(/- +/);

              const getmli = (li:string[]) => {
                let m = "";
                li.map((l) => {
                  m = m + `\n- ${l}`;
                });
                return m;
              };

              return (
                <div key={index}>
                  <Dialog>
                    <DialogTrigger className="w-full">
                      <div
                        className="mt-4 sm:mt-8 h-[10rem] sm:h-[12rem] w-full rounded-xl text-center cursor-pointer"
                        style={{
                          background: `url('${pg.images[0]}') center/cover no-repeat`,
                        }}
                      >
                        <div className="flex flex-col items-center justify-center h-full gap-1 p-2 sm:p-4 bg-black/30">
                          <h2 className="text-white font-medium text-xs sm:text-sm">
                            {pg.tripTimeframe}
                          </h2>
                          <h1 className="text-white font-bold text-sm sm:text-md">
                            {pg.location}
                          </h1>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Package Info</DialogTitle>
                        <DialogDescription>
                          <ScrollArea>
                          <div className="flex flex-col w-full">
                            {/* <img src={pg.images[0]} className="rounded-xl mt-6 h-40 bg-cover" /> */}
                            <div className="rounded-xl mt-6 h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${pg.images[0]})` }}></div>

                            <div>
                              <h1 className="text-white font-medium text-xs sm:text-sm mt-6">
                                {pg.tripTimeframe}
                              </h1>
                              <h1 className="text-white font-bold text-md mt-2 sm:mt-3">
                                {pg.location}
                              </h1>
                              <div className="text-white text-xs sm:text-sm text-start gap-2 sm:gap-4 mt-2 sm:mt-3">
                                {lii.map((li, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center gap-2 mt-1"
                                  >
                                    <Check className="h-4 w-4 rounded-full bg-orange-500 flex items-start justify-center p-1" />
                                    {li}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          </ScrollArea>
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Link
                          href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
                            `Hello!\nI am Interested in this package\n\n${pg.tripTimeframe}\n${pg.location}\n${getmli(
                              lii
                            )}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-2 px-4 text-white text-center font-medium bg-[#FF5209] duration-150 hover:bg-[#101010] active-bg-[#101010] rounded-lg border-2 border-orange-500 shadow-lg hover:shadow-none"
                        >
                          Book Now
                        </Link>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainLinks;

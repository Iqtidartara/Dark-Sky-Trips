import Link from "next/link";
import React from "react";

const Comments = () => {
  const clientData = [
    {
      name: "Najam Sathi",
      role: "Selector, PCB",
      testimonial:
        "Embarking on the adventure of a lifetime with this tourism company was a decision I'll cherish forever. Their meticulous planning, warm hospitality, and extraordinary destinations made every moment unforgettable.",
      image: "Ellipse 12 - Copy.png",
    
    },
    {
      name: "Sara Khan",
      role: "Actor, PK",
      testimonial:
        "Every destination they guided me to felt like a heartfelt embrace. The sights, the sounds, and the people I met – all came together in a symphony of emotions I'll forever carry.",
      image: "Ellipse 12(1).png",
    },
    {
      name: "Mehwish Hayat",
      role: "Actor PK",
      testimonial:
        "Traveling with this tourism company was more than a journey; it was a soulful connection. The places came alive with stories, and the people felt like old friends. An experience that touched my heart.",
      image: "Ellipse 12(2).png",
    },
  ];

  return (
    <section className="bg-[#090808] w-full py-16">
       <div className="max-w-6xl mx-auto  text-gray-400">
      
      <div className="space-y-5 max-w-4xl mx-auto text-center pl-8 pr-8 py-8">
        <h2 className="text-3xl text-[#FF5209] font-extrabold mx-auto md:text-5xl">
          What Our Clients Think <br /> About Us
        </h2>
        <p className="max-w-2xl text-gray-400 mx-auto mt-4">
          Our travelers share their transformative experiences. Discover how our
          journeys touched hearts, ignited souls, and created memories that last
          a lifetime
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center gap-5 items-start pt-10 pb-10 cursor-pointer">
        {clientData.map((client, index) => (
          <div
            key={index}
            className="bg-[#090808] text-white border border-orange-500/25 h-full  p-4 rounded-md"
          >
            <div className="bg-gray flex gap-3 items-start">
              <div>
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <h1 className="text-[15px]">{client.name}</h1>
                <p className="text-[10px] text-gray-400">{client.role}</p>
              </div>
            </div>
            <p className="text-[12px] pt-5 leading-[20px]">
              {client.testimonial}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Comments;

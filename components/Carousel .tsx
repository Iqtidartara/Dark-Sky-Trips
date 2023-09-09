'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"; // Import the CSS module

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
  
    "/img/pexels-aakash-ashraf-1454409.jpg",
    "/img/image 3.png",
    "/img/image 4.png",
    "/img/image 5.png",
    "/img/WhatsApp Image 2023-09-02 at 11.58.31.jpg",
    "/img/image 6.png",
    "/img/image 7.png",
    "/img/image 9.png",
    "/img/pexels-aakash-ashraf-1454409.jpg",
    "/img/pexels-adnan-temur-barcha-12346759.jpg",
    "/img/WhatsApp Image 2023-09-02 at 11.58.31.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="bg-[#090808] w-full py-8 overflow-hidden">
      <div className="space-y-5 max-w-4xl mx-auto text-center pl-8 pr-8 py-16">
        <h2 className="text-3xl text-[#FF5209] font-extrabold mx-auto md:text-5xl mt-8" >
        Discover Pakistan & Gilgit Baltistan<br />{" "}
          <span className="text-transparent bg-clip-text bg-[#ffffff]">
           In New and Unique Way
          </span>
        </h2>
        <p className="max-w-2xl text-gray-400 mx-auto mt-8 mb-10">
        Here are some breathtaking views you will experience on a journey with us.
        </p>
      </div>
      <div className={styles.slider}>
        <div className={styles.track}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === currentIndex ? styles.active : ""
              }`}
            >
              <Image
      className="rounded-lg"
      src={image}
      alt={`Image ${index}`}
      width={600}
      height={600}
         />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;

"use client";
import Image from "next/image";
import img1 from "../../assets/images/youtube.png";
import img2 from "../../assets/images/open-draw.png";
import { useState } from "react";

const Opening = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };
  return (
    <section className="lg:relative font-sanspro lg:mt-0 mt-16">
      <div className=" bg-purple  py-5 ">
        <div className="container lg:px-20 px-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:pl-48">
            <div>
              <div className="text-primaryWine1 text-center">
                <h2 className="py-3 text-lg font-bold">Our Opening Hours</h2>
                <p>Mon - Sat: 07:00 - 18:00</p>
                <p>Only Sun: 09:00 - 14:00</p>
              </div>
            </div>
            <div className="relative before:bg-primaryWine1 before:block before:w-[2px] before:opacity-5 before:h-24">
           
              <div className="text-primaryWine1 text-center absolute inset-0">
                <h2 className="py-3 text-lg font-bold">Our Live Location</h2>
                <p>848 A 28TH ST, Brooklyn</p>
                <p className="text-center">New York, UK</p>
              </div>
            </div>
           
            <div className="relative before:bg-primaryWine1 before:block before:w-[2px] before:opacity-5 before:h-24">
              <div className="text-primaryWine1  absolute inset-0 text-center">
                <h2 className="py-3 text-lg font-bold">Book A Table Now</h2>
                <div className="pl-8">
                  <p>+1 318-254-6849</p>
                  <p>+1 452-754-6579</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute  top-0 lg:px-20 px-5 lg:mx-0 mx-24">
        <div className="bg-primaryWine tex-white relative h-60 w-52 rounded-xl">
          <div className="absolute right-10 top-7">
            <Image src={img2} width={150} height={10} alt="FooterLogo" />
          </div>

          <div className="flex space-x-4 items-center text-white absolute bottom-7 left-4">
            <Image
              src={img1}
              width={40}
              height={10}
              alt="FooterLogo"
              onClick={toggleVideo}
              className="cursor-pointer "
            />
            {showVideo && (
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/JeXsKCySpGI?si=BRW3Log5MJhaW7XK"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <button onClick={toggleVideo}>Close Video</button>
              </div>
            )}
            <p>Play Intro Video</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opening;

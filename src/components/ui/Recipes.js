/* eslint-disable react/no-unescaped-entities */
"use client";
import img1 from "../../assets/images/recepi1.png";
import img2 from "../../assets/images/recepi2.png";
import img3 from "../../assets/images/recepi3.png";

import Image from "next/image";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const Recipes = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const breakpoints = {
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    786: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  };
  //for slide
  const handlePrevClick = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

 
  return (
    <section className="bg-purple py-12 lg:my-16 my-5 font-sanspro text-primaryWine1">
      <div className="container lg:pl-20 ">
        <div className="lg:grid lg:grid-cols-2">
          <div className="lg:pr-32 lg:px-0 px-10 lg:pb-0 pb-10">
            <div className="relative before:bg-primaryWine before:block before:w-[50px]  before:h-[2px] ">
              <h5 className="absolute left-16 top-[-10px] font-lemonada text-primaryWine ">
                New Recipes
              </h5>
            </div>
            <Swiper
              // breakpoints={breakpoints}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <h2 className="lg:text-4xl text-3xl font-baklida py-6 ">
                    Taste Our New Recipe
                  </h2>
                  <p className="font-sanspro">
                    Malesuada cursus a tincidunt volutpat posuere lacinia.
                    Congue malesuada lacus pharetra ut vel amet. Amet turpis
                    suspendisse porttitor scelerisque amet dolor et. Nisi ac
                    vitae tortor lacinirisus. Scelerisque nibh elit malesuada
                    sodales eget iaculis nunc erat. Donec quis fermentum mattis
                    aliquet gravida. Adipiscing eu sit ornare imperdiet viverra
                    sit vel.
                  </p>
                  <p className="font-sanspro pt-5">
                    There are many variations of passages of Lorem Ipsum form
                    any injected humour, or randomised words which don't look
                    slightly believable.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className="lg:text-4xl text-3xl font-baklida py-5">
                    Taste Our New Recipe
                  </h2>
                  <p className="font-sanspro">
                    Malesuada cursus a tincidunt volutpat posuere lacinia.
                    Congue malesuada lacus pharetra ut vel amet. Amet turpis
                    suspendisse porttitor scelerisque amet dolor et. Nisi ac
                    vitae tortor lacinirisus. Scelerisque nibh elit malesuada
                    sodales eget iaculis nunc erat. Donec quis fermentum mattis
                    aliquet gravida. Adipiscing eu sit ornare imperdiet viverra
                    sit vel.
                  </p>
                  <p className="font-sanspro pt-5">
                    There are many variations of passages of Lorem Ipsum form
                    any injected humour, or randomised words which don't look
                    slightly believable.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className="lg:text-4xl text-3xl font-baklida py-5">
                    Taste Our New Recipe
                  </h2>
                  <p className="font-sanspro">
                    Malesuada cursus a tincidunt volutpat posuere lacinia.
                    Congue malesuada lacus pharetra ut vel amet. Amet turpis
                    suspendisse porttitor scelerisque amet dolor et. Nisi ac
                    vitae tortor lacinirisus. Scelerisque nibh elit malesuada
                    sodales eget iaculis nunc erat. Donec quis fermentum mattis
                    aliquet gravida. Adipiscing eu sit ornare imperdiet viverra
                    sit vel.
                  </p>
                  <p className="font-sanspro pt-5">
                    There are many variations of passages of Lorem Ipsum form
                    any injected humour, or randomised words which don't look
                    slightly believable.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className="lg:text-4xl text-3xl font-baklida py-5">
                    Taste Our New Recipe
                  </h2>
                  <p className="font-sanspro">
                    Malesuada cursus a tincidunt volutpat posuere lacinia.
                    Congue malesuada lacus pharetra ut vel amet. Amet turpis
                    suspendisse porttitor scelerisque amet dolor et. Nisi ac
                    vitae tortor lacinirisus. Scelerisque nibh elit malesuada
                    sodales eget iaculis nunc erat. Donec quis fermentum mattis
                    aliquet gravida. Adipiscing eu sit ornare imperdiet viverra
                    sit vel.
                  </p>
                  <p className="font-sanspro pt-5">
                    There are many variations of passages of Lorem Ipsum form
                    any injected humour, or randomised words which don't look
                    slightly believable.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className="lg:text-4xl text-3xl font-baklida py-5">
                    Taste Our New Recipe
                  </h2>
                  <p className="font-sanspro">
                    Malesuada cursus a tincidunt volutpat posuere lacinia.
                    Congue malesuada lacus pharetra ut vel amet. Amet turpis
                    suspendisse porttitor scelerisque amet dolor et. Nisi ac
                    vitae tortor lacinirisus. Scelerisque nibh elit malesuada
                    sodales eget iaculis nunc erat. Donec quis fermentum mattis
                    aliquet gravida. Adipiscing eu sit ornare imperdiet viverra
                    sit vel.
                  </p>
                  <p className="font-sanspro pt-5">
                    There are many variations of passages of Lorem Ipsum form
                    any injected humour, or randomised words which don't look
                    slightly believable.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2 className="lg:text-4xl text-3xl font-baklida py-5">
                    Taste Our New Recipe
                  </h2>
                  <p className="font-sanspro">
                    Malesuada cursus a tincidunt volutpat posuere lacinia.
                    Congue malesuada lacus pharetra ut vel amet. Amet turpis
                    suspendisse porttitor scelerisque amet dolor et. Nisi ac
                    vitae tortor lacinirisus. Scelerisque nibh elit malesuada
                    sodales eget iaculis nunc erat. Donec quis fermentum mattis
                    aliquet gravida. Adipiscing eu sit ornare imperdiet viverra
                    sit vel.
                  </p>
                  <p className="font-sanspro pt-5">
                    There are many variations of passages of Lorem Ipsum form
                    any injected humour, or randomised words which don't look
                    slightly believable.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* slider btn */}
            <div className="flex items-center text-2xl justify-start mt-7">
              <div className="">
                <button onClick={handlePrevClick} className=" border border-primaryWine1 rounded-full p-1">
                  <IoArrowBackOutline />
                </button>
                <button onClick={handleNextClick} className="border border-primaryWine1 rounded-full p-1 ml-5">
                  <IoArrowForward />
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 lg:ml-[-60px]">
            <div className="group cursor-pointer rounded-xl relative group overflow-hidden  ">
            <div
                class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
            >
                <div>
                    <div
                        class="transform-gpu    text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out"
                    >
                        

                        <div class=" text-sm font-sanspro ">
                           <ul>
                            <li>Pita bread or wraps </li>
                            <li>
                            Toppings: tomatoes, tahini sauce, etc.
                            </li>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
              <Image
                src={img1}
                width={300}
                height={10}
                alt="FooterLogo"
                className="h-[320px]  object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
            <div className="">
              <Image
                src={img2}
                width={500}
                height={10}
                alt="FooterLogo"
                className="h-[320px] w-full"
              />
            </div>
            <div className="">
              <Image
                src={img3}
                width={300}
                height={10}
                alt="FooterLogo"
                className="h-[320px] w-full"
              />
            </div>

        

          
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Recipes;

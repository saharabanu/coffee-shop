"use client";
import Image from "next/image";
import banner from "../../assets/images/banner.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <section className="bg-banner-bg  bg-no-repeat bg-cover bg-center py-16 ">
      <div className="lg:px-20 px-5">
        <div className="lg:flex justify-between items-center ">
          <Swiper
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="w-full"
          >
            <SwiperSlide>
              {" "}
              <div>
                <h5 className="banner-heading1 font-lemon">WELCOME TO OUR</h5>
                <h1 className="banner-heading2 font-sanspro  font-bold py-4 text-6xl">
                  Unlocklive
                </h1>
                <h2 className="banner-heading2 font-sanspro text-3xl py-2">
                  Elevating Your Coffee Experience
                </h2>
                <p className=" ">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a <br /> refined and memorable
                  journey. At Epicurean, we take pride in curating an
                  exceptional coffee experience that transcends the ordinary.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <h5 className="banner-heading1 font-lemon">WELCOME TO OUR</h5>
                <h1 className="banner-heading2 font-sanspro  font-bold py-4 text-6xl">
                  Unlocklive
                </h1>
                <h2 className="banner-heading2 font-sanspro text-3xl py-2">
                  Elevating Your Coffee Experience
                </h2>
                <p className=" ">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a <br /> refined and memorable
                  journey. At Epicurean, we take pride in curating an
                  exceptional coffee experience that transcends the ordinary.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <h5 className="banner-heading1 font-lemon">WELCOME TO OUR</h5>
                <h1 className="banner-heading2 font-sanspro  font-bold py-4 text-6xl">
                  Unlocklive
                </h1>
                <h2 className="banner-heading2 font-sanspro text-3xl py-2">
                  Elevating Your Coffee Experience
                </h2>
                <p className=" ">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a <br /> refined and memorable
                  journey. At Epicurean, we take pride in curating an
                  exceptional coffee experience that transcends the ordinary.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <h5 className="banner-heading1 font-lemon">WELCOME TO OUR</h5>
                <h1 className="banner-heading2 font-sanspro  font-bold py-4 text-6xl">
                  Unlocklive
                </h1>
                <h2 className="banner-heading2 font-sanspro text-3xl py-2">
                  Elevating Your Coffee Experience
                </h2>
                <p className=" ">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a <br /> refined and memorable
                  journey. At Epicurean, we take pride in curating an
                  exceptional coffee experience that transcends the ordinary.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <h5 className="banner-heading1 font-lemon">WELCOME TO OUR</h5>
                <h1 className="banner-heading2 font-sanspro  font-bold py-4 text-6xl">
                  Unlocklive
                </h1>
                <h2 className="banner-heading2 font-sanspro text-3xl py-2">
                  Elevating Your Coffee Experience
                </h2>
                <p className=" ">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a <br /> refined and memorable
                  journey. At Epicurean, we take pride in curating an
                  exceptional coffee experience that transcends the ordinary.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <h5 className="banner-heading1 font-lemon">WELCOME TO OUR</h5>
                <h1 className="banner-heading2 font-sanspro  font-bold py-4 text-6xl">
                  Unlocklive
                </h1>
                <h2 className="banner-heading2 font-sanspro text-3xl py-2">
                  Elevating Your Coffee Experience
                </h2>
                <p className=" ">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a <br /> refined and memorable
                  journey. At Epicurean, we take pride in curating an
                  exceptional coffee experience that transcends the ordinary.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>

          <div>
            <Image src={banner} width={650} height={10} alt="bannerLogo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

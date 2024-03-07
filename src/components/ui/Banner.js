"use client";
import Image from "next/image";
import banner from "../../assets/images/banner.png";

import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../assets/images/coffee-1.png'
import img2 from '../../assets/images/coffee-2.png'
import img3 from '../../assets/images/coffee-3.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Banner = () => {

  const breakpoints = {
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    786: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  };
  return (
    <section className="bg-banner-bg  bg-no-repeat bg-cover bg-center py-16  lg:h-[600px] h-[550px]">
      <div className="lg:px-20 px-5">
        {/* <div className="lg:flex justify-between items-center "> */}
          <Swiper
            // breakpoints={breakpoints}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className=""
          >
            <SwiperSlide>
              {" "}
              <div className="flex justify-between items-center ">
              <div>
                <h5 className="font-lemonada font-semibold">WELCOME TO OUR</h5>
                <h1 className=" font-baklida   py-4 text-6xl">
                  Unlocklive
                </h1>
                <h2 className="banner-heading2 font-baklida text-3xl pt-2 pb-4">
                  Elevating Your Coffee Experience
                </h2>
                <p className="text-primaryWine1 font-sanspro ">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a  refined and memorable
                  journey. At Epicurean, we take pride in curating an
                  exceptional coffee experience that transcends the ordinary.
                </p>

                <div className="lg:flex flex-wrap items-center space-x-10 pt-7 space-y-2 pb-4 ">
                   <div className="cursor-pointer">
                    <button className="bg-primaryWine text-white border-0 px-5  lg:text-base  py-3 hover:text-primaryWine rounded-xl  outline-none transition ease-in-out delay-150  hover:bg-transparent cursor-pointer  hover:border hover:border-primaryWine duration-300">
                    EXPLORE OUR MENU
                    </button>
                   </div>
                   <div className="flex">
                   <Image src={img1} width={50} height={10} alt='FooterLogo' className=""/>
                   <Image src={img2} width={50} height={10} alt='FooterLogo' className="ml-[-15px]"/>
                   <Image src={img3} width={50} height={10} alt='FooterLogo' className="ml-[-15px]"/>
                   </div>
                   <div>
                    <h2 className="font-semibold text-2xl font-abril">1200+</h2>
                    <p className="text-primaryWine1">Tasty Variant Coffee</p>
                   </div>
                </div>
              </div>
              <div>
            <Image src={banner} width={1100} height={70} alt="bannerLogo"className="hidden lg:block md:block w-[1500px]"/>
          </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="flex justify-between items-center ">
              <div>
                <h5 className="font-lemonada font-semibold">WELCOME TO OUR</h5>
                <h1 className=" font-baklida   py-4 text-6xl">
                  Unlocklive
                </h1>
                <h2 className="banner-heading2 font-baklida text-3xl pt-2 pb-4">
                  Elevating Your Coffee Experience
                </h2>
                <p className="text-primaryWine1 font-sanspro ">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a  refined and memorable
                  journey. At Epicurean, we take pride in curating an
                  exceptional coffee experience that transcends the ordinary.
                </p>

                <div className="lg:flex flex-wrap items-center space-x-10 pt-7 space-y-2 pb-4 ">
                   <div className="cursor-pointer">
                    <button className="bg-primaryWine text-white border-0 px-5  lg:text-base  py-3 hover:text-primaryWine rounded-xl  outline-none transition ease-in-out delay-150  hover:bg-transparent cursor-pointer  hover:border hover:border-primaryWine duration-300">
                    EXPLORE OUR MENU
                    </button>
                   </div>
                   <div className="flex">
                   <Image src={img1} width={50} height={10} alt='FooterLogo' className=""/>
                   <Image src={img2} width={50} height={10} alt='FooterLogo' className="ml-[-15px]"/>
                   <Image src={img3} width={50} height={10} alt='FooterLogo' className="ml-[-15px]"/>
                   </div>
                   <div>
                    <h2 className="font-semibold text-2xl font-abril">1200+</h2>
                    <p className="text-primaryWine1">Tasty Variant Coffee</p>
                   </div>
                </div>
              </div>
              <div>
            <Image src={banner} width={1100} height={70} alt="bannerLogo"className="hidden lg:block md:block w-[1500px]"/>
          </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="flex justify-between items-center ">
              <div>
                <h5 className="font-lemonada font-semibold">WELCOME TO OUR</h5>
                <h1 className=" font-baklida   py-4 text-6xl">
                  Unlocklive
                </h1>
                <h2 className="banner-heading2 font-baklida text-3xl pt-2 pb-4">
                  Elevating Your Coffee Experience
                </h2>
                <p className="text-primaryWine1 font-sanspro ">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a  refined and memorable
                  journey. At Epicurean, we take pride in curating an
                  exceptional coffee experience that transcends the ordinary.
                </p>

                <div className="lg:flex flex-wrap items-center space-x-10 pt-7 space-y-2 pb-4 ">
                   <div className="cursor-pointer">
                    <button className="bg-primaryWine text-white border-0 px-5  lg:text-base  py-3 hover:text-primaryWine rounded-xl  outline-none transition ease-in-out delay-150  hover:bg-transparent cursor-pointer  hover:border hover:border-primaryWine duration-300">
                    EXPLORE OUR MENU
                    </button>
                   </div>
                   <div className="flex">
                   <Image src={img1} width={50} height={10} alt='FooterLogo' className=""/>
                   <Image src={img2} width={50} height={10} alt='FooterLogo' className="ml-[-15px]"/>
                   <Image src={img3} width={50} height={10} alt='FooterLogo' className="ml-[-15px]"/>
                   </div>
                   <div>
                    <h2 className="font-semibold text-2xl font-abril">1200+</h2>
                    <p className="text-primaryWine1">Tasty Variant Coffee</p>
                   </div>
                </div>
              </div>
              <div>
            <Image src={banner} width={1100} height={70} alt="bannerLogo"className="hidden lg:block md:block w-[1500px]"/>
          </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="flex justify-between items-center ">
              <div>
                <h5 className="font-lemonada font-semibold">WELCOME TO OUR</h5>
                <h1 className=" font-baklida   py-4 text-6xl">
                  Unlocklive
                </h1>
                <h2 className="banner-heading2 font-baklida text-3xl pt-2 pb-4">
                  Elevating Your Coffee Experience
                </h2>
                <p className="text-primaryWine1 font-sanspro ">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a  refined and memorable
                  journey. At Epicurean, we take pride in curating an
                  exceptional coffee experience that transcends the ordinary.
                </p>

                <div className="lg:flex flex-wrap items-center space-x-10 pt-7 space-y-2 pb-4 ">
                   <div className="cursor-pointer">
                    <button className="bg-primaryWine text-white border-0 px-5  lg:text-base  py-3 hover:text-primaryWine rounded-xl  outline-none transition ease-in-out delay-150  hover:bg-transparent cursor-pointer  hover:border hover:border-primaryWine duration-300">
                    EXPLORE OUR MENU
                    </button>
                   </div>
                   <div className="flex">
                   <Image src={img1} width={50} height={10} alt='FooterLogo' className=""/>
                   <Image src={img2} width={50} height={10} alt='FooterLogo' className="ml-[-15px]"/>
                   <Image src={img3} width={50} height={10} alt='FooterLogo' className="ml-[-15px]"/>
                   </div>
                   <div>
                    <h2 className="font-semibold text-2xl font-abril">1200+</h2>
                    <p className="text-primaryWine1">Tasty Variant Coffee</p>
                   </div>
                </div>
              </div>
              <div>
            <Image src={banner} width={1100} height={70} alt="bannerLogo"className="hidden lg:block md:block w-[1500px]"/>
          </div>
        </div>
            </SwiperSlide>
            
            
           
           
           
          </Swiper>

          {/* <div>
            <Image src={banner} width={1100} height={70} alt="bannerLogo"className=""/>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Banner;

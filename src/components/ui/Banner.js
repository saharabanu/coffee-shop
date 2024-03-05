"use client";
import Image from "next/image";
import banner from "../../assets/images/banner.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../assets/images/coffee-1.png'
import img2 from '../../assets/images/coffee-2.png'
import img3 from '../../assets/images/coffee-3.png'

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
                <p className="text-primaryWine1 ">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a <br /> refined and memorable
                  journey. At Epicurean, we take pride in curating an
                  exceptional coffee experience that transcends the ordinary.
                </p>

                <div className="flex items-center space-x-5 pt-5">
                   <div>
                    <button className="bg-primaryWine text-white border-0 lg:px-5 lg:py-3 rounded-xl  outline-none">
                    EXPLORE OUR MENU
                    </button>
                   </div>
                   <div className="flex">
                   <Image src={img1} width={50} height={10} alt='FooterLogo' className=""/>
                   <Image src={img2} width={50} height={10} alt='FooterLogo' className="ml-[-15px]"/>
                   <Image src={img3} width={50} height={10} alt='FooterLogo' className="ml-[-15px]"/>
                   </div>
                   <div>
                    <h2 className="font-bold text-2xl">1200+</h2>
                    <p className="text-primaryWine1">Tasty Variant Coffee</p>
                   </div>
                </div>
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
                <p className="text-primaryWine1 ">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a <br /> refined and memorable
                  journey. At Epicurean, we take pride in curating an
                  exceptional coffee experience that transcends the ordinary.
                </p>

                <div className="flex items-center space-x-5 pt-5">
                   <div>
                    <button className="bg-primaryWine text-white border-0 px-5 py-3 rounded-xl outline-none">
                    EXPLORE OUR MENU
                    </button>
                   </div>
                   <div className="flex">
                   <Image src={img1} width={50} height={10} alt='FooterLogo' className=""/>
                   <Image src={img2} width={50} height={10} alt='FooterLogo' className="ml-[-15px]"/>
                   <Image src={img3} width={50} height={10} alt='FooterLogo' className="ml-[-15px]"/>
                   </div>
                   <div>
                    <h2 className="font-bold text-2xl">1200+</h2>
                    <p className="text-primaryWine1">Tasty Variant Coffee</p>
                   </div>
                </div>
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

'use client'
import logo from "../../assets/images/header-logo.png";
import icon from "../../assets/images/people-icon.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="pt-1">
      <div className="container">
        <div className=" lg:px-20 px-5 font-bold ">
          <div className="hidden lg:grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 sm:c gap-4 items-center text-lg ">
            <div>
              <ul className="flex items-center space-x-6 ">
                <li className="hover:font-bold transition-all duration-300 delay-300">
                  <Link href="/">Home</Link>
                </li>
               
                <li
                  className="hover:font-bold transition-all duration-300 delay-300 relative"
                  onMouseEnter={() => toggleMenu()} 
                  onMouseLeave={() => toggleMenu()} 
                >
                  <div className="flex  items-center cursor-pointer">
                  Pages{" "}
                    <span className="pl-1">
                      <MdKeyboardArrowDown />
                    </span>
                  </div>
                  {isMenuOpen && ( 
                    <ul className="absolute top-full left-0 mt-1 bg-white shadow-lg py-1 px-5  w-28 rounded">
                      <li>
                        <Link href="/">Page 1</Link>
                      </li>
                      <li>
                        <Link href="/">Page 2</Link>
                      </li>
                      <li>
                        <Link href="/">Page 3</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className="hover:font-bold transition-all duration-300 delay-300 relative"
                  onMouseEnter={() => toggleMenu()} 
                  onMouseLeave={() => toggleMenu()} 
                >
                  <div className="flex  items-center cursor-pointer">
                    Menu{" "}
                    <span className="pl-1">
                      <MdKeyboardArrowDown />
                    </span>
                  </div>
                  {isMenuOpen && ( 
                    <ul className="absolute top-full left-0 mt-1 bg-white shadow-lg py-1 px-5  w-28 rounded">
                      <li>
                        <Link href="/">Menu 1</Link>
                      </li>
                      <li>
                        <Link href="/">Menu 2</Link>
                      </li>
                      <li>
                        <Link href="/">Menu 3</Link>
                      </li>
                    </ul>
                  )}
                </li>
                
               
                <li className="hover:font-bold transition-all duration-300 delay-300">
                  <Link href="/">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="flex">
              <Image src={logo} width={150} height={10} alt="FooterLogo" />
            </div>
            <div className=" flex justify-between items-center">
              <ul className="flex items-center space-x-2">
                <li className="border rounded-full border-white flex justify-center items-center p-2 transition-all duration-300 delay-300 hover:text-red-200 text-xl ">
                  <Link href="/" className="">
                    <span >
                      {" "}
                      <GoSearch  fontSize={25}/>{" "}
                    </span>
                  </Link>
                </li>
                <li className="border rounded-full border-white flex justify-center items-center p-2 transition-all duration-300 delay-300 hover:text-red-200">
                  <Link href="/">
                    <span className="relative">
                      <AiOutlineHeart fontSize={25} className="z-10"/>
                      <sup className="bg-black p-[6px] w-4 h-4 text-center text-white rounded-full absolute right-[-7px]  top-[-2px]">4</sup>
                    </span>
                  </Link>
                </li>
                <li className="border rounded-full border-white flex justify-center items-center p-2 transition-all duration-300 delay-300 hover:text-red-200">
                  <Link href="/">
                    <span className="relative ">
                      <AiOutlineShoppingCart fontSize={25} className="z-10"/>{" "}
                      <sup className="bg-black p-[6px] w-4 h-4 text-center text-white rounded-full absolute right-[-7px]  top-[-2px]">4</sup>
                    </span>
                  </Link>
                </li>
              </ul>
              <ul className="flex items-center space-x-2">
                <li className="border rounded-full border-white flex justify-center items-center p-2 transition-all duration-300 delay-300 hover:text-red-200">
                  <Link href="/" className="">
                    <span>
                      {" "}
                      <Image
                        src={icon}
                        width={30}
                        height={10}
                        alt="Logo"
                        className="text-center"
                      />
                    </span>
                  </Link>
                </li>
                <li className="border rounded-full border-white flex justify-center items-center p-2 hover:font-bold transition-all duration-300 delay-300">
                  <Link href="/" className="">
                    <span>Sign In</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveNavbar />
      <hr />
    </header>
  );
};

export default Navbar;

"use client";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/header-logo.png";
import icon from "../../assets/images/people-icon.png";
import { MdMenu } from "react-icons/md";

const ResponsiveNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);
  const [isMenuMenuOpen, setIsMenuMenuOpen] = useState(false);

  const togglePagesMenu = () => {
    setIsPagesMenuOpen(!isPagesMenuOpen);
  };

  const toggleMenuMenu = () => {
    setIsMenuMenuOpen(!isMenuMenuOpen);
  };

  return (
    <header>
      <div className="container font-sanspro ">
        <div className=" ">
          <div className="">
            <div className="flex justify-between items-center lg:hidden py-4  px-5">
              <Image src={logo} width={150} height={50} alt="Logo" />

              <span
                className="cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              >
                <MdMenu />
              </span>
            </div>
          </div>
          {showMenu && (<>
            <ul className="lg:hidden flex flex-col items-center mt-4 space-y-2 ">
                <li className="hover:text-primaryWine transition-all duration-300 delay-300 cursor-pointer">
                  <Link href="/">Home</Link>
                </li>
               
                <li
                  className="hover:text-primaryWine transition-all duration-300 delay-300 relative cursor-pointer"
                  onMouseEnter={() => togglePagesMenu()} 
                  onMouseLeave={() => togglePagesMenu()} 
                >
                  <div className="flex  items-center cursor-pointer">
                  Pages{" "}
                    <span className="pl-1">
                      <MdKeyboardArrowDown />
                    </span>
                  </div>
                  {isPagesMenuOpen && ( 
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
                  className="hover:text-primaryWine transition-all duration-300 delay-300 relative"
                  onMouseEnter={() => toggleMenuMenu()} 
                  onMouseLeave={() => toggleMenuMenu()} 
                >
                  <div className="flex  items-center cursor-pointer">
                    Menu{" "}
                    <span className="pl-1">
                      <MdKeyboardArrowDown />
                    </span>
                  </div>
                  {isMenuMenuOpen && ( 
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
                
               
                <li className="hover:text-primaryWine transition-all duration-300 delay-300 cursor-pointer">
                  <Link href="/">Contact Us</Link>
                </li>
              </ul>
            {/* <ul className="lg:hidden flex flex-col items-center mt-4 space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Pages</Link>
              </li>
              <li>
                <Link href="/">Menu</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul> */}
            <div className="flex justify-center items-center">
            <div className=" ">
              <ul className="flex items-center space-x-2">
                <li className="border rounded-full border-white flex justify-center items-center p-2 transition-all duration-300 delay-300 hover:text-red-200">
                  <Link href="/" className="">
                    <span>
                      {" "}
                      <GoSearch />{" "}
                    </span>
                  </Link>
                </li>
                <li className="border rounded-full border-white flex justify-center items-center p-2 transition-all duration-300 delay-300 hover:text-red-200">
                  <Link href="/">
                    <span>
                      <AiOutlineHeart />
                    </span>
                  </Link>
                </li>
                <li className="border rounded-full border-white flex justify-center items-center p-2 transition-all duration-300 delay-300 hover:text-red-200">
                  <Link href="/">
                    <span>
                      <AiOutlineShoppingCart />{" "}
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
                <li className="border rounded-full border-white flex justify-center items-center p-2 transition-all duration-300 delay-300 hover:text-red-200">
                  <Link href="/">
                    <span>Sign In</span>
                  </Link>
                </li>
              </ul>
            </div>
            </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default ResponsiveNavbar;

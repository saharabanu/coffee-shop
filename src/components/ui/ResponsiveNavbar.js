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

  return (
    <header>
      <div className="container">
        <div className=" ">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 sm:c gap-4 items-center">
            <div className="flex justify-between items-center lg:hidden">
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
            <ul className="lg:hidden flex flex-col items-center mt-4 space-y-2">
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
            </ul>
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

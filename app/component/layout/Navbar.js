"use client"
import Link from "next/link";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { SlMenu } from "react-icons/sl";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "home" },
    { name: "Service", link: "service" },
    { name: "About Us", link: "about" },
    { name: "Gallery", link: "gallery" },
    { name: "Contact Us", link: "contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollAndCloseMenu = (id) => {
    toggleMenu();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      scroll.scrollTo(offsetPosition, {
        duration: 500,
        smooth: true,
      });
    }
  };

  return (
    <div className="brand-container  px-5">
      <div className="shadow-md w-full fixed z-10 top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-6 md:px-10 px-7">
          <div className="flex gap-2 cursor-pointer">
            <Link href="/">
              <h1 className="text-2xl font-bold">91 Dogs</h1>
            </Link>
          </div>
          <div
            onClick={toggleMenu}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {isOpen ? <GrClose size={20} /> : <SlMenu size={20} />}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static font-work-sans bg-white gap-[2rem] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in px-5 ${
              isOpen ? "top-12" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 md:my-0 my-7 relative font-work-sans text-[18px] font-bold hover:text-[20px] cursor-pointer"
                onClick={() => scrollAndCloseMenu(link.link)}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsInstagram, BsLinkedin, BsYoutube, BsWhatsapp } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Footer() {
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
    <div className="bg-black">
      <footer className="brand-container pt-10 px-5">
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-y-5 justify-between items-start pb-5">
          {/* text  */}
          <div className="text-white  flex flex-col ">
            <Link href="/">
              <h1 className="text-2xl font-bold cursor-pointer">91 Dogs</h1>
            </Link>
          </div>
          {/* link */}
          <div className="flex flex-col gap-5">
            <h1 className="text-white text-[18px]">Quick Links</h1>
            <div className="flex flex-col gap-6">
              <Link href="/privacy-policy">
                <p className="text-[#6b7280] text-[14px] cursor-pointer font-semibold  hover:text-white ">
                  Privacy Policy
                </p>{" "}
              </Link>
              <Link href="/terms-&-condition">
                <p className="text-[#6b7280] text-[14px] cursor-pointer font-semibold  hover:text-white  ">
                  Terms & Conditions
                </p>
              </Link>
            </div>
          </div>
          {/* email section */}
          <div className="flex flex-col gap-5">
            <h1 className="text-white text-[18px] cursor-pointer">Link</h1>
            <div className="flex flex-col gap-6">
              {Links.map((link) => (
                <p
                  key={link.name}
                  className="text-[#6b7280] text-[14px] cursor-pointer font-semibold  hover:text-white"
                  onClick={() => scrollAndCloseMenu(link.link)}
                >
                  {link.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col h-full justify-between items-center gap-5 ">
            <p className="text-[18px] text-[#ffffff] font-bold ">
              Join Our Newsletter
            </p>
            <form className="flex">
              <input
                type="email"
                name="email"
                placeholder="Email"
                class="xl:w-[300px] h-[47px]  text-[15px] bg-white pl-4 text-black border-b border-black focus:outline-none"
                required
              />
              <button class="w-[87px] h-[47px] text-[15px] bg-[red] text-white focus:outline-none p-2">
                Submit
              </button>
            </form>

            <div className="flex gap-5 justify-center ">
              <p className=" text-[#6b7280] cursor-pointer hover:text-primary rounded-md">
                <a href=" " target="_blank">
                  <BsInstagram size={25} />
                </a>
              </p>
              <p className=" text-[#6b7280] cursor-pointer hover:text-primary rounded-md">
                <a href=" " target="_blank">
                  <RiTwitterXLine size={25} />
                </a>
              </p>
              <p className=" text-[#6b7280] cursor-pointer hover:text-primary rounded-md">
                <a href="" target="_blank">
                  <BsLinkedin size={25} />
                </a>
              </p>
              <p className=" text-[#6b7280] cursor-pointer hover:text-primary rounded-md">
                <a href="" target="_blank">
                  <BsYoutube size={25} />
                </a>
              </p>
              <p className=" text-[#6b7280] cursor-pointer hover:text-primary rounded-md">
                <a href="" target="_blank">
                  <BsWhatsapp size={25} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client"
import Image from "next/image";
import React from "react";
import { PiDogFill } from "react-icons/pi";

const About = () => {
  return (
    <div className="" id="about">
      <div className="brand-container py-16">
        <div className="">
          {/* title */}
          <div className="flex  item-center  gap-3">
            <h1 className="text-black font-bold text-[40px] ">About Us</h1>
            <p>
              <PiDogFill size={40} />
            </p>
          </div>
          <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col justify-between items-center">
            {/* left */}
            <div className="flex flex-col gap-4 xl:w-1/2 lg:w-1/2 md:w-full w-full  ">
              <h1 className="text-2xl ">About Pet</h1>
              <p>
                The way people define medium-size dogs can vary. Some
                organizations break down dog sizes into detailed groups,
                including extra-small, small, small-medium, medium,
                medium-large, large, extra-large, and giant. But, in general,
                small dog breeds tend to go up to about 20 pounds, and large dog
                breeds begin around 60 pounds. So anything in the middle could
                be considered a medium-sized dog. Because of this wide weight
                range—20 to 60 pounds—medium-size dogs make up a large portion
                of the breeds in existence.
              </p>
              <h1>1. American Staffordshire Terrier</h1>
              <p>
                American Staffordshire terriers are on the larger side for
                medium-size dogs, with female Am Staffs typically being slightly
                smaller than the males. They often appear even larger than they
                actually are due to their muscular bodies and broad heads. These
                dogs tend to be highly affectionate and energetic, and they make
                wonderful companions for active households.
              </p>
              <h1>2. Australian Cattle Dog</h1>
              <p>
                The Australian cattle dog is an active and intelligent dog breed
                that is right in the middle of the medium-size category. This
                compact and athletic dog is driven to work. The breed is
                generally curious, alert, and loyal, and it needs something to
                challenge its mind every day.
              </p>
              <h1>3. Australian Shepherd</h1>
              <p>
                The Australian shepherd is a very intelligent, high-energy,
                medium-size dog breed. This herding breed also is quite agile
                and athletic and therefore well-suited to dog sports, such as
                flying disc and agility. Plus, Aussies tend to be loyal and
                friendly dogs that make great companions. But they do need an
                outlet for their high mental and physical energy.
              </p>
              <p className="text-lg text-[red]">Read more....</p>
            </div>
            {/* right */}
            <div className="flex flex-col justify-center items-center py-10 px-5 xl:w-1/2 lg:w-1/2 md:w-full w-full ">
              <Image src={"/assest/training.webp"} width={500} height={500} />
              <Image src={"/assest/training1.webp"} width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

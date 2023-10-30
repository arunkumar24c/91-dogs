"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsStarHalf, BsStarFill } from "react-icons/bs";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Image from "next/image";

const data = [
  {
    name: "CHARLIE",
    Founder: "~Leslie",
    content:
      "Sometimes the challenges we face with our pets may seem overwhelming.  Sometimes we feel helpless and hopeless.  This was my situation with my beloved Charlie… until I found Texas Veterinary Behavior Services. Charlie was a basket case and my family was powerless to help him find peace.  Charlie had a host of problems. He ripped our clothes off our bodies, barked, growled and lunged at other dogs on walks, self-mutilated when stressed, and even hallucinated frequently. He was certifiably a nutcase!",
      url: "/assest/img1.webp"
  },
  {
    name: "VIKTOR",
    Founder: "~Beverly and Tim",
    content:
      "My Doberman, Viktor was born 1/5/2012. I brought him home at about 10 weeks old. I prepared as much as I could. I read all of the books, watched many videos, received advice from different trainers and vets in advance on what to expect with a new puppy and felt I was ready! As soon as he was old enough and all of his shots completed we enrolled in puppy training. Once that was completed we immediately started obedience classes. Later on, we started rally, but unfortunately we did not get to complete that due to his sudden change in behavior.",
      url: "/assest/img2.webp"
  },

  {
    name: "FRANCIS",
    Founder: "~Lawrence",
    content:
      "Francis, my 135 pound mastiff was out of control.  Francis was hostile to strangers, and even hostile to close family members.  I could barely take him to the vet for check ups.Thanks to Dr. Haug, Francis is like a new dog.  He is calmer, more friendly, and happier.  The training Dr. Haug does is positive and Francis enjoys it.I have had several dogs and worked with a half dozen skilled dog trainers in obedience, agility, and schutzhund.  I have never worked with anyone as resourceful as Dr. Haug.  Her understanding of dogs is unmatched.  She is truly one of the best veterinary behavior specialists in the world.",
      url: "/assest/img3.webp"
  },
  {
    name: "OPPIE AND JACK",
    Founder: "~Paula and Gus",
    content:
      "We have been working with Dr. Haug for 8 months, and I am so thrilled with the improvements in our household. We have three rescue dogs – two males and one female. Eight months ago my two male dogs began fighting with each other whenever I was in the same room with them. I could not sit down in a chair or be in the same room without them fighting over me, and I would end up getting hurt. My husband was ready to get rid of our littlest male (Oppie) whom has always been a little quirky. Oppie was always territorial with me and would growl and snap if you touched him wrong. We had learned to live with that. ",
      url: "/assest/img4.webp"
  },
  
];

const Testimonial = () => {
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative container mx-auto py-16 mt-10">
      <p className="font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center mb-3">
        Testimonials From Our Clients With Dogs
      </p>

      {/* <p className="text-md font-bold py-5 text-[#1a1757] text-center font-work-sans">
        Community development is often linked with community <br /> work or
        community planning, and may involve stakeholders, foundations,
      </p> */}
      <Slider ref={slider} {...settings}>
        {data.map((values, index) => (
          <div className="mx-1" key={index}>
            <PopularDestinationCard {...values} />
          </div>
        ))}
      </Slider>
      <div className="flex flex-row-reverse justify-center gap-3 py-5">
        <span className="border-2 border-white flex flex-row-reverse gap-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <ArrowPrev
            Handler={() => {
              slider?.current?.slickPrev();
            }}
          />
          <ArrowNext
            Handler={() => {
              slider?.current?.slickNext();
            }}
          />
        </span>
      </div>
    </div>
  );
};

const PopularDestinationCard = (props) => {
  return (
    <div>
      <div className="m-2 py-5 px-5 flex flex-col gap-y-2 shadow-md border-2 bg-white/40 border-white  rounded-md">
        <Image src={props.url} width={200} height={200} className="w-full h-44" alt="#"/>
        <div className="flex flex-col gap-2 ">
          <p className="text-xl font-bold capitalize font-sarala ">
            {props.name}
          </p>
          <p className="text-md text-[#1a1757] font-semibold font-work-sans mt-4 mb-6">
            {props.content}
          </p>
        </div>
        <div className="flex gap-x-1">
          <p className="text-[#1a1757] font-bold text-sm">{props.Founder}</p>
        </div>
      </div>
    </div>
  );
};

const ArrowNext = (props) => {
  return (
    <>
      <div
        onClick={props.Handler}
        className="cursor-pointer t inset-y-1/2 w-8 h-8 bg-brnd-dark-blue rounded-full flex justify-center items-center "
      >
        <GoArrowLeft size={25} />
      </div>
    </>
  );
};

const ArrowPrev = (props) => {
  return (
    <>
      <div
        onClick={props.Handler}
        className="cursor-pointer inset-y-1/2 w-8 h-8 bg-brnd-dark-blue rounded-full flex justify-center items-center"
      >
        <GoArrowRight size={25} />
      </div>
    </>
  );
};
export default Testimonial;

"use client";
import React, { useState, useRef, useCallback } from "react";
import Glider from "react-glider";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import "glider-js/glider.min.css";

const data = [
  {
    name: "CHARLIE",
    Founder: "~Leslie",
    content:
      "Sometimes the challenges we face with our pets may seem overwhelming.  Sometimes we feel helpless and hopeless.  This was my situation with my beloved Charlie… until I found Texas Veterinary Behavior Services. Charlie was a basket case and my family was powerless to help him find peace.  Charlie had a host of problems. He ripped our clothes off our bodies, barked, growled and lunged at other dogs on walks, self-mutilated when stressed, and even hallucinated frequently. He was certifiably a nutcase!",
    url: "/assest/img7.webp",
  },
  {
    name: "VIKTOR",
    Founder: "~Beverly and Tim",
    content:
      "My Doberman, Viktor was born 1/5/2012. I brought him home at about 10 weeks old. I prepared as much as I could. I read all of the books, watched many videos, received advice from different trainers and vets in advance on what to expect with a new puppy and felt I was ready! As soon as he was old enough and all of his shots completed we enrolled in puppy training. Once that was completed we immediately started obedience classes. Later on, we started rally, but unfortunately we did not get to complete that due to his sudden change in behavior.",
    url: "/assest/img2.webp",
  },

  {
    name: "FRANCIS",
    Founder: "~Lawrence",
    content:
      "Francis, my 135 pound mastiff was out of control.  Francis was hostile to strangers, and even hostile to close family members.  I could barely take him to the vet for check ups.Thanks to Dr. Haug, Francis is like a new dog.  He is calmer, more friendly, and happier.  The training Dr. Haug does is positive and Francis enjoys it.I have had several dogs and worked with a half dozen skilled dog trainers in obedience, agility, and schutzhund.  I have never worked with anyone as resourceful as Dr. Haug.  Her understanding of dogs is unmatched.  She is truly one of the best veterinary behavior specialists in the world.",
    url: "/assest/img11.webp",
  },
  {
    name: "OPPIE AND JACK",
    Founder: "~Paula and Gus",
    content:
      "We have been working with Dr. Haug for 8 months, and I am so thrilled with the improvements in our household. We have three rescue dogs – two males and one female. Eight months ago my two male dogs began fighting with each other whenever I was in the same room with them. I could not sit down in a chair or be in the same room without them fighting over me, and I would end up getting hurt. My husband was ready to get rid of our littlest male (Oppie) whom has always been a little quirky. Oppie was always territorial with me and would growl and snap if you touched him wrong. We had learned to live with that. ",
    url: "/assest/img4.webp",
  },
  {
    name: "CHARLIE",
    Founder: "~Leslie",
    content:
      "Sometimes the challenges we face with our pets may seem overwhelming.  Sometimes we feel helpless and hopeless.  This was my situation with my beloved Charlie… until I found Texas Veterinary Behavior Services. Charlie was a basket case and my family was powerless to help him find peace.  Charlie had a host of problems. He ripped our clothes off our bodies, barked, growled and lunged at other dogs on walks, self-mutilated when stressed, and even hallucinated frequently. He was certifiably a nutcase!",
    url: "/assest/img7.webp",
  },
  {
    name: "VIKTOR",
    Founder: "~Beverly and Tim",
    content:
      "My Doberman, Viktor was born 1/5/2012. I brought him home at about 10 weeks old. I prepared as much as I could. I read all of the books, watched many videos, received advice from different trainers and vets in advance on what to expect with a new puppy and felt I was ready! As soon as he was old enough and all of his shots completed we enrolled in puppy training. Once that was completed we immediately started obedience classes. Later on, we started rally, but unfortunately we did not get to complete that due to his sudden change in behavior.",
    url: "/assest/img2.webp",
  },

  {
    name: "FRANCIS",
    Founder: "~Lawrence",
    content:
      "Francis, my 135 pound mastiff was out of control.  Francis was hostile to strangers, and even hostile to close family members.  I could barely take him to the vet for check ups.Thanks to Dr. Haug, Francis is like a new dog.  He is calmer, more friendly, and happier.  The training Dr. Haug does is positive and Francis enjoys it.I have had several dogs and worked with a half dozen skilled dog trainers in obedience, agility, and schutzhund.  I have never worked with anyone as resourceful as Dr. Haug.  Her understanding of dogs is unmatched.  She is truly one of the best veterinary behavior specialists in the world.",
    url: "/assest/img11.webp",
  },
  {
    name: "OPPIE AND JACK",
    Founder: "~Paula and Gus",
    content:
      "We have been working with Dr. Haug for 8 months, and I am so thrilled with the improvements in our household. We have three rescue dogs – two males and one female. Eight months ago my two male dogs began fighting with each other whenever I was in the same room with them. I could not sit down in a chair or be in the same room without them fighting over me, and I would end up getting hurt. My husband was ready to get rid of our littlest male (Oppie) whom has always been a little quirky. Oppie was always territorial with me and would growl and snap if you touched him wrong. We had learned to live with that. ",
    url: "/assest/img4.webp",
  },
];

const Testimonials = () => {
 
  const gliderRef = useRef(null);

  const handleGliderNext = useCallback(() => {
    gliderRef.current.scrollItem("next");
  }, [gliderRef]);

  const handleGliderPrev = useCallback(() => {
    gliderRef.current.scrollItem("prev");
  }, [gliderRef]);

  return (
    <div className="relative container mx-auto py-16 mt-10">
      <p className="font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center mb-3">
        Testimonials From Our Clients With Dogs
      </p>

      <Glider
        className="glider-container"
        draggable
        hasDots={false}
        slidesToShow={3}
        scrollLock
        hasArrows={false}
        ref={gliderRef}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: "3",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: "2",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.55,
            },
          },
        ]}
      >
        {data.map((values, index) => (
          <div className="mx-1" key={index}>
            <PopularDestinationCard {...values} />
          </div>
        ))}
      </Glider>
      <div className="glider-arrows flex items-center justify-center gap-3">
        <button className="glider-arrow" onClick={handleGliderPrev}>
          <GoArrowLeft size={32} />
        </button>
        <button className="glider-arrow" onClick={handleGliderNext}>
          <GoArrowRight size={32} />
        </button>
      </div>
    </div>
  );
};

const PopularDestinationCard = (props) => {
  return (
    <div className="brand-container px-5">
      <div className="m-2 py-5 px-5 flex flex-col gap-y-2 shadow-md border-2 bg-white/40 border-white rounded-md">
        <Image
          src={props.url}
          width={200}
          height={200}
          className="w-full h-44 bg-transparent"
          alt="#"
        />
        <div className="flex flex-col gap-2 ">
          <p className="text-xl font-bold capitalize font-sarala">
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


export default Testimonials;

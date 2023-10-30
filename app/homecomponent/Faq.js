"use client";

import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const FaqData = [
  {
    id: "1",
    question: "What breeds of dogs do you train?",
    answer:
      "We have trained all breeds of dogs. You would be hard-pressed to find a breed that we have not trained – from Chihuahua to Great Dane, big or small, we train them all!",
  },
  {
    id: "2",
    question: "What training methods do you use? ",
    answer:
      "At Alpha Paws we train dogs the way a mother wolf would train her pups in the wild, using love and respect instead of food as motivation.",
  },
  {
    id: "3",
    question: "How do I get the training process started?",
    answer:
      "The first step is to book a home visit for your family and your dog to meet with an Alpha Paws trainer.  This will give us a chance to meet you and your dog in the dog’s natural environment and better assess its training needs.  It will also give you an opportunity to meet us and get a better understanding of the Alpha Paws philosophy and our training methods.  This evaluation usually takes about one hour and can be scheduled on any day (weekdays or weekends) between 9:00 a.m. and 7:00 p.m. ",
  },
  {
    id: "4",
    question: "Do I really need 5 lessons? ",
    answer:
      "Yes!  It would be almost impossible to learn, assimilate, and practice each of the commands and elements of our Alpha Paws training in just a single follow-up session – not to mention extremely exhausting for you and your dog.  Our experience has shown that most owners require at least 5 lessons to become comfortable with and fluent in the training/communication process. ",
  },
];

const Faq = () => {
  return (
    <>
      <div className=" py-10" id="faq">
        <h1 className="text-black text-4xl text-center py-10">
          FAQ<span className="text-[#615e5e]">&apos;s</span>
        </h1>

        <div className="">
          {FaqData.map((values, index) => {
            return <FaqCard key={index} {...values} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;

const FaqCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="brand-container">
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer bg-[#F2F6F6] justify-between items-center px-5  w-full"
        >
          <p className="font-semibold text-xl xl:text-xl lg:text-xl md:text-lg py-5 my-3">
            {question}
          </p>
          <IoIosArrowForward
            size={20}
            className={`${
              open ? "rotate-90" : ""
            } h-5 w-5 transition-transform duration-500`}
          />
        </div>
        <div
          className={`${
            open
              ? "max-h-[1000px] transition-max-h duration-700 ease-in-out overflow-hidden"
              : "max-h-0 transition-max-h duration-700  ease-in-out overflow-hidden"
          }`}
        >
          <p className="transition-transform leading-relaxed duration-500 text-[18px] text-[#615e5e] font-medium px-5 py-8 bg-[#f2f6f6]">
            {answer}
          </p>
        </div>
        <hr className="mt-3 border-[#fff]" />
      </div>
    </>
  );
};

import Image from "next/image";
import React from "react";

import { PiDog } from "react-icons/pi";

const Serives = () => {
  const servicesData = [
    {
      title: "Dog Walking",
      imageSrc: "/assest/services1.jpeg",
      width: 100,
      height: 50,
      description:
        "Improve your pets behavior and obedience with our positive reinforcement techniques.",
    },
    {
      title: "Pet Sitting",
      imageSrc: "/assest/service2.webp",
      width: 100,
      height: 50,
      description:
        "Our team provides safe and reliable pet sitting services for your furry friends.",
    },
    {
      title: "Dog Grooming",
      imageSrc: "/assest/service5.webp",
      width: 100,
      height: 50,
      description:
        "Keep your dog looking its best with our professional grooming services.",
    },
    {
      title: "Dog Training",
      imageSrc: "/assest/service4.webp",
      width: 100,
      height: 50,
      description:
        "Train your dog with our experts to improve behavior and obedience.",
    },
  ];

  return (
    <div className="bg-white" id="service">
      <div className="brand-container px-5 py-10">
        <div className="flex flex-col gap-5">
          {/* title */}

          <div className="flex  item-center  gap-3">
            <h1 className="text-black font-bold text-[40px] ">Services</h1>
            <p>
              <PiDog size={40} />
            </p>
          </div>

          <p className="text-black text-xl leading-normal text-justify">
            Our customized dog services offer individual attention and care,
            tailored to meet your dog&apos;s unique needs and your preferences
            as an owner.
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 gap-5 py-5">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="border hover:border-2 border-black flex flex-col gap-2 p-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-transform hover:animate-pulse"
              >
                <div className="flex justify-center">
                  <Image
                    src={service.imageSrc}
                    width={service.width}
                    height={service.height}
                    className="w-full"
                    alt="#"
                  />
                </div>
                <h1 className="text-center mt-2 text-2xl font-bold">
                  {service.title}
                </h1>
                <p className="text-center text-[18px] leading-normal text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serives;

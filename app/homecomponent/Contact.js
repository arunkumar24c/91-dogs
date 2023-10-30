import React from "react";
import { FaMapMarker, FaPhone, FaRegClock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="bg1" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-black-900 dark:text-white text-3xl sm:text-5xl">
              Contact
            </h2>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-black">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
                scelerisque sagittis ante, ac tincidunt sem venenatis ut.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white">
                    <FaMapMarker /> 
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-black dark:text-white">
                      Our Address
                    </h3>
                    <p className="text-black dark:text-slate-400">
                      1230 xy road
                    </p>
                    <p className="text-black dark:text-slate-400">
                      tamilnadu
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white">
                    <FaPhone /> 
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-black-900 dark:text-black">
                      Contact
                    </h3>
                    <p className="text-black dark:text-slate-400">
                      Mobile: +91 99999999
                    </p>
                    <p className="text-black dark:text-slate-400">
                      Mail: xxxxxxx@gmail.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h1>Lets share something with us </h1>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        className="mb-2 w-full rounded-md border border-black-400 py-2 pl-2 pr-4 shadow-md dark:text-black-300 sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md border border-black-400 py-2 pl-2 pr-4 shadow-md dark:text-black-300 sm:mb-0"
                        name="email"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="number"
                        className="pb-1 text-xs uppercase tracking-wider"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="number"
                        id="number"
                        autoComplete="number"
                        placeholder="Your Mobile number"
                        className="mb-2 w-full rounded-md border border-black-400 py-2 pl-2 pr-4 shadow-md dark:text-black-300 sm:mb-0"
                        name="number"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="message"
                      className="pb-1 text-xs uppercase tracking-wider"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className="mb-2 w-full rounded-md border border-black-400 py-2 pl-2 pr-4 shadow-md dark:text-black-300 sm:mb-0"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import SectionHead from "./fragments/SectionHead";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaPhoneVolume,
  FaWhatsapp,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

function ContactMe() {
  return (
    <div id="contact" className="mt-8 sm:mt-16">
      <SectionHead section={"Contact"} color={"text-green-600"} />
      <div className=" ">
        <p class="flex text-center items-center">
          <span className="px-4">
            <FaHome className="text-2xl " />
          </span>
          Mbiabong by Shelter Junction, Airport Road, Uyo - Akwa Ibom State,
          Nigeria.
        </p>

        <p class="pl-16">
          Feel free to reach me on any of the handles below!
        </p>

        <div className="w-full sm:w-1/2 md:w-1/3">
          <li class="flex items-center">
            <p className="px-4">
              <FaPhone />
            </p>
            <p>
              <a
                className="text-blue-500 cursor-pointer hover:underline hover:text-blue-800 hover:font-bold"
                href="tel:+2348089810418"
              >
                +234 808 981 0418
              </a>{" "}
              <br />{" "}
              <a
                className="text-blue-500 cursor-pointer hover:underline hover:text-blue-800 hover:font-bold"
                href="tel:+2349060145228"
              >
                +234 906 014 5228
              </a>
            </p>
          </li>
          <li class="flex items-center">
            <p className="px-4">
              <FaWhatsapp />
            </p>
            <a
              className="text-blue-500 cursor-pointer hover:underline hover:text-blue-800 hover:font-bold"
              target="_blank"
              href="https://wa.link/6kv12d"
            >
              Send WhatsApp Message{" "}
            </a>
          </li>
          <li class="flex items-center">
            <p className="px-4">
              <FaFacebook />
            </p>
            <a
              className="text-blue-500 cursor-pointer hover:underline hover:text-blue-800 hover:font-bold"
              target="_blank"
              href="https://web.facebook.com/jahaziel.uko.1"
            >
              Jahaziel Uko
            </a>
          </li>
          <li class="flex items-center">
            <p className="px-4">
              <FaLinkedin />{" "}
            </p>
            <a
              className="text-blue-500 cursor-pointer hover:underline hover:text-blue-800 hover:font-bold"
              href="https://www.linkedin.com/in/jahaziel-uko"
            >
              Jahaziel Uko
            </a>
          </li>
          <li class="flex items-center">
            <p className="px-4">
              <FaGithub />
            </p>
            <a
              className="text-blue-500 cursor-pointer hover:underline hover:text-blue-800 hover:font-bold"
              href="https://github.com/JayBeeLearn"
            >
              JayBee Learn
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;

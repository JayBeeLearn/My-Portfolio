import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import SectionHead from "./fragments/SectionHead";

function Header() {
  return (
    <div className="my-8 sm:flex flex-row-reverse  justify-between items-center">
      <div className="left-image sm:w-4/6">
        <div className="flex justify-center ">
          <img
            className="rounded-full w-[20rem] sm:min-h-fit"
            src="../../../images/profile.jpg"
            alt="My Profile Picture"
          />
        </div>

        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-center  uppercase text-green-500 my-4">
          Jahaziel Bassey Uko
        </h1>
      </div>

      <div className="right-objective sm:w-3/6 min-h-fit bg-gay-400">
        <SectionHead section={'Objective'} color={'text-green-600'}/>
        <p className="text-xl">
          <FaQuoteLeft className="" />
          <span className="px-8">
            An intellectual human with dilligence and persistency to find
            solution or contribute to finding solution in a team environment.
            Always open to learning. Pragmatic, Optimistic, Open-minded,
            Curious, Fast Learner.
          </span>

          <FaQuoteRight className="float-right" />
        </p>
      </div>
    </div>
  );
}

export default Header;

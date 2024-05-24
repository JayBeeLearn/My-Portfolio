import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Outlet } from "react-router-dom";

function MasterLayouts() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="px-8 sm:px-16 md:px-32 py-4 flex sm:flex justify-between  bg-blue-600  items-center">
        <div className="brand w-1/2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Jahaziel Uko</h1>
        </div>

        {/* NAVBAR CONTENTS ON SIDEBAR FOR LARGE SCREENS  */}
        <div className="hidden sm:flex w-3/5 justify-between text-white text-xl ">
          <a href="#contact">Contact</a>
          <a href="#programming-skills">Programming Skills</a>

          <a href="#education">Education</a>

          {/* <h2>Projects</h2> */}
        </div>

        {/* NAVBAR CONTENTS ON SIDEBAR FOR SMALL SCREENS  */}
        <div className="flex justify-end sm:hidden">
          <div
            id="sidebar"
            className={`absolute  ${
              toggle
                ? " top-[68px] left-[0]   bg-green-500"
                : " top-0 -left-[580px] "
            } transit h-[100%] w-9/12  transition-all block`}
          >
            {/* <h2>Contact</h2> */}
            <div className="flex flex-col items-center justify-between align-middle">
              <p className="px-4 my-8 text-xl text-white">
                <a
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  href="#education"
                >
                  Education
                </a>
              </p>
              <p className="px-4 my-8 text-xl text-white">
                <a
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  href="#work-experiences"
                >
                  Work Experiences
                </a>
              </p>
              <p className="px-4 my-8 text-xl text-white">
                <a
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  href="#programming-skills"
                >
                  Programming Skills
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex sm:hidden">
          <p className="px-4 text-white hover:font-bold">
            <a href="#contact">Contact</a>
          </p>
          <FaBars
            className="text-2xl font-bold float-right text-white cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
      </div>
      <div className="px-8 sm:px-16 md:px-32">
        <Outlet />
      </div>
    </>
  );
}

export default MasterLayouts;

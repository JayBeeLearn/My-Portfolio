import React from "react";

function Course({ certification, year, institution, skills }) {
  return (
    <div className="bg-blue-50 p-4 min-h-fit rounded-tl-lg rounded-br-md">
      <div className="flex items-center sm:min-h-[6rem]">
        <h1 className="text-center font-bold text-green-600 text-xl sm:text-2xl   ">
          {certification}
        </h1>
      </div>

      {/* <p className="text-center">Years of experience:</p> */}
      <div className="flex justify-center items-center sm:min-h-[4rem]">
        <p className="text-lg font-bold text-center sm:text-xl  ">
          {institution}
        </p>
      </div>

      {/* <p className="text-center">Years of experience:</p> */}
      <p className="text-lg sm:text-xl ">{year}</p>

      <div className="">
        <p className="font-bold ">Skills</p>
        <div className="ml-4">
          {skills.map((skill) => {
            return <li className="text-sm sm:text-lg  ">{skill}</li>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Course;

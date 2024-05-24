import React from "react";

function School({ year, school, course, cgpa }) {
  return (
    <div className="bg-green-50 p-4 min-h-fit rounded-tr-lg rounded-bl-md">
      <div className="flex justify-center items-center sm:min-h-[6rem]">
        <h1 className="text-center font-bold text-blue-600 text-xl sm:text-2xl   ">
          {course}
        </h1>
      </div>

      {/* <p className="text-center">Years of experience:</p> */}
      <div className="flex justify-center items-center sm:min-h-[4rem]">
        <p className="text-lg font-bold text-center sm:text-xl  ">
          {school}
        </p>
      </div>

      {/* <p className="text-center">Years of experience:</p> */}
      <p className="text-lg sm:text-xl ">{year}</p>

      <div className="flex justify w-1/2">
        <p className="font-bold">{cgpa && "CGPA:"} </p>
        <p className="px-4 "> {cgpa && cgpa} </p>
      </div>
    </div>
  );
}

export default School;

import React from "react";

function Experienence({ place, position, startYear, endYear, duties }) {
  return (
    <div className="bg-blue-100 p-4">
      <div>
        <h1 className="text-xl font-bold text-green-600 sm:text-2xl md:text-3xl">
          {position}
        </h1>
      </div>
      <div>
        <h1 className="text-lg font-bold text-blue-400 sm:text-xl md:text-2xl">
          {place}
        </h1>
      </div>
      <div className="flex">
        <p className="px-2">{startYear}</p> <span> - </span>
        <p className="px-2">{endYear}</p>
      </div>
      <div>
        {duties.map((duty) => {
          return <li className="pl-2">{duty}</li>;
        })}
      </div>
    </div>
  );
}

export default Experienence;

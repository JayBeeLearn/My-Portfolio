import React from "react";

function SectionHead({ section, color }) {
  console.log(color);
  return (
    <>
      <div>
        <h2
          className={`text-3xl font-bold text-center pb-4 sm:text-left sm:pb-8 mt- ${color}`}
        >
          {section}
        </h2>
      </div>
    </>
  );
}

export default SectionHead;

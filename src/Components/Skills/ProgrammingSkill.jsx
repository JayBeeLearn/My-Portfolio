import React from "react";

function ProgrammingSkill({ language, years, proficiency, framework }) {
  return (
    <>
      <div className="bg-blue-50 p-4 min-h-fit rounded-tl-lg rounded-br-md">
        <h1 className="skill">{language}</h1>

        <p className="text-center">Years of experience:</p>
        <p className="skill">{years}+</p>

        <p className="text-center">Level of proficiency:</p>
        <div className="flex justify-center mb-4">
          <progress className="" value={proficiency} max={100}>
            {" "}
          </progress>
        </div>

              
              <p className="text-center">{framework && 'Framework:'} </p>
        <p className="font-bold text-green-700 text-md sm:text-lg md:text-xl"> {framework && framework} </p>
      </div>
    </>
  );
}

export default ProgrammingSkill;

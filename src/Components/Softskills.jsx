import React from "react";
import SectionHead from "./fragments/SectionHead";
import { softSkills } from "../assets/data";

function Softskills() {
  return (
    <div className="mt-8 sm:mt-16">
      <SectionHead section={"Soft Skills"} color={"text-green-600"} />

      <div className="ml-8">
        {softSkills.map((skill) => {
          return <li className="text-lg sm:text:xl md:text-2xl">{skill}</li>;
        })}
      </div>
    </div>
  );
}

export default Softskills;

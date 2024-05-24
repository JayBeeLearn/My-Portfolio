import React from "react";
import SectionHead from "./fragments/SectionHead";
import { education } from "../assets/data";
import School from "./Skills/School";

function Education() {
  return (
    <div id="education" className="mt-8 sm:mt-16">
      <SectionHead section={"Education"} color={"text-green-600"} />

      <div className="edu-data  align-middle">
        {education.map((school, i) => {
          
          return <School key={i} {...school} />;
        })}
      </div>
    </div>
  );
}

export default Education;

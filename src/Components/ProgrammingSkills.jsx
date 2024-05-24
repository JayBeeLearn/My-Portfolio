import React from "react";
import { programmingSkills } from "../assets/data";
import SectionHead from "./fragments/SectionHead";
import ProgrammingSkill from "./Skills/ProgrammingSkill";

function ProgrammingSkills() {
  return (
    <div id="programming-skills">
      <SectionHead section={"Programming Skills"} color={"text-blue-600"} />
      <div className="programming-data">
        {programmingSkills.map((skill, i) => {
          return <ProgrammingSkill key={i} {...skill} />;
        })}
      </div>

      <div className="mt-4">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-blue-400">
          Other Computer Skills
        </h1>
        <div className="ml-8">
          <li>
            Microsoft Office <small>[All Package]</small>
          </li>
          <li>Corel Draw</li>
          <li>
            Photoshop <small>[Basics] </small>
          </li>
          <li>Scratch</li>
          <li>QBASICS</li>
        </div>
      </div>
    </div>
  );
}

export default ProgrammingSkills;

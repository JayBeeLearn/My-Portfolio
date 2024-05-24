import React from "react";
import { workExperiences } from "../assets/data";
import Experienence from "./Skills/Experienence";
import SectionHead from "./fragments/SectionHead";

function WorkExperiences() {
  return (
    <div id="work-experiences" className="mt-8 sm:mt-16">
      <SectionHead section={"Work Experiences"} color={"text-blue-600"} />
      <div className="grid gap-4 grid-col-1 sm:grid-cols-2">
        {workExperiences.map((experience, i) => {
          return <Experienence key={i} {...experience} />;
        })}
      </div>
    </div>
  );
}

export default WorkExperiences;

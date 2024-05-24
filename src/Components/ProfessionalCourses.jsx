import React from "react";
import SectionHead from "./fragments/SectionHead";
import { professionalCourses } from "../assets/data";
import Course from "./Skills/Course";

function ProfessionalCourses() {
  return (
    <div className="mt-8 sm:mt-16">
      <SectionHead section={"Professional Courses"} color={"text-blue-600"} />

      <div className="data grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {professionalCourses.map((course, i) => {
          return <Course key={i} {...course} />;
        })}
      </div>

      
    </div>
  );
}

export default ProfessionalCourses;

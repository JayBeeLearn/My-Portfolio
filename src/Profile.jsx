import React from "react";
import Header from "./Components/Header";
import ProgrammingSkills from "./Components/ProgrammingSkills";
import Education from "./Components/Education";
import ProfessionalCourses from "./Components/ProfessionalCourses";
import Softskills from "./Components/Softskills";
import WorkExperiences from "./Components/WorkExperiences";
import ContactMe from "./Components/ContactMe";

function Profile() {
  return (
    <>
      <Header />
      <ProgrammingSkills />
      <Education />
      <ProfessionalCourses />
      <Softskills />
      <WorkExperiences />
      <ContactMe />
    </>
  );
}

export default Profile;

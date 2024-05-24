const programmingSkills = [
  {
    language: "HTML",
    years: 6,
    proficiency: 100,
    framework: null,
  },
  {
    language: "CSS",
    years: 6,
    proficiency: 85,
    framework: "Tailwind, Bootstrap",
  },
  {
    language: "JavaScript",
    years: 5,
    proficiency: 85,
    framework: "React",
  },
  {
    language: "PHP",
    years: 4,
    proficiency: 60,
    framework: "Laravel",
  },
  {
    language: "Node",
    years: 2,
    proficiency: 60,
    framework: null,
  },
  {
    language: "React",
    years: 2,
    proficiency: 85,
    framework: null,
  },
  {
    language: "Laravel",
    years: 3,
    proficiency: 70,
    framework: null,
  },
  {
    language: "Databases",
    years: 4,
    proficiency: 80,
    framework: "MySql, Postgres",
  },
];

const education = [
  {
    school: "National Open University of Nigeria",
    course: "B.Sc.(ED.) Computer Science Education",
    year: "2020 - 2023",
    cgpa: 3.73,
    class: "Second Class Upper",
  },

  {
    school: "Effective Model School",
    course: "Senior School Certificate (WAEC)",
    year: "2010 - 2016",
    cgpa: null,
    class: null,
  },

  {
    school: "Methodist Central School",
    course: "First School Leaving Certificate (FSLC)",
    year: "2004 - 2010",
    cgpa: null,
    class: null,
  },
];

const professionalCourses = [
  {
    certification: "Certificate in Entrepreneurship Studies",
    institution: "National Open University of Nigeria",
    year: "2023",
    skills: [
      "Entrepreneurial Thinking",
      "Creativity and Innovation",
      "Business Model",
      "Technology in Business Managment",
      "Project Management",
      "Business Sustainability",
    ],
  },
  {
    certification: "Certificate in Web Development (Full Stack)",
    institution: "The RootHub",
    year: "2023",
    skills: [
      "Advanced JavaScript",
      "React Development",
      "Node JS",
      "Working with Postgres",
      "Working with Tailwind",
    ],
  },

  {
    certification: "Certificate in Web Development ",
    institution: "Start Innovation Hub",
    year: "2021",
    skills: ["HTML and CSS", "JavaScript", "PHP", "Laravel", "Bootstrap"],
  },
];

const softSkills = [
  "Good and in office management and secretariat duties.",
  "Ability to organize meetings and events.",
  "Good keyboard skills.",
  "Ability to handle multi-tasking job.",
  "Ability to work with little or no supervision.",
  "Familiarity with words.",
  "Good in Graphics Design.",
  "Good in management and entrepreneur skills.",
  "Web Design and Management skills.",
  "Negotiation skills and techniques.",
];

const workExperiences = [
  {
    place: "Fastville International Schools",
    position: "Teacher, Head of Operations",
    startYear: 2017,
    endYear: 2024,
    duties: [
      "As a Subject Teacher, taught Computer Science from Nursery Two to SS 3",
      "As Head of Operations, work with the heads of school to ensure the day-to-day smooth running of the school by providing needed materials and handling any unplanned for circumstances that might affect the school's teaching processes.",
      "As a management staff, help in formulating policies, developing intervention programs and execution of same.",
      "Coordinate the school marketing department to help advertise the school to the general public",
      "Acts in several committees including Events Committees, Disciplinary Committee, etc",
      "Serve the PTA Executive as a PRO",
    ],
  },

  {
    place: "Freelancer",
    position: "Web Developer [Part Time]",
    startYear: 2022,
    endYear: "present",
    duties: [
      "Implemented an ecommerce website that was designed using Figma by building the frond-end components and logic using React, Tailwind and building my own context.",
      "Built an appointment scheduling app using Laravel, PHP, and MySql.",
      "Built personal projects that helped me demonstrate the use of PHP, Larevel and Node JS using industry standard practices.",
    ],
  },

  {
    place: "The Roothub",
    position: "Web Developer [Internship]",
    startYear: 2022,
    endYear: 2023,
    duties: [
      " While mastering frontend development, learnt the use of React and different packages in the Node Ecosystem.",
      "Learnt backend development, learnt about API, and Node JS",
      "Learnt the use of Tailwind and apply the technology in a lot of personal projects",
      "Mastered responsive design and implementation of a UI design.",
    ],
  },

  {
    place: "Divine Essential Schools",
    position: "Teacher, Head of Operations",
    startYear: 2017,
    endYear: 2024,
    duties: [
      "Taught all the subject offered in the primary classes and prepared the pupils for external examination (First School Leaving Certificate)",
    ],
  },
];
export { programmingSkills, education, professionalCourses, softSkills, workExperiences };

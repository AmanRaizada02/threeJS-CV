import {
    mobile,
    backend,
    creator,
    web,

    css,
    sql,
    cpp,
    git,
    html,
    javascript,
    mongodb,
    nodejs,
    reactjs,
    python,
    tailwind,
    bootstrap,

    bis,
    samsung,
    tiet,
    iete,
    enactus,
    iiche,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "SQl",
      icon: sql,
    },
    {
      name: "C++",
      icon: cpp,
    },
  ];
  
  const experiences = [
    {
      title: "Core Member - Technical",
      company_name: "IIChE-TIET",
      icon: iiche,
      iconBg: "#383E56",
      date: "Sep 2021 - Mar 2022",
      points: [
        "Web designer and developer",
        "Recommended to OC to handle the post creation and posting on IICHe-TIET Twitter handle.",
      ],
    },
    {
      title: "Research Team Member",
      company_name: "Enactus Thapar",
      icon: enactus,
      iconBg: "#383E56",
      date: "May 2021 - May 2022",
      points: [
        "Planned and researched about manufacturing, designing, and production of pads in very cost effective methods.",
        "Planned a very pocket friendly business model for pads production.",
        "Our team succesfully sold paddy waste and generated income.",
        "Collaborated with schools to teach students about sex education.",
      ],
    },
    {
      title: "Mentor",
      company_name: "IETE Students' Forum, TIET",
      icon: iete,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Jul 2022",
      points: [
        "Build Registration portal.",
        "Build official IETE website and official event website.",
        "Prepared an event for Web Dev.",
        "Also conducted several workshop on web dev.",
      ],
    },
    {
      title: "Developer at Veritas - Engineering logbook",
      company_name: "Thapar Institute of Engineering & Technology",
      icon: tiet,
      iconBg: "#eb1b23",
      date: "Jun 2022 - Jun 2023",
      points: [
        "The logbook provides a centralized location for storing all project documentation, including meeting minutes, task lists, and progress reports. This shows that you are able to keep track of a project's progress and make sure that everyone is on the same page.",
        "The logbook requires you to write clear and concise summaries of project meetings and tasks. This shows that you are able to communicate effectively with both technical and non-technical audiences.",
        "Used React.JS for frontend, Django for backend and Kanban for project management",
      ],
    },
    {
      title: "Samsung PRISM Research intern",
      company_name: "Samsung R&D Institute India",
      icon: samsung,
      iconBg: "#F9F6EE",
      date: "Sep 2022 - Jun 2023",
      points: [
        "Region Of Interest(ROI) Detector – Music Title.",
        "Developed and implemented an efficient music title detector using deep learning techniques for mobile screenshots.",
        "Achieved high accuracy and robustness across various screen resolutions and font styles, enhancing user experience in music applications and improving content accessibility."
      ],
    },
    {
      title: "Research And Development Intern",
      company_name: "Bureau of Indian Standards",
      icon: bis,
      iconBg: "#E6DEDD",
      date: "May 2023 - Jul 2023",
      points: [
        "Worked under Mr Priyanshu Sharma, Scientist B, Assistant Director LITD",
        "Worked on the project “Metaverse” and analyzed the challenges and opportunities in the Indian metaverse and gaming industry.",
        "Contributing to the identification of different standards of Metaverse and create pre standardization report and presentation on Metaverse."
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
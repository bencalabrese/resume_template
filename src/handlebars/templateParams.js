export default {
  contact: {
    phone: "(619) 208-8943",
    email: "bencalabrese@gmail.com",
    location: "San Mateo, CA",
    links: [
      {
        name: "Portfolio",
        icon: "folder.svg",
        url: "http://www.bencalabrese.com"
      },
      {
        name: "LinkedIn",
        icon: "linkedin.svg",
        url: "https://www.linkedin.com/in/bcalabrese/"
      },
      {
        name: "Github",
        icon: "github.svg",
        url: "https://github.com/bencalabrese"
      }
    ]
  },
  skills: [
    { name: "Dart", icon: "skill_icons/dart.svg", skillLevel: 4 },
    { name: "AngularDart", icon: "skill_icons/angulardart.svg", skillLevel: 4 },
    { name: "Javascript", icon: "skill_icons/javascript.svg", skillLevel: 4 },
    { name: "HTML", icon: "skill_icons/html5.svg", skillLevel: 4 },
    { name: "CSS", icon: "skill_icons/css3.svg", skillLevel: 4 },
    { name: "Sass", icon: "skill_icons/sass.svg", skillLevel: 4 },
    { name: "jQuery", icon: "skill_icons/jquery.svg", skillLevel: 4 },
    { name: "Flux", icon: "skill_icons/flux.svg", skillLevel: 4 },
    { name: "Typescript", icon: "skill_icons/typescript.svg", skillLevel: 3 },
    { name: "React", icon: "skill_icons/react.svg", skillLevel: 3 },
    { name: "Ruby", icon: "skill_icons/ruby.svg", skillLevel: 3 },
    { name: "Rails", icon: "skill_icons/rails.svg", skillLevel: 3 },
    { name: "Git", icon: "skill_icons/git.svg", skillLevel: 3 },
    { name: "SQL", icon: "skill_icons/postgresql.svg", skillLevel: 3 },
    { name: "Python", icon: "skill_icons/python.svg", skillLevel: 2 },
    { name: "AWS", icon: "skill_icons/aws.svg", skillLevel: 2 }
  ],
  experiences: [
    {
      name: "YouTube",
      descriptors: ["Senior Software Engineer", "July 2019–Present"],
      bullets: [
        "Tech lead of the YouTube Kids living room app, supporting smart " +
          "TVs, cable boxes, and streaming dongles",
        "Designed and led full rewrite of client to use more resilient and " +
          "performant UI framework",
        "Initiated and led cross-org project to support Lottie animations on " +
          "living room devices",
        "Author of Google-wide best practices on screenshot testing",
        "Member of Dart readability team, one of ~40 engineers selected " +
          "across Google based on exceptional code review skills",
      ],
      collapsedBullets: [
        "Also other stuff",
        "Also other stuff",
      ],
      img: "google.svg"
    },
    {
      name: "Google",
      descriptors: ["Software Engineer", "Sept. 2016–July 2019"],
      bullets: [
        "Led frontend development on multiple projects, taking them through " +
          "product design, UX, development, launch, and landing",
        "Designed key aspects of Greentea, Google's custom CRM, including " +
          "integration with the support ticket system and tracking of " +
          "customer centric metrics used by 20k ad sellers",
        "Co-owner of custom configuration language used to power all tables, " +
          "forms, and charts in Google Ads and Greentea",

        ],
      collapsedBullets: [
        "Also other stuff",
        "Also other stuff",
      ],
      img: "google.svg"
    },
  ],
  projects: [
    {
      name: "Resume",
      links: [
        { name: "Live", url: "http://bencalabrese.com/resume" },
        {
          name: "GitHub",
          url: "https://github.com/bencalabrese/resume_template"
        }
      ],
      descriptors: ["You're reading it!"],
      bullets: [
        "Animations for the web while still styled for print",
      ],
      video: "resume.webm"
    },
    {
      name: "Constellations",
      links: [
        { name: "Live", url: "http://bencalabrese.com/Constellations/" },
        {
          name: "GitHub",
          url: "https://github.com/bencalabrese/Constellations"
        }
      ],
      descriptors: ["Conway's Game of Life simulator"],
      bullets: [
        "App Academy pure JavaScript game project",
      ],
      collapsedBullets: [
        "HTML5 canvas rendering with controls for pan, zoom, and cycle speed",
      ],
      video: "constellations.webm"
    },
    {
      name: "PickupTix",
      links: [
        { name: "Live", url: "https://pickup-tix.herokuapp.com/" },
        { name: "GitHub", url: "https://github.com/bencalabrese/pickup_tix/" }
      ],
      descriptors: ["Event ticketing app built in Rails and React"],
      bullets: [
        "App Academy end of course full stack project",
      ],
      collapsedBullets: [
        "Dynamic show filter using ActiveRecord to combine arbitrary " +
          "filter options into a single query",
        "Interactive seat picker for more engaging " +
          "point-and-click UI"
      ],
      video: "pickup_tix.webm"
    }
  ]
};

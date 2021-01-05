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
        "Tech lead of the YouTube Kids smart TV app, setting its technical " +
          "direction, collaborating with PM/UX, and mentoring more junior " +
          "engineers",
        "Expanded reach by X million DAUs, including launches on Apple TV, " +
          "Fire TV, and Virgin Media",
        "Drove cross-YouTube projects such as supporting Lottie animations " +
          "on living room devices",
        "Thrived and innovated while working with complex constraints such " +
          "as limited user input mechanisms and low memory/compute devices",
        "Shepherded Google wide code health as author of best practices on " +
          "screenshot testing and as one of ~40 engineers selected for the " +
          "Dart readability team based on exceptional code reviews",
      ],
      collapsedBullets: [],
      img: "google.svg"
    },
    {
      name: "Google",
      descriptors: ["Software Engineer", "Sept. 2016–July 2019"],
      bullets: [
        "Led frontend development on multiple projects from initial design " +
          "through to launch",
        "Designed key aspects of Greentea, Google's custom CRM, including " +
          "integration with the support ticket system",
        "Co-owner of custom configuration language used to power all tables, " +
          "forms, and charts in Google Ads and Greentea",
        ],
      collapsedBullets: [],
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
      collapsedBullets: [
        "Animations for the web while still styled for print",
        "For fun, it's mostly hand rolled rather than using a framework. " +
          "Just TS, Sass, and some Handlebars templating.",
        "Some pretty interesting CSS animations. I used transforms with " +
          "hidden overflow borders to give the appearance of expanding since " +
          "reflow properties like height don't animate smoothly."
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
      collapsedBullets: [
        "App Academy pure JavaScript game project",
        "HTML5 canvas rendering with controls for pan, zoom, and cycle speed",
        "Pans infinitely (Theoretically at least. It'll overflow eventually " +
          "but it would take a while.)",
        "Added my own wrinkle of letting users add new dots to the board " +
          "mid-animation"
      ],
      video: "constellations.webm"
    },
    {
      name: "PickupTix",
      links: [
        { name: "Live", url: "https://pickup-tix.herokuapp.com/" },
        { name: "GitHub", url: "https://github.com/bencalabrese/pickup_tix/" }
      ],
      descriptors: ["App Academy Rails/React app"],
      collapsedBullets: [
        "App Academy end of course full stack project",
        "Might take a second to spin up (it's on the Heroku free plan)",
        "Dynamic show filter using ActiveRecord to combine arbitrary " +
          "filter options into a single query",
        "Interactive seat picker for more engaging " +
          "point-and-click UI"
      ],
      video: "pickup_tix.webm"
    }
  ]
};

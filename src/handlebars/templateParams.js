export default {
  name: "Ben Calabrese",
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
    { name: "Dart" },
    { name: "AngularDart" },
    { name: "Typescript" },
    { name: "Python" },
    { name: "SQL" },
    { name: "Ruby" },
    { name: "Git" },
    { name: "Rails" },
    { name: "HTML" },
    { name: "Javascript" },
    { name: "CSS" },
    { name: "jQuery" },
    { name: "Flux" },
    { name: "React" },
    { name: "C" },
    { name: "Sass" }
  ],
  experiences: [
    {
      name: "Google",
      descriptors: ["Software Engineer", "Sept. 2016–Present"],
      bullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet."
      ]
    },
    {
      name: "App Academy",
      descriptors: ["Engineering Apprentice", "May 2016–July 2016"],
      bullets: [
        "Crafted new Ruby and Javascript curriculum and RSpec " +
          "testing suites"
      ]
    }
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
        "Nearly pure HTML/CSS with a little jQuery",
        "Animations and click events for the web while still styled for print",
        "Parameterized for easy editing and reuse"
      ]
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
      descriptors: ["Conway's Game of Life simulator built in Javascript"],
      bullets: [
        "Implemented HTML5 canvas rendering with controls for " +
          "pan, zoom, and adjusting cycle speed",
        "Bound UI events in jQuery for user manipulation of grid"
      ]
    },
    {
      name: "PickupTix",
      links: [
        { name: "GitHub", url: "https://github.com/bencalabrese/pickup_tix/" }
      ],
      descriptors: ["Fullstack event ticketing app built in Rails and React"],
      bullets: [
        "Build a dynamic show filter using ActiveRecord to run a single " +
          "efficient SQL query across multiple criteria",
        "Mapped JSON data to build interactive seat picker for more engaging " +
          "point-and-click UI"
      ]
    }
  ]
};
export default {
  name: "Ben Calabrese",
  contact: {
    phone: "(619) 208-8943",
    email: "bencalabrese@gmail.com",
    location: "San Mateo, CA",
    links: [{ name: "Profile" }, { name: "Github" }, { name: "LinkedIn" }]
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
  projects: [
    {
      name: "Constellations",
      liveLink: "http://bencalabrese.com/Constellations/",
      repoLink: "https://github.com/bencalabrese/Constellations",
      description: "Conway's Game of Life simulator built in Javascript",
      bullets: [
        "Implemented HTML5 canvas rendering with controls for" +
          "pan, zoom, and adjusting cycle speed",
        "Bound UI events in jQuery for user manipulation of grid"
      ]
    },
    {
      name: "PickupTix",
      repoLink: "https://github.com/bencalabrese/pickup_tix/",
      description: "Fullstack event ticketing app built in Rails and React",
      bullets: [
        "Build a dynamic show filter using ActiveRecord to run a single " +
          "efficient SQL query across multiple criteria",
        "Mapped JSON data to build interactive seat picker for more engaging " +
          "point - and - click UI"
      ]
    },
    {
      name: "Snails",
      repoLink: "https://github.com/bencalabrese/Snails",
      description: "Lightweight Rails replica built in Ruby",
      bullets: [
        "Hand-rolled ORM with built-in SQL query methods",
        "Constructed router, views, and controllers to create" +
          "fully RESTful apps serving ERB templates"
      ]
    }
  ]
};

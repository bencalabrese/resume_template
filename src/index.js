require("./styles.scss");

const contact = document.querySelector(".contact");
const skills = document.querySelector(".skills");
const education = document.querySelector(".education");

setTimeout(() => {
  contact.classList.add("collapsed");
  skills.classList.add("expanded");
  education.classList.add("collapsed");
}, 1000);

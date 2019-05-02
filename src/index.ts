require("./styles.scss");

const contact: HTMLElement = document.querySelector(".contact");
const skills: HTMLElement = document.querySelector(".skills");
const education: HTMLElement = document.querySelector(".education");

const collapsibles: ReadonlyArray<HTMLElement> = Array.from(
  document.querySelectorAll(".collapsible")
);

let [
  contactHeadingHeight,
  skillsHeadingHeight,
  educationHeadingHeight
] = collapsibles.map(element => {
  const heading = element.querySelector("h3");
  console.log(heading.scrollHeight);
  return heading.scrollHeight;
});

collapsibles.forEach(element => {
  const originalHeight = element.scrollHeight;
  element.style.flexBasis = `${originalHeight}px`;
});

setTimeout(() => {
  collapse(contact);
  collapse(education);
}, 1000);

function collapse(element: HTMLElement) {
  element.classList.add("collapsed");
  if (element === contact) {
    console.log(contactHeadingHeight);
    element.style.flexBasis = `${contactHeadingHeight}px`;
  } else if (element === education) {
    element.style.flexBasis = `${educationHeadingHeight}px`;
  }
  element.style.flexGrow = "0";
}

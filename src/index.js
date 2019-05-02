require("./styles.scss");

const contact = document.querySelector(".contact");
const skills = document.querySelector(".skills");
const education = document.querySelector(".education");

const collapsibles = Array.from(document.querySelectorAll(".collapsible"));

var headingHeight;

collapsibles
  .filter(element => element.matches(".has-initially-collapsed-heading"))
  .forEach(element => {
    const heading = element.querySelector(".initially-collapsed-heading");
    headingHeight = heading.scrollHeight;
  });

collapsibles.forEach(element => {
  const originalHeight = element.scrollHeight;
  element.style.flexBasis = `${originalHeight}px`;
});

setTimeout(() => {
  collapse(contact);
  collapse(education);
}, 1000);

function collapse(element) {
  if (element === contact) {
    element.style.flexBasis = `${headingHeight}px`;
  } else {
    element.style.flexBasis = 0;
  }
  element.style.flexGrow = 0;
}

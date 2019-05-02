require("./styles.scss");

const contact = document.querySelector(".contact");
const skills = document.querySelector(".skills");
const education = document.querySelector(".education");

document.querySelectorAll(".collapsible").forEach(element => {
  const originalHeight = element.scrollHeight;
  element.style.flexBasis = originalHeight;
});

setTimeout(() => {
  collapse(contact);
  collapse(education);
}, 1000);

function collapse(element) {
  element.style.flexBasis = 0;
  element.style.flexGrow = 0;

  if (element === contact) {
    element.style.flexBasis = "10px";
  }
}

require("./styles.scss");

import Coordinator from "./actions/coordinator";
import Instructions from "./actions/instructions";

// Fixes odd issue where elements transition on page load. This issue only
// occurs intermittently and seemingly only from certain types of links.
//
// We solve here by enforcing 0 transition time until a delay after page load.
// Not an ideal solution, but dev time is better spent on other problems.
const body: HTMLElement = document.querySelector("body");
setTimeout(() => {
  body.classList.remove("hidden");
}, 300);

new Coordinator();

const interactionInstructions = new Instructions(".left .instructions");
const printInstructions = new Instructions(".right .instructions");

setTimeout(() => {
  interactionInstructions.in();
}, 2000);

setTimeout(() => {
  printInstructions.in();
}, 2700);

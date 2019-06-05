require("./styles.scss");

import Coordinator from "./actions/coordinator";
import Instructions from "./actions/instructions";

window.addEventListener("DOMContentLoaded", () => {
  // The dom needs a little time to adjust before we can start manually setting
  // flexBasis in the stretchables.
  setTimeout(() => {
    new Coordinator();
  }, 500);

  const interactionInstructions = new Instructions(".left .instructions");
  const printInstructions = new Instructions(".right .instructions");

  setTimeout(() => {
    interactionInstructions.in();
  }, 2000);

  setTimeout(() => {
    printInstructions.in();
  }, 2700);
});

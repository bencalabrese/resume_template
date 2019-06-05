require("./styles.scss");

import Coordinator from "./actions/coordinator";
import Instructions from "./actions/instructions";

new Coordinator();
const interactionInstructions = new Instructions(".left .instructions");
const printInstructions = new Instructions(".right .instructions");

setTimeout(() => {
  interactionInstructions.in();
}, 2000);

setTimeout(() => {
  printInstructions.in();
}, 2700);

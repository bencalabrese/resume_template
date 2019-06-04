require("./styles.scss");

import Coordinator from "./actions/coordinator";
import Instructions from "./actions/instructions";

new Coordinator();
const instructions = new Instructions();

setTimeout(() => {
  instructions.in();
}, 2000);

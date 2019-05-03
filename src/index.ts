require("./styles.scss");

import Profile from "./actions/profile";
import Chevrons from "./actions/chevrons";
import History from "./actions/history";

new Profile();
const chevrons = new Chevrons();
const history = new History();

setTimeout(() => {
  history.lower();
}, 1000);

setTimeout(() => {
  history.raise();
}, 3000);

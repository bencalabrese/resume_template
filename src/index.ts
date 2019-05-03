require("./styles.scss");

import Profile from "./actions/profile";
import Chevrons from "./actions/chevrons";
import History from "./actions/history";

const profile = new Profile();
const chevrons = new Chevrons();
const history = new History();

setTimeout(() => {
  history.lower();
}, 1000);

setTimeout(() => {
  const main: HTMLElement = document.querySelector("main");
  main.classList.add("wide-left");
}, 4000);

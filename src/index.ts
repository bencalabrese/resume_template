require("./styles.scss");

import Profile from "./actions/profile";
import Chevrons from "./actions/chevrons";
import History from "./actions/history";

const profile = new Profile();
const chevrons = new Chevrons();
const history = new History();

setTimeout(() => {
  const main: HTMLElement = document.querySelector("main");
  main.classList.add("expanded-profile");
  history.lower();
}, 1000);

require("./styles.scss");

import Collapsible from "./actions/collapsible";

const collapsibles: ReadonlyArray<Collapsible> = Array.from(
  <NodeListOf<HTMLElement>>document.querySelectorAll(".collapsible"),
  element => new Collapsible(element)
);

const [contact, skills, education] = collapsibles;

setTimeout(() => {
  contact.collapse();
  education.collapse();
}, 1000);

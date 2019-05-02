import Collapsible from "./collapsible";
import { without } from "lodash";

export default class Profile {
  private readonly collapsibles: Collapsible[];

  constructor() {
    this.collapsibles = Array.from(
      <NodeListOf<HTMLElement>>document.querySelectorAll(".collapsible"),
      element => new Collapsible(element)
    );
  }

  expand(selector: string): void {
    const [target] = this.collapsibles.filter(collapsible =>
      collapsible.matches(selector)
    );
    target.expand();
    without(this.collapsibles, target).forEach(collapsible =>
      collapsible.collapse()
    );
  }
}

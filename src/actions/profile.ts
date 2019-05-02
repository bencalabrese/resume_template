import Stretchable from "./stretchable";
import { without } from "lodash";

export default class Profile {
  private readonly stretchables: Stretchable[];

  constructor() {
    this.stretchables = Array.from(
      <NodeListOf<HTMLElement>>document.querySelectorAll(".stretchable"),
      element => new Stretchable(element)
    );
  }

  expand(selector: string): void {
    const [target] = this.stretchables.filter(stretchable =>
      stretchable.matches(selector)
    );
    target.expand();
    without(this.stretchables, target).forEach(stretchable =>
      stretchable.collapse()
    );
  }
}

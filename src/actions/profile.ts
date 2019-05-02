import Stretchable from "./stretchable";
import { separate } from "./utils";

export default class Profile {
  private readonly stretchables: Stretchable[];

  constructor() {
    this.stretchables = Array.from(
      <NodeListOf<HTMLElement>>document.querySelectorAll(".stretchable"),
      element => new Stretchable(element)
    );
  }

  expand(selector: string): void {
    const [hit, misses] = separate(this.stretchables, stretchable =>
      stretchable.matches(selector)
    );

    hit.expand();
    misses.forEach(stretchable => stretchable.collapse());
  }

  normalize(): void {
    this.stretchables.forEach(stretchable => stretchable.normalize());
  }
}

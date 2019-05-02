import Stretchable from "./stretchable";
import { without } from "lodash";

export default class Profile {
  private readonly stretchables: Stretchable[];

  constructor() {
    this.stretchables = Array.from(
      <NodeListOf<HTMLElement>>document.querySelectorAll(".stretchable"),
      element => new Stretchable(element)
    );

    this.stretchables.forEach(this.attachHandler.bind(this));
  }

  private attachHandler(stretchable: Stretchable): void {
    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      this.expand(stretchable);
    };
    stretchable.overlay.addEventListener("click", handleClick.bind(this));
  }

  expand(target: Stretchable): void {
    target.expand();
    without(this.stretchables, target).forEach(stretchable =>
      stretchable.collapse()
    );
  }

  normalize(): void {
    this.stretchables.forEach(stretchable => stretchable.normalize());
  }
}

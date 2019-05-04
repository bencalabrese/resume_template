import { without } from "lodash";
import Stretchable from "./stretchable";

export default class Profile {
  private readonly stretchables: Stretchable[];

  constructor() {
    this.stretchables = Array.from(
      <NodeListOf<HTMLElement>>document.querySelectorAll(".stretchable"),
      element => new Stretchable(element)
    );

    this.stretchables.forEach(this.attachStretchableHandler.bind(this));
    this.attachGlobalHandler();
  }

  private attachGlobalHandler(): void {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).matches(".profile *")) {
        this.normalize();
      }
    };
    document.body.addEventListener("click", handleClick.bind(this));
  }

  private attachStretchableHandler(stretchable: Stretchable): void {
    const handleClick = (event: MouseEvent) => {
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

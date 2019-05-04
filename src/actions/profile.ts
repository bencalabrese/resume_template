import { without } from "lodash";
import Stretchable from "./stretchable";

export default class Profile {
  private readonly main: HTMLElement = document.querySelector("main");
  private readonly leftColumn: HTMLElement = document.querySelector(
    ".left-column"
  );
  private readonly rightColumn: HTMLElement = document.querySelector(
    ".right-column"
  );
  readonly stretchables: Stretchable[];

  constructor() {
    this.stretchables = Array.from(
      <NodeListOf<HTMLElement>>(
        document.querySelectorAll(".profile .stretchable")
      ),
      element => new Stretchable(element)
    );
  }

  private minimize(): void {
    this.leftColumn.classList.remove("grow-horizontally");
    this.rightColumn.classList.remove("reduce-horizontally");

    // setTimeout is more consistent than transitionend
    setTimeout(() => {
      this.main.classList.remove("expanded-profile");
      this.stretchables.forEach(stretchable => stretchable.normalize());
    }, 1000);
  }

  maximize(): void {
    this.main.classList.add("expanded-profile");

    // setTimeout is more consistent than transitionend
    setTimeout(() => {
      this.leftColumn.classList.add("grow-horizontally");
      this.rightColumn.classList.add("reduce-horizontally");
    }, 1000);
  }

  expand(target: Stretchable): void {
    target.expand();
    without(this.stretchables, target).forEach(stretchable =>
      stretchable.collapse()
    );
  }

  normalize(): void {
    this.minimize();
  }
}

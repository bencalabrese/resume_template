import { without } from "lodash";
import ProfileExpansion from "../utils/profile_expansion";
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

    this.fixWidth(".app-academy .info");
    this.fixWidth(".sf-state .info");
  }

  private fixWidth(selector: string): void {
    let el: HTMLElement = document.querySelector(selector);
    el.style.maxWidth = `${el.scrollWidth}px`;
  }

  private minimize(): void {
    this.main.classList.add("reverse");
    this.main.classList.remove("expanded-profile");

    // setTimeout is more consistent than transitionend
    setTimeout(() => {
      this.stretchables.forEach(stretchable => stretchable.normalize());
    }, ProfileExpansion.reverseDelay(1));
  }

  maximize(): void {
    this.main.classList.remove("reverse");
    this.main.classList.add("expanded-profile");
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

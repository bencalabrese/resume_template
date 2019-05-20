import { without } from "lodash";
import ProfileExpansion from "../utils/profile_expansion";
import Stretchable from "./stretchable";

export default class Profile {
  private readonly main: HTMLElement = document.querySelector("main");
  readonly stretchables: Stretchable[];

  private _isMaximized = false;
  get isMaximized(): boolean {
    return this._isMaximized;
  }

  constructor() {
    this.stretchables = Array.from(
      <NodeListOf<HTMLElement>>(
        document.querySelectorAll(".profile .stretchable")
      ),
      element => new Stretchable(element)
    );

    this.fixWidth(".app-academy .info");
    this.fixWidth(".sf-state .info");
    this.fixWidth(".about .info");
  }

  private fixWidth(selector: string): void {
    let el: HTMLElement = document.querySelector(selector);
    el.style.maxWidth = `${el.scrollWidth}px`;
  }

  private minimize(): void {
    this.main.classList.add("reverse");
    this.main.classList.remove("expanded-profile");
    this._isMaximized = false;

    // setTimeout is more consistent than transitionend
    setTimeout(() => {
      this.stretchables.forEach(stretchable => stretchable.normalize());
    }, ProfileExpansion.reverseDelay(1));
  }

  maximize(): void {
    this.main.classList.remove("reverse");
    this.main.classList.add("expanded-profile");
    this._isMaximized = true;
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

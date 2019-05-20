import { without } from "lodash";
import ProfileExpansion from "../utils/profile_expansion";
import Stretchable from "./stretchable";

export default class Column {
  private readonly main: HTMLElement = document.querySelector("main");
  readonly stretchables: Stretchable[];

  private _isMaximized = false;
  get isMaximized(): boolean {
    return this._isMaximized;
  }

  constructor(columnClass: string, private readonly expansionClass: string) {
    this.stretchables = Array.from(
      <NodeListOf<HTMLElement>>(
        document.querySelectorAll(`.${columnClass} .stretchable`)
      ),
      element => new Stretchable(element)
    );
  }

  private minimize(): void {
    this.main.classList.add("reverse");
    this.main.classList.remove(this.expansionClass);
    this._isMaximized = false;

    // setTimeout is more consistent than transitionend
    setTimeout(() => {
      this.stretchables.forEach(stretchable => stretchable.normalize());
    }, ProfileExpansion.reverseDelay(1));
  }

  maximize(): void {
    this.main.classList.remove("reverse");
    this.main.classList.add(this.expansionClass);
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

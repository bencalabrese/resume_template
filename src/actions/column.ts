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

  private get reverseClass(): string {
    return `reverse-${this.expansionClass}`;
  }

  private get forwardClass(): string {
    return `forward-${this.expansionClass}`;
  }

  private minimize(): void {
    this.main.classList.add(this.reverseClass);
    this.main.classList.remove(this.forwardClass);
    this._isMaximized = false;

    // setTimeout is more consistent than transitionend
    setTimeout(() => {
      this.stretchables.forEach(stretchable => stretchable.normalize());
    }, ProfileExpansion.reverseDelay(1));
    setTimeout(() => {
      this.main.classList.remove(this.reverseClass);
    }, ProfileExpansion.totalTime);
  }

  maximize(): void {
    this.main.classList.remove(this.reverseClass);
    this.main.classList.add(this.forwardClass);
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

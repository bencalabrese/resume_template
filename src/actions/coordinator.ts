import { without } from "lodash";
import Stretchable from "./stretchable";
import Profile from "./profile";
import History from "./history";

export default class Coordinator {
  private readonly profile = new Profile();
  private readonly history = new History();
  readonly main: HTMLElement = document.querySelector("main");

  constructor() {
    this.profile.stretchables.forEach(this.attachStretchableHandler.bind(this));

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
    const handleClick = () => {
      this.profile.expand(stretchable);
      this.profile.maximize();
      this.history.lower();
    };
    stretchable.overlay.addEventListener("click", handleClick.bind(this));
  }

  normalize(): void {
    this.profile.normalize();
    this.history.normalize();
  }
}

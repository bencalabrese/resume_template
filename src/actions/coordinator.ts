import Profile from "./profile";
import Stretchable from "./stretchable";
import { throttle } from "lodash";

export default class Coordinator {
  private readonly profile = new Profile();

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
    };
    stretchable.overlay.addEventListener(
      "click",
      throttle(handleClick.bind(this), 50)
    );
  }

  normalize(): void {
    this.profile.normalize();
  }
}

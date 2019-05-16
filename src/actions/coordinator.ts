import Profile from "./profile";
import Stretchable from "./stretchable";
import Lock from "../utils/lock";
import runIf from "../utils/run_if";

export default class Coordinator {
  private readonly profile = new Profile();
  private readonly lock = new Lock<CoordinatorAction>();
  private isProfileExpanded: boolean = false;

  constructor() {
    this.profile.stretchables.forEach(this.attachStretchableHandler.bind(this));

    this.attachGlobalHandler();
  }

  private attachGlobalHandler(): void {
    const handleGlobalClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).matches(".profile *")) {
        this.normalize();
      }
    };

    const locked = this.lock.wrap({
      key: CoordinatorAction.normalize,
      lockedOutKeys: new Set([CoordinatorAction.expandProfileStretchable]),
      callback: handleGlobalClick
    });
    const guarded = runIf(() => this.isProfileExpanded, locked);

    document.body.addEventListener("click", guarded);
  }

  private attachStretchableHandler(stretchable: Stretchable): void {
    const handleProfileStretchableClick = () => {
      this.profile.expand(stretchable);
      this.isProfileExpanded = true;
    };

    const locked = this.lock.wrap({
      key: CoordinatorAction.expandProfileStretchable,
      lockedOutKeys: new Set([CoordinatorAction.normalize]),
      callback: handleProfileStretchableClick
    });

    stretchable.overlay.addEventListener("click", locked);
  }

  normalize(): void {
    this.profile.normalize();
    this.isProfileExpanded = false;
  }
}

enum CoordinatorAction {
  expandProfileStretchable,
  normalize
}

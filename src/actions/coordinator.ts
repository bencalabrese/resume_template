import Profile from "./profile";
import Stretchable from "./stretchable";
import Lock from "../utils/lock";
import runIf from "../utils/run_if";
import ProfileExpansion from "../utils/profile_expansion";

export default class Coordinator {
  private readonly profile = new Profile();
  private readonly lock = new Lock<CoordinatorAction>();

  constructor() {
    this.profile.stretchables.forEach(this.attachStretchableHandler.bind(this));

    this.attachGlobalHandler();
  }

  private attachGlobalHandler(): void {
    const onGlobalClick = runIf(
      () => this.profile.isMaximized,
      this.lock.wrap({
        key: CoordinatorAction.normalize,
        lockedOutKeys: new Set([
          CoordinatorAction.expandProfileStretchable,
          CoordinatorAction.maximizeProfile
        ]),
        duration: ProfileExpansion.totalTime,
        callback: (event: MouseEvent) => {
          if (!(event.target as HTMLElement).matches(".profile *")) {
            this.normalize();
          }
        }
      })
    );

    document.body.addEventListener("click", onGlobalClick);
  }

  private attachStretchableHandler(stretchable: Stretchable): void {
    const expandStretchable = this.lock.wrap({
      key: CoordinatorAction.expandProfileStretchable,
      lockedOutKeys: new Set([CoordinatorAction.normalize]),
      duration: ProfileExpansion.transitionTime,
      callback: () => {
        this.profile.expand(stretchable);
      }
    });
    const maximizeProfile = runIf(
      () => !this.profile.isMaximized,
      this.lock.wrap({
        key: CoordinatorAction.maximizeProfile,
        lockedOutKeys: new Set([CoordinatorAction.normalize]),
        duration: ProfileExpansion.totalTime,
        callback: () => {
          this.profile.maximize();
        }
      })
    );

    stretchable.overlay.addEventListener("click", () => {
      expandStretchable();
      maximizeProfile();
    });
  }

  normalize(): void {
    this.profile.normalize();
  }
}

enum CoordinatorAction {
  expandProfileStretchable,
  maximizeProfile,
  normalize
}

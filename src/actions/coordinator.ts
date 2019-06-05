import Expansion from "../utils/expansion";
import Lock from "../utils/lock";
import History from "./history";
import Profile from "./profile";
import Stretchable from "./stretchable";

export default class Coordinator {
  private readonly profile = new Profile();
  private readonly history = new History();
  private readonly lock = new Lock<CoordinatorAction>();

  constructor() {
    this.profile.stretchables.forEach(
      this.attachProfileStretchableHandler.bind(this)
    );
    this.history.stretchables.forEach(
      this.attachHistoryStretchableHandler.bind(this)
    );

    this.attachGlobalHandler();
  }

  private attachGlobalHandler(): void {
    const onGlobalClick = this.lock.wrap({
      key: CoordinatorAction.normalize,
      lockedOutKeys: new Set([
        CoordinatorAction.expandHistoryStretchable,
        CoordinatorAction.maximizeHistory,
        CoordinatorAction.expandProfileStretchable,
        CoordinatorAction.maximizeProfile
      ]),
      duration: Expansion.totalTime,
      canRun: (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const closeButtonClicked = target.matches(".close");

        const anyMaximized =
          this.profile.isMaximized || this.history.isMaximized;

        return !closeButtonClicked && anyMaximized;
      },
      callback: (event: MouseEvent) => {
        const target = event.target as HTMLElement;

        if (
          this.profile.isMaximized &&
          !target.matches(".profile") &&
          !target.matches(".profile *")
        ) {
          this.profile.normalize();
          this.profile.stretchables.forEach(stretchable => stretchable.pause());
        } else if (
          this.history.isMaximized &&
          !target.matches(".history") &&
          !target.matches(".history *")
        ) {
          this.history.normalize();
          this.history.stretchables.forEach(stretchable => stretchable.pause());
        }
      }
    });

    document.body.addEventListener("click", onGlobalClick);
  }

  private attachProfileStretchableHandler(stretchable: Stretchable): void {
    const expandStretchable = this.lock.wrap({
      key: CoordinatorAction.expandProfileStretchable,
      lockedOutKeys: new Set([
        CoordinatorAction.normalize,
        CoordinatorAction.expandHistoryStretchable,
        CoordinatorAction.maximizeHistory
      ]),
      duration: Expansion.transitionTime,
      canRun: () => true,
      callback: () => {
        this.profile.expand(stretchable);
      }
    });
    const maximizeProfile = this.lock.wrap({
      key: CoordinatorAction.maximizeProfile,
      lockedOutKeys: new Set([
        CoordinatorAction.normalize,
        CoordinatorAction.expandProfileStretchable,
        CoordinatorAction.expandHistoryStretchable,
        CoordinatorAction.maximizeHistory
      ]),
      duration: Expansion.totalTime,
      canRun: () => !this.profile.isMaximized,

      callback: this.profile.maximize.bind(this.profile)
    });

    stretchable.overlay.addEventListener("click", () => {
      expandStretchable();
      maximizeProfile();
    });
  }

  private attachHistoryStretchableHandler(stretchable: Stretchable): void {
    const expandStretchable = this.lock.wrap({
      key: CoordinatorAction.expandHistoryStretchable,
      lockedOutKeys: new Set([
        CoordinatorAction.normalize,
        CoordinatorAction.expandProfileStretchable,
        CoordinatorAction.maximizeProfile
      ]),
      duration: Expansion.transitionTime,
      canRun: () => true,
      callback: () => {
        this.history.expand(stretchable);
      }
    });
    const maximizeHistory = this.lock.wrap({
      key: CoordinatorAction.maximizeHistory,
      lockedOutKeys: new Set([
        CoordinatorAction.normalize,
        CoordinatorAction.expandHistoryStretchable,
        CoordinatorAction.expandProfileStretchable,
        CoordinatorAction.maximizeProfile
      ]),
      duration: Expansion.totalTime,
      canRun: () => !this.history.isMaximized,
      callback: this.history.maximize.bind(this.history)
    });

    stretchable.overlay.addEventListener("click", () => {
      expandStretchable();
      maximizeHistory();
    });
  }
}

enum CoordinatorAction {
  expandHistoryStretchable,
  maximizeHistory,
  expandProfileStretchable,
  maximizeProfile,
  normalize
}

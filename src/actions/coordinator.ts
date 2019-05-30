import Expansion from "../utils/expansion";
import Lock from "../utils/lock";
import runIf from "../utils/run_if";
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
    const onGlobalClick = runIf(
      () => this.profile.isMaximized || this.history.isMaximized,
      this.lock.wrap({
        key: CoordinatorAction.normalize,
        lockedOutKeys: new Set([
          CoordinatorAction.expandHistoryStretchable,
          CoordinatorAction.maximizeHistory,
          CoordinatorAction.expandProfileStretchable,
          CoordinatorAction.maximizeProfile
        ]),
        duration: Expansion.totalTime,
        callback: (event: MouseEvent) => {
          const target = event.target as HTMLElement;

          if (this.profile.isMaximized && !target.matches(".profile *")) {
            this.profile.normalize();
            this.profile.stretchables.forEach(stretchable =>
              stretchable.pause()
            );
          } else if (
            this.history.isMaximized &&
            !target.matches(".history *")
          ) {
            this.history.normalize();
            this.history.stretchables.forEach(stretchable =>
              stretchable.pause()
            );
          }
        }
      })
    );

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
      callback: () => {
        this.profile.expand(stretchable);
      }
    });
    const maximizeProfile = runIf(
      () => !this.profile.isMaximized,
      this.lock.wrap({
        key: CoordinatorAction.maximizeProfile,
        lockedOutKeys: new Set([
          CoordinatorAction.normalize,
          CoordinatorAction.expandProfileStretchable,
          CoordinatorAction.expandHistoryStretchable,
          CoordinatorAction.maximizeHistory
        ]),
        duration: Expansion.totalTime,
        callback: this.profile.maximize.bind(this.profile)
      })
    );

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
      callback: () => {
        this.history.expand(stretchable);
      }
    });
    const maximizeHistory = runIf(
      () => !this.history.isMaximized,
      this.lock.wrap({
        key: CoordinatorAction.maximizeHistory,
        lockedOutKeys: new Set([
          CoordinatorAction.normalize,
          CoordinatorAction.expandHistoryStretchable,
          CoordinatorAction.expandProfileStretchable,
          CoordinatorAction.maximizeProfile
        ]),
        duration: Expansion.totalTime,
        callback: this.history.maximize.bind(this.history)
      })
    );

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

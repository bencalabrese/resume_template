import ProfileExpansion from "./profile_expansion";

export default class Lock<T> {
  private readonly lockedOutKeys = new Set();

  wrap({
    key,
    lockedOutKeys,
    callback
  }: {
    key: T;
    lockedOutKeys: ReadonlySet<T>;
    callback: (...args: any[]) => void;
  }): (...args: any[]) => void {
    return ((...args: any[]) => {
      if (this.lockedOutKeys.has(key)) return;
      this.lockedOutKeys.clear();
      lockedOutKeys.forEach(this.lockedOutKeys.add.bind(this.lockedOutKeys));

      callback(...args);

      setTimeout(
        (() => {
          this.lockedOutKeys.clear();
        }).bind(this),
        ProfileExpansion.totalTime
      );
    }).bind(this);
  }
}

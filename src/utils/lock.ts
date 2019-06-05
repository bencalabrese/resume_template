import { flatten } from "lodash";

export default class Lock<T> {
  private readonly lockouts = new Map<T, ReadonlySet<T>>();

  private get lockedOutKeys(): ReadonlySet<T> {
    const lockoutValues = Array.from(this.lockouts.values()).map(lockouts =>
      Array.from(lockouts)
    );
    return new Set(flatten(lockoutValues));
  }

  wrap({
    key,
    lockedOutKeys,
    duration,
    canRun,
    callback
  }: {
    key: T;
    lockedOutKeys: ReadonlySet<T>;
    duration: number;
    canRun: (...args: any[]) => boolean;
    callback: (...args: any[]) => void;
  }): (...args: any[]) => void {
    return ((...args: any[]) => {
      if (this.lockedOutKeys.has(key)) return;
      if (!canRun(...args)) return;
      this.lockouts.set(key, lockedOutKeys);

      callback(...args);

      setTimeout(
        (() => {
          this.lockouts.delete(key);
        }).bind(this),
        duration
      );
    }).bind(this);
  }
}

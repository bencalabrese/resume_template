export default class Expansion {
  static readonly transitionTime = 1000;
  static readonly stepCount = 3;
  static readonly totalTime = Expansion.transitionTime * Expansion.stepCount;

  static forwardDelay(step: number): number {
    return Expansion.transitionTime * (step - 1);
  }

  static reverseDelay(step: number): number {
    return Expansion.transitionTime * (Expansion.stepCount - step);
  }
}

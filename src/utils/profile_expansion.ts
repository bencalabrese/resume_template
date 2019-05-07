export default class ProfileExpansion {
  static readonly transitionTime = 1500;
  static readonly stepCount = 3;
  static readonly totalTime =
    ProfileExpansion.transitionTime * ProfileExpansion.stepCount;

  static forwardDelay(step: number): number {
    return ProfileExpansion.transitionTime * (step - 1);
  }

  static reverseDelay(step: number): number {
    return (
      ProfileExpansion.transitionTime * (ProfileExpansion.stepCount - step)
    );
  }
}

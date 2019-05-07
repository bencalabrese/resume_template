import ProfileExpansion from "../utils/profile_expansion";

export default class History {
  private readonly rightColumn: HTMLElement = document.querySelector(
    ".right-column"
  );
  private readonly chevrons: HTMLElement = document.querySelector(".chevrons");

  private raise(): void {
    this.rightColumn.classList.add("reverse");
    this.rightColumn.classList.remove("lowered");
    // We have to set this in JS since flex-direction is not affected by the
    // transition property.
    //
    // In terms of timing, setTimeout is more consistent than transitionend.
    setTimeout(() => {
      this.chevrons.classList.remove("vertical");
      // Reset flex-direction a step early. It's trying to keep the positions
      // of the chevrons unchanging, so it needs to bookend the step rather than
      // change consistently.
    }, ProfileExpansion.reverseDelay(2 - 1));
  }

  lower(): void {
    this.rightColumn.classList.remove("reverse");
    this.rightColumn.classList.add("lowered");

    // We have to set this in JS since flex-direction is not affected by the
    // transition property.
    //
    // In terms of timing, setTimeout is more consistent than transitionend.
    setTimeout(() => {
      this.chevrons.classList.add("vertical");
    }, ProfileExpansion.forwardDelay(2));
  }

  normalize(): void {
    this.raise();
  }
}

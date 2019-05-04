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
    }, 1500);
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
    }, 1500);
  }

  normalize(): void {
    this.raise();
  }
}

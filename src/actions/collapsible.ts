export default class Collapsible {
  private readonly originalHeight: number;
  private readonly headingHeight: number;

  constructor(private readonly el: HTMLElement) {
    const heading = this.el.querySelector("h3");
    this.headingHeight = heading.scrollHeight;

    this.originalHeight = this.el.scrollHeight;
    // Explicitly set the flex basis to allow smooth transitions.
    this.flexBasis = this.originalHeight;
  }

  private set flexBasis(val: number) {
    this.el.style.flexBasis = `${val}px`;
  }
  private set flexGrow(val: number) {
    this.el.style.flexGrow = `${val}`;
  }

  collapse(): void {
    this.el.classList.add("collapsed");
    this.flexBasis = this.headingHeight;
    this.flexGrow = 0;
  }
}

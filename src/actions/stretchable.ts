export default class Stretchable {
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

  private addClass(className: string): void {
    this.el.classList.add(className);
  }

  private removeClass(className: string): void {
    this.el.classList.remove(className);
  }

  get overlay(): HTMLElement {
    return this.el.querySelector(".overlay");
  }

  matches(selector: string): boolean {
    return this.el.matches(selector);
  }

  collapse(): void {
    this.addClass("collapsed");
    this.addClass("has-overlay");
    this.removeClass("expanded");
    this.flexBasis = this.headingHeight;
  }

  expand(): void {
    this.addClass("expanded");
    this.removeClass("collapsed");
    this.removeClass("has-overlay");
    this.flexBasis = this.originalHeight;
  }

  normalize(): void {
    this.addClass("has-overlay");
    this.removeClass("expanded");
    this.removeClass("collapsed");
    this.flexBasis = this.originalHeight;
  }
}

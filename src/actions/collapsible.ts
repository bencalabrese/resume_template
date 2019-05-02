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

  private toggleClass(className: string): void {
    const classList = this.el.classList;
    if (classList.contains(className)) {
      classList.remove(className);
    } else {
      classList.add(className);
    }
  }

  matches(selector: string): boolean {
    return this.el.matches(selector);
  }

  collapse(): void {
    this.toggleClass("collapsed");
    this.flexBasis = this.headingHeight;
    this.flexGrow = 0;
  }

  expand(): void {
    this.toggleClass("expanded");
  }
}

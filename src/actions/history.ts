export default class History {
  private readonly container: HTMLElement;

  constructor() {
    this.container = document.querySelector(".right-column");
  }

  private raise(): void {
    this.container.classList.remove("lowered");
  }

  lower(): void {
    this.container.classList.add("lowered");
  }

  normalize(): void {
    this.raise();
  }
}

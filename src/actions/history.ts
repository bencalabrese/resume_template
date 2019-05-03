export default class Chevrons {
  private readonly container: HTMLElement;

  constructor() {
    this.container = document.querySelector(".history");
  }

  lower(): void {
    this.container.classList.add("lowered");
  }

  raise(): void {
    this.container.classList.remove("lowered");
  }
}

export default class Instructions {
  private readonly instructions: HTMLElement;

  constructor(selector: string) {
    this.instructions = document.querySelector(selector);
    const close = this.instructions.querySelector(".close");
    close.addEventListener("click", this.out.bind(this));
  }

  private out(): void {
    this.instructions.classList.remove("in");
  }

  in(): void {
    this.instructions.classList.add("in");
  }
}

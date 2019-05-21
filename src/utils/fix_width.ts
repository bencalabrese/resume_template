export function fixWidth(selector: string): void {
  let el: HTMLElement = document.querySelector(selector);
  el.style.maxWidth = `${el.scrollWidth}px`;
}

export function fixAllWidths(selector: string): void {
  document.querySelectorAll(selector).forEach((el: HTMLElement) => {
    el.style.maxWidth = `${el.scrollWidth}px`;
  });
}

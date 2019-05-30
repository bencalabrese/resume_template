export function fixWidths(selector: string): void {
  document.querySelectorAll(selector).forEach((el: HTMLElement) => {
    el.style.maxWidth = `${el.scrollWidth}px`;
  });
}

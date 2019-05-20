export default function fixWidth(selector: string): void {
  let el: HTMLElement = document.querySelector(selector);
  el.style.maxWidth = `${el.scrollWidth}px`;
}

import Expansion from "../utils/expansion";

export default class Stretchable {
  private static readonly headingHeight = document.querySelector("h3")
    .scrollHeight;

  private readonly originalHeight: number;
  private readonly isInitiallyGrown: boolean;
  private readonly videos: HTMLVideoElement[];

  constructor(private readonly el: HTMLElement) {
    this.originalHeight = this.el.offsetHeight;
    this.isInitiallyGrown =
      parseFloat(getComputedStyle(this.el).flexGrow) !== 0;
    this.videos = Array.from(el.querySelectorAll("video"));

    // Explicitly set the flex basis to allow smooth transitions.
    this.normalizeHeight();
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

  private normalizeHeight(): void {
    // If the element naturally grows to fit its space, the flex basis should be
    // set to be smaller than its initially computed height. If the flex basis
    // is set higher than that, items inside will not properly grow.
    if (this.isInitiallyGrown) {
      this.flexBasis = Stretchable.headingHeight;
    } else {
      this.flexBasis = this.originalHeight;
    }
  }

  private play(): void {
    this.videos.forEach(video => video.play());
  }

  pause(): void {
    this.videos.forEach(video => video.pause());
  }

  get overlay(): HTMLElement {
    return this.el.querySelector(".overlay");
  }

  matches(selector: string): boolean {
    return this.el.matches(selector);
  }

  collapse(): void {
    this.addClass("collapsed");
    this.removeClass("expanded");
    this.flexBasis = Stretchable.headingHeight;
    this.pause();
  }

  expand(): void {
    this.addClass("expanded");
    this.removeClass("collapsed");
    this.normalizeHeight();
    setTimeout(this.play.bind(this), Expansion.transitionTime);
  }

  normalize(): void {
    this.removeClass("expanded");
    this.removeClass("collapsed");
    this.normalizeHeight();
  }
}

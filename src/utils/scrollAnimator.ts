// Scroll Animation Utility
export class ScrollAnimator {
  private observer: IntersectionObserver | null = null;

  constructor() {
    this.init();
  }

  private init(): void {
    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.addAnimateClassToAll();
      return;
    }

    this.setupObserver();
    this.observeElements();
  }

  private setupObserver(): void {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          // Unobserve animated elements for performance
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);
  }

  private observeElements(): void {
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el: Element) => {
      this.observer?.observe(el);
    });
  }

  private addAnimateClassToAll(): void {
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el: Element) => el.classList.add('animate'));
  }
}

// Initialize the scroll animator
export function initScrollAnimator(): void {
  new ScrollAnimator();
}
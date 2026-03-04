/**
 * Scroll animation utilities
 */

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

/**
 * Initialize fade-in animations on scroll
 */
export function initScrollAnimations(options: ScrollAnimationOptions = {}): void {
  const {
    threshold = 0.1,
    rootMargin = '0px',
  } = options;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.style.opacity = '1';
        target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold, rootMargin });

  // Apply scroll animation to section elements
  document.querySelectorAll('.pillar, .how-step, .impact-num, .aud-card').forEach((el) => {
    const element = el as HTMLElement;
    element.style.opacity = '0';
    element.style.transform = 'translateY(24px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Stagger children animation
  document.querySelectorAll('.audience-grid .aud-card, .how-steps .how-step').forEach((el, i) => {
    const element = el as HTMLElement;
    element.style.transitionDelay = `${i * 0.08}s`;
  });
}

/**
 * Add smooth scroll behavior to anchor links
 */
export function initSmoothScroll(): void {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const anchorElement = anchor as HTMLAnchorElement;
      const href = anchorElement.getAttribute('href');
      if (href && href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

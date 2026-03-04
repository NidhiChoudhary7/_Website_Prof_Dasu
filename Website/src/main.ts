import './styles/main.css'
import { initScrollAnimations, initSmoothScroll } from './utils/animations'
import { initFormHandling } from './utils/forms'

/**
 * Initialize the application
 */
function init(): void {
  // Initialize smooth scroll behavior
  initSmoothScroll()
  
  // Initialize scroll animations
  initScrollAnimations({
    threshold: 0.1,
    rootMargin: '0px'
  })
  
  // Initialize form handling
  initFormHandling()
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}

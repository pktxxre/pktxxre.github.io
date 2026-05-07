import { useCallback } from 'react';

export default function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    if (window.innerWidth > 1024) {
      const container = document.querySelector('.content-sections');
      if (container) {
        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const left = rect.left - containerRect.left + container.scrollLeft;
        container.scrollTo({ left, behavior: 'smooth' });
      }
    } else {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return scrollToSection;
}
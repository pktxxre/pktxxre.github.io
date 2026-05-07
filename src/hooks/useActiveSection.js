import { useEffect, useState } from 'react';

export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (window.innerWidth > 1024) {
      // Horizontal mode: find the section whose snap position is closest to scrollLeft
      const container = document.querySelector('.content-sections');
      if (!container) return;

      const update = () => {
        const { scrollLeft } = container;
        const scrollPadding = parseInt(getComputedStyle(container).scrollPaddingLeft) || 72;
        let closestId = sectionIds[0];
        let closestDist = Infinity;

        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;
          const dist = Math.abs(scrollLeft - (el.offsetLeft - scrollPadding));
          if (dist < closestDist) {
            closestDist = dist;
            closestId = id;
          }
        }
        setActiveId(closestId);
      };

      container.addEventListener('scroll', update, { passive: true });
      update();
      return () => container.removeEventListener('scroll', update);
    }

    // Vertical / mobile mode: IntersectionObserver against viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, threshold: [0.5], rootMargin: '-10% 0px -80% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
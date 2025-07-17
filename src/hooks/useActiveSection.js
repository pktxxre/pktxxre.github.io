import { useEffect, useState } from 'react';

export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find all sections that are currently intersecting
        const intersectingSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.id,
            rect: entry.boundingClientRect,
            entry
          }));

        if (intersectingSections.length > 0) {
          // Sort by which section appears first in the DOM (using sectionIds order)
          const sortedSections = intersectingSections.sort((a, b) => {
            const indexA = sectionIds.indexOf(a.id);
            const indexB = sectionIds.indexOf(b.id);
            return indexA - indexB;
          });

          // Find the section whose top edge is closest to the top of the viewport
          // but prioritize sections that have passed their "start" threshold
          const viewportTop = 0;
          const activeSection = sortedSections.reduce((closest, current) => {
            const currentTop = current.rect.top;
            const closestTop = closest ? closest.rect.top : Infinity;
            
            // If current section's top is above viewport (meaning we've scrolled past it)
            // and it's closer to the top than our current closest, use it
            if (currentTop <= viewportTop + 100) { // 100px buffer for smooth transition
              if (!closest || currentTop > closestTop) {
                return current;
              }
            } else if (!closest || (currentTop < closestTop && currentTop > viewportTop)) {
              return current;
            }
            
            return closest;
          }, null);

          if (activeSection) {
            setActiveId(activeSection.id);
          }
        }
      },
      {
        threshold: [0, 0.1, 0.5],
        rootMargin: '-10% 0px -80% 0px' // This creates the cutoff behavior
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
import { useEffect, useState } from 'react';

export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const scrollContainer = document.querySelector('main'); // the scrolling area

    const observer = new IntersectionObserver(
      entries => {
        const sorted = [...entries].sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const mostVisible = sorted.find(entry => entry.isIntersecting);
        if (mostVisible) {
          setActiveId(mostVisible.target.id);
        }
      },
      {
        root: scrollContainer,
        rootMargin: '0px 0px -60% 0px',
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

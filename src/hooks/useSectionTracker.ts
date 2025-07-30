import { useEffect } from "react";

export function useSectionTracker(sectionIds: string[]) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            window.history.replaceState(null, "", `/#${id}`);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    // Chờ đến khi tất cả phần tử có mặt trong DOM
    const waitForElements = () => {
      const notReady = sectionIds.some((id) => !document.getElementById(id));

      if (notReady) {
        // Tiếp tục chờ cho đến khi tất cả phần tử xuất hiện
        requestAnimationFrame(waitForElements);
        return;
      }

      // Khi tất cả phần tử đã sẵn sàng, tiến hành observe
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
        }
      });
    };

    waitForElements();

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);
}

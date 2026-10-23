export const initHeader = () => {
    const header = document.getElementById('main-header');
    const sentinel = document.getElementById('scroll-sentinel')
    const btn = document.getElementById('menu-open');
    const menu = document.getElementById('mobile-menu');

    if (header && sentinel) {
        if ((window as any).headerObserver) {
            (window as any).headerObserver.disconnet();
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    header.classList.add('is-scrolled');
                } else {
                    header.classList.remove('is-scrolled');
                }
            },
            { threshold: 0 }
        );
        observer.observe(sentinel);
        (window as any).headerObserver = observer;
    }
    if (btn && menu) {
        (btn as HTMLButtonElement).onclick = () => {
            const isHidden = menu.classList.contains('hidden');
            menu.classList.toggle('hidden');
            btn.setAttribute('aria-expanded', String(isHidden));
        }
    }
};
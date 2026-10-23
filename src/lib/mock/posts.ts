export interface Author {name: string; slug: string; avatar?: string}
export interface Category {name: string; slug: string}
export interface Tag { name: string; slug: string}

export interface Post {
    id: string;
    slug: string;
    locale: 'en' | 'es';
    translationKey: string;
    title: string;
    excerpt: string;
    body: string;
    cover?: string;
    publishedAt: string;
    readingMinutes: number;
    author: Author;
    category: Category;
    tags: Tag[];
}

export const posts: Post[] = [
    {
        id: '1',
        slug: 'core-web-vitals-2026',
        locale: 'en',
        translationKey: 'cwv-2026',
        title: 'Core Web Vitals in 2026: What Actually Moves the Needle',
        excerpt: 'A practical breakdown of the metrics that still matter - and ones teams over-optimise for.',
        body: `
            <p>Web performance is no longer just about loading speed. In 2026, Google's Core Web Vitals focus heavily on interactivity and visual stability.</p>
            <h2>1. Largest Contentful Paint (LCP)</h2>
            <p>LCP measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading. We recommend using modern frameworks like Astro to ship less JavaScript and improve LCP drastically.</p>
            <h2>2. Interaction to Next Paint (INP)</h2>
            <p>INP replaced First Input Delay (FID) a few years ago. It measures the responsiveness of a webpage. If your site is bogged down by heavy third-party scripts, your INP will suffer.</p>
            <blockquote>"Performance is a feature, not an afterthought."</blockquote>
        `,
        cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        publishedAt: '2026-02-10',
        readingMinutes: 7,
        category: {slug: 'seo', name: 'SEO'},
        tags: [{slug: 'performance', name: 'Performance'}, {slug: 'web-dev', name: 'Web Dev'}],
        author: {slug: 'digicomp-team', name: 'DigiComp Team'},
    },
    {
        id: '2',
        slug: 'digital-marketing-roi',
        locale: 'en',
        translationKey: 'dmr',
        title: 'How to Measure Digital Marketing ROI Effectively',
        excerpt: 'Stop looking at vanity metrics. Learn how to track the metrics that actually impact your bottom line.',
        body: `
            <p>Marketing budgets are tight. Knowing exactly where your money is going and what it's returning is crucial for survival.</p>
            <h2>Vanity vs. Actionable Metrics</h2>
            <p>Pageviews and likes are nice, but they don't pay the bills. You need to track Customer Acquisition Cost (CAC) and Lifetime Value (LTV).</p>
            <h2>Attribution Models</h2>
            <p>First-click vs. last-click attribution can tell completely different stories. Use data-driven attribution to get the full picture of your customer journey.</p>
        `,
        cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        publishedAt: '2026-01-15',
        readingMinutes: 5,
        category: {slug: 'marketing', name: 'Marketing'},
        tags: [{slug: 'analytics', name: 'Analytics'}, {slug: 'strategy', name: 'Strategy'}],
        author: {slug: 'jane-doe', name: 'Jane Doe'},
    },
    {
        id: '3',
        slug: 'core-web-vitals-2026-es',
        locale: 'es',
        translationKey: 'cwv-2026',
        title: 'Core Web Vitals en 2026: Lo que realmente importa',
        excerpt: 'Un análisis práctico de las métricas que aún importan y las que los equipos optimizan en exceso.',
        body: `
            <p>El rendimiento web ya no se trata solo de la velocidad de carga. Las métricas de Google se centran ahora en la interactividad.</p>
            <h2>1. Largest Contentful Paint (LCP)</h2>
            <p>LCP mide el rendimiento de carga. Debe ocurrir en menos de 2.5 segundos. Recomendamos usar frameworks modernos como Astro para reducir el JavaScript.</p>
            <h2>2. Interaction to Next Paint (INP)</h2>
            <p>INP mide la capacidad de respuesta. Si tu sitio está lleno de scripts pesados, tu INP se verá afectado.</p>
        `,
        cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        publishedAt: '2026-02-10',
        readingMinutes: 7,
        category: { slug: 'seo', name: 'SEO' },
        tags: [{ slug: 'rendimiento', name: 'Rendimiento' }, { slug: 'desarrollo-web', name: 'Desarrollo Web' }],
        author: { slug: 'digicomp-team', name: 'Equipo DigiComp' },
    }
]
export const SITE = {
    name: 'DigiComp',
    tagline: 'Web, Marketing & SEO for global growth',
    description: 'DigiComp is a digital growth studio helping ambitious brands build high-performing websites, data-driven marketing campaigns, and search visibility that compounds over time.',
    url: 'https://digicomp.pages.dev',
    email: 'neverstopdreaming414@gmail.com',
    whatsapp: '62895422855697',
    socials: {
        instagram: 'https://www.instagram.com/dospey_/'
    },
    address: {
        en: 'RW 02, Gambir, Central Jakarta, Special Capital Region of Jakarta, 10110, Indonesia',
        es: 'RW 02, Gambir, Central Yakarta, Región Capital Especial de Yakarta, 10110, Indonesia',
    }
}as const;

export const NAV = [
    {key: 'nav.home', href: '/'},
    {key: 'nav.about', href: '/about'},
    {key: 'nav.services', href: '/services' },
    {key: 'nav.blog', href: '/blog'},
    {key: 'nav.contact', href: 'contact'},
] as const;

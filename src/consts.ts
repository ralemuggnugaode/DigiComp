export const SITE = {
    name: 'DigiComp',
    tagline: 'Web, Marketing & SEO for global growth',
    description: 'DigiComp is a digital growth studio helping ambitious brands build high-performing websites, data-driven marketing campaigns, and search visibility that compounds over time.',
    url: 'https://digicomp.pages.dev',
    email: 'anzocraft414@gmail.com',
    whatsapp: '62895422855697',
    socials: {
        instagram: 'https://www.instagram.com/dospey_/'
    },
}as const;

export const NAV = [
    {key: 'nav.home', href: '/'},
    {key: 'nav.about', href: '/about'},
    {key: 'nav.services', href: '/services' },
    {key: 'nav.blog', href: '/blog'},
    {key: 'nav.contact', href: 'contact'},
] as const;

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
        en: '123 Digital Avenue, Suite 400, Silicon Valley, CA 94025',
        es: '123 Avenida Digital, Suite 400, Silicon Valley, CA 94025',
    }
}as const;

export const NAV = [
    {key: 'nav.home', href: '/'},
    {key: 'nav.about', href: '/about'},
    {key: 'nav.services', href: '/services' },
    {key: 'nav.blog', href: '/blog'},
    {key: 'nav.contact', href: 'contact'},
] as const;

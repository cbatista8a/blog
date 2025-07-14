export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
    target?: '_self' | '_blank';
    rel?: 'follow' | 'nofollow' | 'noopener' | 'noreferrer';
};

export type SocialLink = Link & {
    icon: 'codepen' | 'dev' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'medium' | 'x-twitter';
};

export type Hero = {
    title?: string;
    text?: string;
    avatar?: Image;
    backgroundImage?: Image;
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
    textBtn: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    primaryNavLinks?: Link[];
    secondaryNavLinks?: Link[];
    socialLinks?: SocialLink[];
    personalLinks?: SocialLink[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    logo: {
        src: '/logo_carlos_batista_8a.png',
        alt: 'Carlos Batista profile photo'
    },
    title: 'Carlos Batista 8a',
    description: 'Experto en tiendas PrestaShop y Desarrollo web con PHP',
    image: {
        src: '',
        alt: 'Carlos Batista profile photo'
    },
    primaryNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Contacto',
            href: '/contact'
        }
    ],
    secondaryNavLinks: [
        {
            text: 'Terminos de Uso',
            href: '/terms'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Deja tu Reseña',
            href: 'https://n8n.cubadevops.com/form/send-review',
            target: '_blank',
        }
    ],
    socialLinks: [
        {
            text: 'Conecta en Linkedin',
            href: 'https://www.linkedin.com/mynetwork/discovery-see-all/?usecase=PEOPLE_FOLLOWS&followMember=carlosbatista8a',
            icon: 'linkedin',
            target: '_blank'
        },
        {
            text: 'Mira mi GitHub',
            href: 'https://github.com/cbatista8a',
            icon: 'github',
            target: '_blank'
        }
    ],
    personalLinks: [
        {
            href: '/blog',
            text: 'Blog',
            icon: 'dev'
        },
        {
            href: 'https://linkedin.com/in/carlosbatista8a',
            text: 'Linkedin',
            icon: 'linkedin',
            target: '_blank',
        },
        {
            href: 'https://github.com/cbatista8a',
            text: 'GitHub',
            icon: 'github',
            target: '_blank',
        }
    ],
    subscribe: {
        title: 'Deja tu email',
        text: 'Y te aviso cuando publique un nuevo artículo en el blog.',
        formUrl: 'https://n8n.cubadevops.com/webhook/newsletter-optin',
        textBtn: 'Avísame'
    },
    postsPerPage: 5
};

export default siteConfig;

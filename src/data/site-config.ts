export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
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
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    logo: {
        src: '/logo.svg',
        alt: 'Carlos Batista profile photo'
    },
    title: 'Carlos Batista Blog',
    description: 'Blog Personal sobre desarrollo de software y tecnología',
    image: {
        src: '',
        alt: 'Este Blog usa Astro.js'
    },
    primaryNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        // {
        //     text: 'About',
        //     href: '/about'
        // },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Company',
            href: 'https://cubadevops.com'
        }
    ],
    secondaryNavLinks: [
        // {
        //     text: 'About',
        //     href: '/about'
        // },
        {
            text: 'Terminos de Uso',
            href: '/terms'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Company',
            href: 'https://cubadevops.com'
        }
    ],
    socialLinks: [
        {
            text: 'Mira mi GitHub',
            href: 'https://github.com/cbatista8a',
            icon: 'github'
        },
        {
            text: 'Sigueme en Instagram',
            href: 'https://instagram.com/carlosbatista8a',
            icon: 'instagram'
        }
    ],
    hero: {
        title: 'Blog de Carlos Batista',
        text: `Aquí hablamos sobre desarrollo de software y tecnologia en general.
        Y si buscas un experto en Prestashop o Desarrollo Web con PHP, estoy aquí para colaborar en proyectos desafiantes y llevar tu negocio al siguiente nivel.`,
        avatar: {
            src: '/avatar.jpg',
            alt: 'Carlos Batista'
        },
        backgroundImage: {
            src: '/hero.webp'
        }
    },
    subscribe: {
        title: 'Suscríbete a nuestra Newsletter',
        text: 'Un Post semanal directamente en tu inbox.',
        formUrl: '#',
        textBtn: 'Suscríbete'
    },
    postsPerPage: 5
};

export default siteConfig;

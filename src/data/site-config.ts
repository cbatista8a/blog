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
            text: 'Deja tu Reseña',
            href: 'https://n8n.cubadevops.com/form/send-review'
        },
    ],
    socialLinks: [
        {
            text: 'Conecta en Linkedin',
            href: 'https://linkedin.com/in/cbatista8a',
            icon: 'linkedin'
        },
        {
            text: 'Mira mi GitHub',
            href: 'https://github.com/cbatista8a',
            icon: 'github'
        }
    ],
    personalLinks: [
        {
            href: '/blog',
            text: 'Blog',
            icon: 'dev'
        },
        {
            href: 'https://linkedin.com/in/cbatista8a',
            text: 'Linkedin',
            icon: 'linkedin'
        },
        {
            href: 'https://github.com/cbatista8a',
            text: 'GitHub',
            icon: 'github'
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
        title: 'Suscríbete a mi Newsletter',
        text: 'Un resumen semanal directamente en tu inbox',
        formUrl: 'https://n8n.cubadevops.com/webhook/newsletter-optin',
        textBtn: 'Suscribirme'
    },
    postsPerPage: 5
};

export default siteConfig;

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
        alt: 'CubaDevOps logo'
    },
    title: 'CubaDevOps Blog',
    description: 'Astro.js and Tailwind CSS theme for blogging',
    image: {
        src: '/ovidius-preview.jpg',
        alt: 'CubaDevOps Blog using Astro.js'
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
            text: 'Contact',
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
            text: 'Terms of Service',
            href: '/terms'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Company',
            href: 'https://cubadevops.com'
        }
    ],
    socialLinks: [
        {
            text: 'Go to GitHub repo',
            href: 'https://github.com/cubadevops',
            icon: 'github'
        },
        {
            text: 'Follow on Instagram',
            href: 'https://instagram.com/cubadevops',
            icon: 'instagram'
        }
    ],
    hero: {
        title: 'Bienvenido a mi Blog',
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
        formUrl: 'https://',
        textBtn: 'Suscríbete'
    },
    postsPerPage: 5
};

export default siteConfig;

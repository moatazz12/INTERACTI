// src/lib/dictionaries.ts

// Définir le type Dict spécifique à chaque module
export type ContactDict = {
  contactTitle: string;
  breadcrumbHome: string;
  breadcrumbContact: string;
  respondTime: string;
  helpText: string;
  formTitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  sendButton: string;
};

export type FAQDict = {
  faqTitle: string;
  breadcrumbHome1: string;
  breadcrumbFAQ: string;
  faqHeading: string;
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
 };

 export type AboutDict = {
  about: {
    hero: {
      activeUnderlineTitle:string,
      title: string;
      breadcrumbHome: string,
      breadcrumbAbout:string
    };
    aboutSection: {
      title: string;
      teamImage: {
        alt: string;
        title: string;
        description: string;
      };
      cards: {
        vision: {
          title: string;
          description: string;
          imageAlt: string;
        };
        expertise: {
          title: string;
          description: string;
          imageAlt: string;
        };
        commitment: {
          title: string;
          description: string;
          imageAlt: string;
        };
      };
    };
    whoWeAre: {
      title: string;
      subtitle: string;
      description: string;
    };
    whyChoose: {
      title: string;
      subtitle: string;
      description: string;
      reasons: {
        title: string;
        description: string;
      }[];
    };
    stats: {
      title: string;
      subtitle: string;
      description: string;
      metrics: {
        src:string;
        number: string;
        label: string;
      }[];
    };
    coreValues: {
      title: string;
      subtitle: string;
      values: {
        title: string;
        description: string;
      }[];
    };
    connect: {
      title: string;
      subtitle: string;
      description: string;
      cta: string;
      socialMedia: {
        linkedin: {
          title: string;
          subtitle: string;
          url: string;
        };
        twitter: {
          title: string;
          subtitle: string;
          url: string;
        };
        instagram: {
          title: string;
          subtitle: string;
          url: string;
        };
        facebook: {
          title: string;
          subtitle: string;
          url: string;
        };
      };
    };
  };
};

export type FooterDict = {
  description: string;
  contactUs: string;
  quickLinks: string;
  ourServices: string;
  contactTitle: string;
  follow: string;
  copyright: string;
  terms: string;
  links: { label: string; slug: string }[];  
  services: { label: string; slug: string }[];
};

export type NavBarDict = {
  home: string;
  services: string;
  projects: string;
  blog: string;
  contact: string;
  about: string;
};

import { Locale } from './i18n';

const dictFiles: Record<Locale, Record<string, () => Promise<any>>> = {
  en: {
    contact: () => import('./dictionaries/en/contact.json').then((m) => m.default),
    faq: () => import('./dictionaries/en/faq.json').then((m) => m.default),
    about: () => import('./dictionaries/en/about.json').then((m) => m.default),
    footer: () => import('./dictionaries/en/footer.json').then((m) => m.default),
    navbar: () => import('./dictionaries/en/navbar.json').then((m) => m.default)  


  },
  fr: {
    contact: () => import('./dictionaries/fr/contact.json').then((m) => m.default),
    faq: () => import('./dictionaries/fr/faq.json').then((m) => m.default),
    about: () => import('./dictionaries/fr/about.json').then((m) => m.default),
    footer: () => import('./dictionaries/fr/footer.json').then((m) => m.default),
    navbar: () => import('./dictionaries/fr/navbar.json').then((m) => m.default)  
    

  },
};

export async function getDict(locale: Locale, module: string): Promise<any> {
  return dictFiles[locale]?.[module]?.() ?? dictFiles.en.contact();
}

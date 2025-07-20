// src/lib/dictionaries.ts
import { cache } from 'react';

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
export type ProcessStep = {
  number: number;
  img: string;
  alt: string;
  title: string;
  desc: string;
  blob: boolean;
  nowrap: boolean;
  gridRow: number;     
  gridColumn: number;
};

export type ReviewItem = {
  icon: 'ReviewIcon1' | 'ReviewIcon2'; 
  textLine1: string;
  textLine2: string;
};
export type Project = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};
export type Testimonial = {
  id: number;
  rating: number;
  text: string;
  author: string;
  position: string;
  avatar: string;
};
export type HomeDict = {
  hero: {
    title: string;
    trafficLabel: string;
    trafficValue: string;
    trafficChange: string;
    descriptionBefore: string;
    services: string[];
    descriptionAfter: string;
  };
  about: {
    partnersTitle: string;
    partnersSubtitle: string;
    subheading: string;
    heading: string;
    intro: string;
    descriptionBefore: string;
    services: string[];
    descriptionAfter: string;
    button: string;
  };
  services: {
    subtitle: string;
    title: string;
    cards: {
      title: string;
      text: string;
      image?: string;
      number: string;
      wide?: boolean;
    }[];
    button: string;
  };
  seoSection: {
    subheading: string;
    heading: string;
    description: string;
    button: string;
    imageAlt: string;
  };
  processSection: {
    subtitle: string;
    title: string;
    intro: string;
    steps: ProcessStep[];
    reviews: ReviewItem[];
  };
  projectsection: {
    subtitle: string;
    title: string;
    projects: Project[];
  };
  FeedbackSection: {
    subtitle: string;
    title: string;
    testimonials: Testimonial[];
  };
  newsBlog: {
    sectionTitle: string;
    sectionSubtitle: string;
    buttonLabel: string;
    featuredArticle: {
      id: number;
      date: string;
      month: string;
      category: string;
      title: string;
      author: string;
      comments: number;
      image: string;
    };
    sideArticles: {
      id: number;
      date: string;
      month: string;
      category: string;
      title: string;
      author: string;
      comments: number;
      image: string;
    }[];
    
  };
   mapSection: {
    title: string;
    address: string;
    phone: string;
    email: string;
    mapSrc: string;
    hours: {
      days: string;
      hours: string;
    }[];
    labels: {
    address: string;
    phone: string ;
    email: string ;
    hours: string;
  } };
};

export interface ServiceDict {
  subServices?: ServiceDict[];
  breadcrumbHome: string;
  currentService:string,
  slugTechnique : string,
  slug: string;
  title: string;
  image: string;
  hero: {
    title: string;
    icon: string;
    heading: string;
    subheading: string;
    introParagraphs: string[];
  };
  whatIs: {
    icon: string;
    title: string;
    descriptionParagraphs: string[];
  };
  offersTitle?: string;
  offersIntro: string;
  offers: {
    icon: string;
    title: string;
    description: string;
  }[];
  specializedServicesTitle: string;
  specializedServicesIntro: string;
  specializedServices: {
    icon: string;
    title: string;
    description: string;
    points: string[];
    spanFull?: boolean;
  }[];
  whyChooseIntro: string;
  whyChoose: {
    title: string;
    intro: string;
    points: {
      title: string;
      description: string;
    }[];
    footer: string;
  };
  method: {
    title: string;
    intro: string;
    steps: {
      title: string;
      description: string;
      points: string[];
    }[];
    footer: string;
  };
  faqsection: {
    title: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  };
}

export interface ServiceDataDict {
  services: {
    [key: string]: {
      category: string;
      subservices: SubService[];
    };
  };
  sidebar: {
    allServices: string;
    help: {
      title: string;
      phone: string;
      number: string;
    };
  };
}

export interface SubService {
  slug: string;
  title: string;
}
export interface ServiceRequestDict {
  ServiceRequestTitle: string;
  breadcrumbHome: string;
  breadcrumbServiceRequest: string;
  respondTime: string;
  helpText: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  companyPlaceholder: string;
  PhonePlaceholder: string;
  requestChoose: string;
  messagePlaceholder: string;
  sendButton: string;
}
 


import { Locale } from './i18n';

const dictFiles: Record<Locale, Record<string, () => Promise<any>>> = {
  en: {
    contact: () => import('./dictionaries/en/contact.json').then((m) => m.default),
    faq: () => import('./dictionaries/en/faq.json').then((m) => m.default),
    about: () => import('./dictionaries/en/about.json').then((m) => m.default),
    footer: () => import('./dictionaries/en/footer.json').then((m) => m.default),
    navbar: () => import('./dictionaries/en/navbar.json').then((m) => m.default),
    home: () => import('./dictionaries/en/Home.json').then((m) => m.default),
    services: () => import('./dictionaries/en/services.json').then((m) => m.default),
    serviceData: () => import('./dictionaries/en/servicesData.json').then((m) => m.default),
    serviceRequest: () => import('./dictionaries/en/serviceRequest.json').then((m) => m.default),

  },

  fr: {
    contact: () => import('./dictionaries/fr/contact.json').then((m) => m.default),
    faq: () => import('./dictionaries/fr/faq.json').then((m) => m.default),
    about: () => import('./dictionaries/fr/about.json').then((m) => m.default),
    footer: () => import('./dictionaries/fr/footer.json').then((m) => m.default),
    navbar: () => import('./dictionaries/fr/navbar.json').then((m) => m.default), 
    home: () => import('./dictionaries/fr/Home.json').then((m) => m.default),
    services: () => import('./dictionaries/fr/services.json').then((m) => m.default),
    serviceData: () => import('./dictionaries/fr/servicesData.json').then((m) => m.default),
    serviceRequest: () => import('./dictionaries/fr/serviceRequest.json').then((m) => m.default),
  },
};

export const getDict = cache(async (locale: Locale, module: string): Promise<any> => {
  return dictFiles[locale]?.[module]?.() ?? dictFiles.en.contact();
});
export type ServiceData = {
  slug: string;
  title: string;
  image?: string;

  hero?: {
    icon: string ;
    heading: string;
    subheading: string;
    introParagraphs: string[];
  };

  whatIs?: {
    icon?: string ;
    title: string;
    descriptionParagraphs: string[];
  };

  offersIntro?: string;
  offers?: {
    icon?: string ;
    title: string;
    description: string;
  }[];
  specializedServicesTitle?: string;
  specializedServicesIntro?: string;
  specializedServices?: {
    icon?: string ;
    title: string;
    description: string;
    spanFull?: boolean;
    points: string[];
  }[];

  whyChoose?: {
    title: string;
    intro: string;
    footer?: string;
    points: {
      title: string;
      description: string;
      spanFull?: boolean;
    }[];
  };

  method?: {
    title?: string;
    intro?: string;
    footer?: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  faqsection:{
  title:string;
  faqs: {
    question: string;
    answer: string;
  }[];
}
};

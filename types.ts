
export interface Review {
  id: string;
  userName: string;
  userInitials: string;
  rating: number;
  content: string;
  date: string;
}

export interface Course {
  id: string;
  title: string;
  thumbnail: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  description: string;
  category: string;
  longDescription?: string;
  curriculum?: { title: string; duration: string }[];
  duration?: string;
  students?: number;
  rating?: number;
  reviewCount?: number;
  reviews?: Review[];
}

export interface DigitalProduct {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  // Added 'Printable' to support products defined in constants.ts
  type: 'Ebook' | 'Template' | 'Planner' | 'Toolkit' | 'Printable';
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  content: string;
  role: string;
}

export interface NavLink {
  name: string;
  path: string;
  icon?: any;
}

export interface SiteContent {
  home: {
    hero: {
      tagline: string;
      headline: string;
      subheadline: string;
      primaryCTA: { text: string; link: string };
      secondaryCTA: { text: string; link: string };
    };
    offerings: {
      headline: string;
      items: { title: string; desc: string; iconName: string; colorClass: string }[];
    };
    featuredCourses: {
      headline: string;
      subheadline: string;
      viewAllText: string;
    };
    whyChoose: {
      headline: string;
      points: { title: string; desc: string }[];
      creatorNote: {
        title: string;
        sub: string;
        quote: string;
        ctaText: string;
      };
    };
    testimonials: {
      headline: string;
      subheadline: string;
    };
    finalCTA: {
      headline: string;
      subheadline: string;
      primaryCTA: { text: string; link: string };
      secondaryCTA: { text: string; link: string };
    };
  };
}

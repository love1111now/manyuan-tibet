// src/data/types.ts

export interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Scripture {
  title: string;
  content: string;
}

export interface DeityData {
  id: string;
  name: string;
  title: string;
  themeColor: string;
  imagePath: string;
  ritualImagePath: string;
  description: string;
  plans: Plan[];
  faqs: FAQ[];
  scriptures: Scripture[];
}
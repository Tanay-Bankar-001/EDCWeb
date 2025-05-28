export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  type: 'upcoming' | 'past';
  location?: string;
  registrationLink?: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  event: string;
  width: number;
  height: number;
}

export interface Initiative {
  id: number;
  title: string;
  description: string;
  year: string;
  icon: string;
}
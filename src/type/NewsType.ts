export interface Navtype {
  slug: string;
  title: string;
  topicId: string;
  url: string;
  scrapable: boolean;
}

export interface lNewsType {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

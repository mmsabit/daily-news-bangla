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

export interface ArticleType {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string| null;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

export interface MainNewsType {
  title: string;
  curationId: string;
  curationType: string;
  link: string | null;
  count: number;
  articles: ArticleType[];
}

export interface catagoryType {
  success: boolean;
  count: number;
  cachedAt: string;
  slug: string;
  topicId: string;
  title: string;
  page: number;
  pageCount: number;
  data: ArticleType[];
}

export interface newsItemType {
  type: string;
  url: string;
  width: number;
  height: number;
  caption: string;
  altText: string;
  copyrightHolder: string;
  text:string;
}

export interface Book {
  isbn: string;
  title: string;
  authors: string[];
  published: Date;
  subtitl?: string;
  rating?: number;
  thumbnails?: Thumbnails[];
  descriptions: string;
}

export interface Thumbnails {
  url: string;
  title?: string;
}

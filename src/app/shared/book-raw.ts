export interface BookRaw {
      isbn: string;
      title: string;
      authors: string[];
      published: string;
      subtitl?: string;
      rating?: number;
      thumbnails?: ThumbnailsRaw[];
      descriptions: string;
    }
    
    export interface ThumbnailsRaw {
      url: string;
      title?: string;
    }
    
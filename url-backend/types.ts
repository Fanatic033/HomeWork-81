
export interface UrlT {
  _id: string;
  shortUrl: string;
  originalUrl: string;
}

export interface UrlMutation {
  shortUrl: string;
  originalUrl: string;
}
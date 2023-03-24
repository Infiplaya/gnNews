export interface News {
    status:       string;
    totalResults: number;
    articles:     Article[];
}

export interface Article {
    source:      Source;
    author:      string;
    title:       string;
    description: string | null;
    url:         string;
    urlToImage:  string | null;
    publishedAt: Date;
    content:     null;
}

export interface Source {
    id:   ID;
    name: Name;
}

export enum ID {
    GoogleNews = "google-news",
}

export enum Name {
    GoogleNews = "Google News",
}

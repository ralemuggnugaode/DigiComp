const STRAPI_URL = import.meta.env.PUBLIC_STRAP_URL || 'http://localhost:1337';

export interface StrapiResponse<T> {
    data: T[];
    meta: any;
}

export interface StrapiPost {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    excerpt: string;
    body: string;
    cover: {url: string; formats: any} | null;
    readingMinutes: number;
    publishedAt: string;
    locale: 'en' | 'es';
    author: { name: string; slug: string; avatar: {url: string} | null };
    category: { name: string; slug: string };
    tags: {name: string; slug: string}[];
}

export async function fetchAPI<T>(path: string, urlParams: Record<string, string> = {}): Promise<StrapiResponse<T>> {
    const query = new URLSearchParams(urlParams).toString();
    const res = await fetch(`${STRAPI_URL}/api/${path}?${query}`);
    
    if (!res.ok) {
        const errorData = await res.json();
        console.error('Detail Error dari Strapi:', JSON.stringify(errorData, null, 2));
        throw new Error(`Strapi error: ${res.statusText}`);
    }
    return res.json();
}
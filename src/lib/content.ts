import { posts, type Post } from "./mock/posts";

export async function getPosts(locale: 'en' | 'es'): Promise<Post[]> {
    return posts.filter(p => p.locale === locale).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getPost(locale: 'en' | 'es', slug: string): Promise<Post | undefined> {
    return posts.find(p => p.locale === locale && p.slug === slug);
}

export async function getRelatedPosts(post: Post, limit = 2): Promise<Post[]> {
    const related = posts.filter(p => p.locale === post.locale && p.category.slug === post.category.slug && p.id !== post.id);
    return related.slice(0, limit);
}

export async function getTranslatedPost(post: Post, targetlocale: 'en' | 'es'): Promise <Post | undefined > {
    return posts.find(p => p.translationKey === post.translationKey && p.locale === targetlocale);
}
import type { Post } from "./mock/posts";
import { fetchAPI, type StrapiPost } from "./strapi";
const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL || 'http://localhost:1337';

function mapStrapiPost(strapiPost: StrapiPost): Post {
    return {
        id: strapiPost.documentId,
        translationKey: strapiPost.documentId,
        slug: strapiPost.slug,
        locale: strapiPost.locale,
        title: strapiPost.title,
        excerpt: strapiPost.excerpt,
        body: strapiPost.body,
        cover: strapiPost.cover ? `${STRAPI_URL}${strapiPost.cover.url}` : undefined,
        publishedAt: strapiPost.publishedAt,
        readingMinutes: strapiPost.readingMinutes || 5,
        author: {
            name: strapiPost.author?.name || 'Unknown',
            slug: strapiPost.author?.slug || 'Unknown',
            avatar: strapiPost.author?.avatar ? `${STRAPI_URL}${strapiPost.author.avatar.url}` : undefined,
        },
        category: {
            name: strapiPost.category?.name || 'Uncategorized',
            slug: strapiPost.category?.slug || 'Uncategorized',
        },
        tags: strapiPost.tags?.map(tag => ({ name: tag.name, slug: tag.slug })) || [],
    };
}

const populateParams = {
    'populate[author][fields][0]': 'name',
    'populate[author][fields][1]': 'slug',
    'populate[author][populate][avatar][fields][0]': 'url',
    
    'populate[category][fields][0]': 'name',
    'populate[category][fields][1]': 'slug',
    
    'populate[tags][fields][0]': 'name',
    'populate[tags][fields][1]': 'slug',
    
    'populate[cover][fields][0]': 'url',
};

export async function getPosts(locale: 'en' | 'es'): Promise<Post[]> {
    const res = await fetchAPI<StrapiPost>('articles', {
        locale: locale,
        ...populateParams,
        'sort[0]': 'publishedAt:desc',
    });
    return res.data.map(mapStrapiPost);
}

export async function getPost(locale: 'en' | 'es', slug: string): Promise<Post | undefined> {
    const res = await fetchAPI<StrapiPost>('articles', {
        locale: locale,
        'filters[slug][$eq]': slug,
        ...populateParams,
    });
    const post = res.data[0];
    return post ? mapStrapiPost(post) : undefined;
}

export async function getRelatedPosts(post: Post, limit = 3): Promise<Post[]> {
    const res = await fetchAPI<StrapiPost>('articles', {
        locale: post.locale,
        'filters[category][slug][$eq]': post.category.slug,
        'filters[documentId][$ne]': post.id,
        ...populateParams,
        'pagination[limit]': limit.toString(),
    });
    return res.data.map(mapStrapiPost);
}

export async function getTranslatedPost(post: Post, targetlocale: 'en' | 'es'): Promise <Post | undefined > {
    const res = await fetchAPI<StrapiPost>('articles', {
        locale: targetlocale,
        'filters[documentId][$eq]': post.translationKey,
        ...populateParams,
    });
    const translated = res.data[0];
    return translated ? mapStrapiPost(translated) : undefined;
}
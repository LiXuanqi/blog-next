export type BlogPost ={
    slug: string
    title: string
    date: string
    tags: string[]
  }

import { allPosts } from "contentlayer/generated"

export function getAllPosts(): BlogPost[] {
    return allPosts.map(post => {
        return {
            slug: post.slug,
            title: post.title,
            date: post.date,
            tags: ["FAKE", "TODO"]
        };
    });

}
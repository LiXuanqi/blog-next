import Link from "next/link"
import Image from 'next/image'
import { formatDate } from "@/lib/utils"
import { BlogPost } from "@/lib/post-utils"
import testImg from "content/images/test.jpg"



interface BlogListProps {
  posts: BlogPost[]
}

function BlogCard(post: BlogPost) {
  return (

        <div key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="grid grid-cols-[196px_1fr] gap-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={testImg}
                alt={post.title}
                fill
                className="object-cover"
                sizes="196px"
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{formatDate(post.date)}</p>
              <h2 className="text-xl font-medium hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-sm text-muted-foreground">This a my description. long and long.</p>
            </div>
          </Link>
          <div className="mt-6 border-b" />
        </div>
  );
}

export function BlogList({posts}: BlogListProps) {
  return (
    <div className="max-w-[900px] mx-auto space-y-6">
      {posts.map((post) => (
        BlogCard(post)
      ))}
    </div>
  )
}

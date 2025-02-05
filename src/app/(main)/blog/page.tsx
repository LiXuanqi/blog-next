import { BlogList } from "@/components/blog-list"
import { getAllPosts } from "@/lib/post-utils"

export default function BlogPage() {
  return (
    <div className="container py-8 px-4">
      <BlogList posts={getAllPosts()} />
    </div>
  )
}


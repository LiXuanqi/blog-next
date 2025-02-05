import { MDX_COMPONENTS } from '@/components/mdx-components'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import { notFound } from 'next/navigation'


export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export default async function Page({ params} : {
  params: Promise<{slug: string}>
})  {
  const slug = (await params).slug;
  // Find the post for the current page.
  const post = allPosts.find((post) => post.slug === slug)

  // 404 if the post does not exist.
  if (!post) notFound()

  return (
      <MDXContent code={post.body.code} components={MDX_COMPONENTS} />
  )
}

// Client component to handle MDX rendering
function MDXContent({ code, components }: { code: string, components: any }) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}

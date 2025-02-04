import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import remarkGfm from 'remark-gfm'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    slug: { 
      type: 'string', 
      resolve: (post) => {
        const removeFileExtension = (filename: string) => filename.replace(/\.mdx$/, '');
        return removeFileExtension(post._raw.sourceFileName);
      }
    },
  },
}))

export default makeSource({ contentDirPath: 'content', documentTypes: [Post], 
    mdx: {
        remarkPlugins: [remarkGfm],
    }
})
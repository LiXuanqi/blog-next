import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files'
import remarkGfm from 'remark-gfm'
import rehypeShiki from '@shikijs/rehype'

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

const EducationItem = defineNestedType(() => ({
  name: 'EducationItem',
  fields: {
    name: { type: 'string', required: true },
    time: { type: 'string', required: true },
    desc: { type: 'list', of: {type: 'string'}, required: true }
  },
}))

const WorkExperienceItem = defineNestedType(() => ({
  name: 'WorkExperienceItem',
  fields: {
    position: { type: 'string', required: true },
    time: { type: 'string', required: true },
    company: { type: 'string', required: true },
    location: { type: 'string', required: true },
    desc: { type: 'list', of: {type: 'string'}, required: true }
  },
}))

const ProjectItem = defineNestedType(() => ({
  name: 'ProjectItem',
  fields: {
    name: { type: 'string', required: true },
    desc: { type: 'list', of: {type: 'string'}, required: true }
  },
}))

export const Resume = defineDocumentType(() => ({
  name: 'Resume',
  filePathPattern: `resume.yaml`,
  isSingleton: true,
  contentType: 'data',
  fields: {
    name: { type: 'string', required: true },
    address: { type: 'string', required: true },
    tel: { type: 'string', required: true },
    email: { type: 'string', required: true },
    github: { type: 'string', required: true },
    linkedin: { type: 'string', required: true },
    blog: { type: 'string', required: true },
    education: {
      type: 'list',
      of: EducationItem,
      required: true
    },

    // skills: {
    //   type: 'list',
    //   of: EducationItem,
    //   required: true
    // },

    workExperience: {
      type: 'list',
      of:WorkExperienceItem,
      required: true
    },

    projects: {
      type: 'list',
      of:ProjectItem,
      required: true
    },
  },
  computedFields: {
  },
}))

export default makeSource({ contentDirPath: 'content', documentTypes: [Post, Resume], 
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [rehypeShiki, {themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          }}]
        ]
    }
})


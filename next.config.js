/* eslint-disable @typescript-eslint/no-var-requires */
const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')

module.exports = {
  reactStrictMode: true
}
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx']
})

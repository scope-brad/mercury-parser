const BloggerExtractor = {
  domain: 'blogspot.com',
  content: {
    // Blogger is insane and does not load its content
    // initially in the page, but it's all there
    // in noscript
    selectors: [
      '.post-content noscript',
    ],

    // Selectors to remove from the extracted content
    clean: [
    ],

    // Convert the noscript tag to a div
    transforms: {
      'noscript': 'div'
    },
  },

  author: {
    selectors: [
      '.post-author-name'
    ]
  },

  title: {
    selectors: [
      'h2.title',
    ]
  },

  datePublished: {
    selectors: [
      'span.publishdate',
    ]
  }
}

export default BloggerExtractor

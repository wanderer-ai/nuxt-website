module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Wanderer.ai',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'reactive context, open source, privacy by design, no registering or payments, runs completely offline' },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@wanderer_ai' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Reactive chatbot builder for the web' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'reactive context, open source, privacy by design, no registering or payments, runs completely offline' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://wanderer.ai/preview.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {


  },

  // Unfortunalely the automatic crawler will not work for the blog section
  // So I have to define every static blog route in here
  generate: {
    routes: [
      '/blog/why-i-built-wanderer.ai',
      '/blog/why-a-conversation-does-not-fit-into-a-tree',
      '/blog/conversations-in-relational-databases',
      '/blog/the-power-of-logic-graphs-in-chatbot-conversations'
    ]
  },

  modules: [
    // {src: 'bootstrap-vue/nuxt'},
    // ['nuxt-matomo', { matomoUrl: '//matomo.steampixel.de/', siteId: 2 }]
    '@nuxt/content'
  ],
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  purgeCSS: {
    whitelist: [
      'bg-red', 'bg-red-dark', 'bg-green', 'bg-green-dark', 'bg-yellow', 'bg-orange', 'bg-blue', 'bg-blue-dark', 'bg-grey', 'bg-black', 'bg-white',
      'border-red', 'border-red-dark', 'border-green', 'border-green-dark', 'border-yellow', 'border-orange', 'border-blue', 'border-blue-dark', 'border-grey', 'border-black', 'border-white',
      'from-blue-dark', 'to-blue-dark', 'from-blue', 'to-blue',
      'from-red-dark', 'to-red-dark', 'from-red', 'to-red',
      'from-orange', 'to-orange', 'from-yellow', 'to-yellow',
      'from-green-dark', 'to-green-dark', 'from-green', 'to-green'
    ],
  },
}

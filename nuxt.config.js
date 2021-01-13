module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Wanderer.ai',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Wanderer.ai will leverage chatbot context to the next level by storing and executing its artificial intellicenge (AI) inside a logic graph.' }
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
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // },

    // Bootstrap is too big for one vendor: Split it up
    // https://github.com/nuxt/nuxt.js/pull/2687
    // vendor: ['bootstrap-vue'],
    // maxChunkSize: 300000 // value in octet

    /*analyze: true,
    // or
    analyze: {
      analyzerMode: 'static'
    }*/

  },
  modules: [
    // {src: 'bootstrap-vue/nuxt'},
    // ['nuxt-matomo', { matomoUrl: '//matomo.steampixel.de/', siteId: 2 }]
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

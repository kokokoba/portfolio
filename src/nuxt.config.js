const { resolve } = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Portfolio',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Custom Loading
  */
  loading: 'components/loading.vue',
  /*
  ** Build configuration
  */
  // buildDir: '../functions/nuxt',←プラグインが動かなくなる
  build: {
    // アプリケーション内で一度だけインクルードする
    vendor: [
      'firebase',
      'gsap'
    ],
    /*
    ** Run ESLint on save
    */
    extend(config) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~plugins/firebase',
    '~plugins/vue-scrollto',
    '~plugins/scroll'
  ],
  modules: [
    // provide path to the file with resources
    ['nuxt-sass-resources-loader', './assets/main.scss'],
    '@nuxtjs/pwa',
    'nuxt-buefy'
  ],
  manifest: {
    name: 'portfolio',
    lang: 'ja',
    icons: [
      {
        "src": "/img/icons/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/img/icons/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    background_color: "#000000",
    theme_color: "#4DBA87"
  },
  css: [
    // node.js module but we specify the lang
    { src: 'bulma', lang: 'sass' },
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
    // Css file in the project
    // It is important to give an absolute path
    resolve(__dirname, 'css/main.css')
  ]
}


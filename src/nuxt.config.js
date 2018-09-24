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
  modules: [
    // provide path to the file with resources
    ['nuxt-sass-resources-loader', './assets/main.scss'],
    '@nuxtjs/pwa'

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
  ],
  plugins: [
    '~plugins/buefy'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  buildDir: '../functions/nuxt',
  build: {
    // publicPath: '/assets/',
    // extractCSS: true,
    // babel: {
    //   presets: [
    //     'env'
    //   ],
    //   plugins: [
    //     ['transform-runtime', {
    //       polyfill: true,
    //       regenerator: true
    //     }],
    //   ],
    // },
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Cached Components
  */
  cache: true,
  /*
  ** Custom Loading
  */
  loading: 'components/loading.vue'
}


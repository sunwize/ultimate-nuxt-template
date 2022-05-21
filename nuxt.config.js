export default {
    target: 'server',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'ultimate-nuxt-template',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/style/tailwind.css'
    ],

    // Nuxt image config
    image: {
        domains: [
            'images.unsplash.com',
            'nuxtjs.org'
        ],
        alias: {
            unsplash: 'https://images.unsplash.com'
        }
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxt/postcss8',
        '@nuxtjs/composition-api/module',
        'nuxt-vite'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxt/image'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {}
            }
        }
    }
}

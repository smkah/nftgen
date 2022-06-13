// /** @type {import('next').NextConfig} */
// module.exports = {
//     reactStrictMode: true,
// }

const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'

    const env = {
        CLOUDINARY_NAME: 'dfescw1yr',
        CLOUDINARY_API_KEY: '828625778529431',
        CLOUDINARY_API_SECRET: 'kArBq0uZQI6rO4h_QFJWznclM_4',
        PUBLIC_ASSETS_URL: (() => {
            if (isDev) return 'public/assets'
            if (isProd) {
                return 'assets'
            }
        })()
    }

    return {
        reactStrictMode: true,
        env,
    }
}
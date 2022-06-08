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
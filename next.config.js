const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    const isStaging =
        phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

    const env = {
        RESTURL_SPEAKERS: (() => {
            if (isDev) return 'http://localhost:3000'
            if (isProd) {
                return 'https://nftgen-nine.vercel.app/'
            }
            if (isStaging) return 'http://localhost:11639'
            return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
        })(),
        RESTURL_SESSIONS: (() => {
            if (isDev) return 'http://localhost:3000'
            if (isProd) return 'https://nftgen-nine.vercel.app/'
            if (isStaging) return 'http://localhost:11639'
            return 'RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)'
        })(),
    }

    return {
        // reactStrictMode: true,
        env,
    }
}
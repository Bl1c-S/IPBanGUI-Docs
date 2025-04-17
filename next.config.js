

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})

module.exports = withNextra({
    async redirects() {
        return [
            {
                source: '/updates/last',
                destination: '/updates/v1.4.0/v1.4.1',
                permanent: true,
            },
            {
                source: '/update/last',
                destination: '/updates/v1.4.0/v1.4.1',
                permanent: true,
            },
        ]
    },
});
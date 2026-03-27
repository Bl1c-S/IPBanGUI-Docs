import nextra from 'nextra'

const withNextra = nextra({
    contentDirBasePath: '/',
    search: { codeblocks: false }
})

export default withNextra({
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
module.exports = {
    siteMetadata: {
        title: `GDG Algiers CTF 2022`,
        description: `GDG Algiers is organizing the first edition of the GDG Algiers CTF. An edition realized with the collaboration with Shellmates Club, it involves a jeopardy CTF with lot of fun and special challenges made by the CyberErudites team`,
        author: `@GDG_Algiers`,
        siteUrl: 'https://ctf.gdgalgiers.com',
        keywords: [
            'GDG',
            'CTF',
            'Algiers',
            'Algeria',
            'CyberSecurity',
            'Hacking',
            'Capture The Flag',
            'Cryptography',
            'Web',
            'Reverse Engineering',
            'Exploitation',
            'Attack',
        ],
        image: 'https://ibb.co/JkQh6V4',
    },
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-next-seo`,
        `gatsby-plugin-offline`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Cairo', 'Open Sans', 'Roboto', 'Montserrat'],
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-tailwind-styled-components`,
                short_name: `tailwindsc`,
                start_url: `/`,
                background_color: `#141414`,
                theme_color: `#141414`,
                display: `standalone`,
                icon: `docs/logo.svg`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                emitWarning: true,
                failOnError: false,
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                exclude: [
                    'node_modules',
                    'bower_components',
                    '.cache',
                    'public',
                ],
                stages: ['develop', 'build-javascript'],
            },
        },
    ],
}

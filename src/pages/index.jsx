import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const INDEX_SEO = {
    title: 'Home',
    description:
        'GDG Algiers CTF 2022 is a CTF organized by GDG Algiers. An edition realized with the collaboration with Shellmates Club, it involves a jeopardy CTF with lot of fun and special challenges made by the CyberErudites team',
    openGraph: {
        url: 'https://ctf.gdgalgiers.com/',
        title: 'GDG Algiers CTF 2022',
        description:
            'GDG Algiers CTF 2022 is a CTF organized by GDG Algiers. An edition realized with the collaboration with Shellmates Club, it involves a jeopardy CTF with lot of fun and special challenges made by the CyberErudites team',
        images: [
            {
                url: 'https://i.ibb.co/1vRR8nD/Devfest21-1.png',
                width: 800,
                height: 600,
                alt: 'GDG Algiers CTF ',
            },
        ],
        site_name: 'GDG Algiers CTF',
    },
}

export default function Home() {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author
                        keywords
                        siteUrl
                        image
                    }
                }
            }
        `
    )

    return (
        <Layout
            seo={{
                twitter: {
                    handle: site.siteMetadata.author,
                    cardType: 'summary_large_image',
                },
                metaTags: [
                    {
                        property: 'keywords',
                        content: site.siteMetadata.keywords.join(','),
                    },
                ],
                ...INDEX_SEO,
            }}
        >
            <section id="contact">
                <Footer />
            </section>
        </Layout>
    )
}

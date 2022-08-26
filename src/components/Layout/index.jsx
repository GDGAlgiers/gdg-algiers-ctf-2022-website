import React from 'react'
import SEO from '../SEO'

const Layout = ({ seo, children, className }) => {
    return (
        <>
            <SEO {...seo} />
            <main className={className}>{children}</main>
        </>
    )
}

export default Layout

import React from 'react';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';
import Cross from './../images/cross.jpeg';

export default function SEO({children, location, description, title, image}) {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)
    return (
        <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
            <html lang="en" />
            <title>{title}</title>
            <link rel="icon" type="image/jpeg" href={Cross} />
            <link rel="alternate icon" href={Cross} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta charSet="utf-8"/>
            <meta name="description" content={site.siteMetadata.description} />
            {children}
        </Helmet>
    )
}
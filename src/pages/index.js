import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import useBaseUrl from "@docusaurus/core/lib/client/exports/useBaseUrl";
import Link from "@docusaurus/core/lib/client/exports/Link";

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)} style={{minHeight: '30rem'}}>
            <div className="container">
                <h1 className="hero__title">BAV@WPP Developer</h1>
                <p className="hero__subtitle">Integrate BAV into your workflows and applications through our API and
                    embed products.</p>
            </div>
        </header>
    );
}


const features = [
    {
        title: 'API',
        description: (
            <>
                Access the BAV API to retrieve data about brands across markets, years and for audiences. The API
                provides endpoints for
                the full range of BAV research- and metadata.
            </>
        ),
        link: '/docs/2.x/intro',
    },
    {
        title: 'Embed',
        description: (
            <>
                Integrate BAV reports into your application without having to recreate everything by using our
                customizable embed integrations.
            </>
        ),
        link: '/docs/2.x/embed/intro',
    },
    {
        title: 'AI Agents',
        description: (
            <>
                Supercharge your AI agents with BAV data. Our MCP server allows you to integrate BAV data into your AI
                applications, enabling them provide insights based on BAV data.
            </>
        ),
        link: '/docs/2.x/embed/intro',
    }
];

function Feature({imageUrl, title, description, link}) {
    const imgUrl = useBaseUrl(imageUrl);
    const linkUrl = useBaseUrl(link);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
            {linkUrl && (
                <Link style={{fontWeight: 600}} href={linkUrl}>Read more ›</Link>
            )}
        </div>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Developer documentation for BAV@WPP and its API and suite of tools.">
            <HomepageHeader/>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row" style={{justifyContent: 'center'}}>
                                {features.map(({title, imageUrl, description, link}) => (
                                    <Feature
                                        key={title}
                                        title={title}
                                        imageUrl={imageUrl}
                                        description={description}
                                        link={link}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

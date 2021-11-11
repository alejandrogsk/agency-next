import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';
import dataSpanish from '../content/spanish/blog.json';
import dataEnglish from '../content/english/blog.json';
import Layout from '../components/layout/Layout';


export default function Blog() {
    let router = useRouter();

    let content;
    if(router.locale === 'es'){
        content = dataSpanish;
    } else {
        content = dataEnglish;
    }

    return (
        <Layout>
        <Head>
            <title>{content['meta-title']}</title>
            <meta name={content.meta} content=""/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <h1>{content.title}</h1>
            <p>{content.content}</p>
        </Layout>
    )
}


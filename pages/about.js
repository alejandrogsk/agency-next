import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function About() {
    let message = "Whe are a multicultural group"

    return (
        <>
            <Head>
            <title>i18n Example</title>
            <meta name="description" content=""/>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>{message}</h1>
        </>
    )
}

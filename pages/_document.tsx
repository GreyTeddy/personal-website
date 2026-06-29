import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
    render() {
        return (
            < Html lang="en" >
                <Head>
                    <meta name="description" content="Dionysios Ntouka — Site Reliability Engineer at C3 AI. Personal portfolio and projects." />
                    <meta property="og:title" content="Dionysios Ntouka" />
                    <meta property="og:description" content="Site Reliability Engineer at C3 AI. Personal portfolio and projects." />
                    <meta property="og:type" content="website" />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html >
        )
    }
}

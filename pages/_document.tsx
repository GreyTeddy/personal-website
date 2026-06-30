import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import theme from '../lib/theme'

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="Dionysios Ntouka — Site Reliability Engineer at C3 AI. Personal portfolio and projects." />
                    <meta property="og:title" content="Dionysios Ntouka" />
                    <meta property="og:description" content="Site Reliability Engineer at C3 AI. Personal portfolio and projects." />
                    <meta property="og:type" content="website" />
                    <style>{`
                        :root[data-theme="dark"] {
                            background: ${theme.colors.eerieBlack};
                        }
                        :root[data-theme="dark"],
                        body.chakra-ui-dark {
                            --bg: ${theme.colors.eerieBlack};
                            --section-title-color: ${theme.colors.platinum};
                            --link-color: ${theme.colors.yellowCrayola};
                            --drawer-bg: ${theme.colors.yellowCrayola};
                        }
                        :root[data-theme="light"] {
                            background: ${theme.colors.platinum};
                        }
                        :root[data-theme="light"],
                        body.chakra-ui-light {
                            --bg: ${theme.colors.platinum};
                            --section-title-color: ${theme.colors.jet};
                            --link-color: ${theme.colors.steelBlue};
                            --drawer-bg: ${theme.colors.steelBlue};
                        }
                        body {
                            visibility: hidden;
                        }
                        body.chakra-ui-dark,
                        body.chakra-ui-light {
                            visibility: visible;
                        }
                    `}</style>
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function() {
                                    try {
                                        var m = localStorage.getItem('chakra-ui-color-mode');
                                        if (!m || m === 'system') {
                                            m = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                                        }
                                        document.documentElement.style.colorScheme = m;
                                        document.documentElement.dataset.theme = m;
                                    } catch(e) {}
                                })();
                            `
                        }}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import type { AppProps } from 'next/app'

const Website = ({Component, pageProps}: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </ChakraProvider>
    )
}

export default Website
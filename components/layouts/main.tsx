import Head from 'next/head'
import NavBar from '../navbar'
import {Box, Container} from '@chakra-ui/react'

const Main = ({children, router}) => {
    return (
        <Box as='main'>
            <Head>
                <meta name='viewport' content="width=device-width, initial-scale=1"/>
                <title>Dionysios Ntouka</title>
            </Head>
            <NavBar/>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
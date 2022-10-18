import { Container, Box, Heading, Text } from "@chakra-ui/react"
import Section from '../components/section'

const Page = () => {
    return (
        <Container>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h1" size="2xl" variant="page-title">
                        Dionysios Ntouka
                    </Heading>
                    <p>Software Engineering, Cyber Security</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
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
            <Section delay="0.5s">
                <Heading as="h3" size="md" variant='section-title'>
                    Education
                </Heading>
                <Box>
                    <Text>
                        MSc Computing (Software Engineering)
                    </Text>
                    <Text>
                        Imperial College London
                    </Text>
                </Box>
                <Box>
                    <Text>
                        BSc Computer Science
                    </Text>
                    <Text>
                        Goldsmiths, University of London
                    </Text>
                </Box>
            </Section>
        </Container>
    )
}

export default Page
import { Container, Box, Heading, ListItem, List } from "@chakra-ui/react"
import Paragraph from "../components/paragraph"
import Section from '../components/section'
import SectionTitle from "../components/section_title"
import { BsFileEarmarkLockFill } from 'react-icons/bs'
import { FaGasPump } from 'react-icons/fa'
import { TbAtom } from 'react-icons/tb'

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
                    <SectionTitle title="M.Sc. Computing (Software Engineering)" institution="Imperial College London" image="../images/imperial.png" />
                    {/* <Paragraph>
                        This one was challenging... but also quite fun! Chose security modules plus machine learning, robitics and distributed ledgers
                    </Paragraph> */}
                    {/* <List fontWeight={40} >
                        <ListItem display='flex' alignItems={'center'}><BsFileEarmarkLockFill/>Mitigating Encryption from Ransomware</ListItem>
                        <ListItem display='flex' alignItems={'center'}><FaGasPump/> FuelOpt</ListItem>
                    </List> */}
                </Box>
                <Box>
                    <SectionTitle title="B.Sc. Computer Science" institution="Goldsmiths, University of London" image="../images/goldsmiths.png" />
                    {/* <List fontWeight={40} >
                        <ListItem display='flex' alignItems={'center'}> <TbAtom/> Quantum Computing, Cryptography and the Hidden Subgroup Problem</ListItem>
                    </List> */}
                </Box>
            </Section>
        </Container>
    )
}

export default Page
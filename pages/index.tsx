import { Container, Box, Heading, List} from "@chakra-ui/react"
import Paragraph from "../components/paragraph"
import Section from '../components/section'
import SectionTitle from "../components/section_title"
import { BsFileEarmarkLockFill } from 'react-icons/bs'
import { FaGasPump } from 'react-icons/fa'
import { TbAtom } from 'react-icons/tb'
import ProjectListItem from '../components/project_link_item'

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
                    <Paragraph>
                        This one was challenging... but also quite fun! Chose security modules plus machine learning, robitics and distributed ledgers
                    </Paragraph>
                    <List fontWeight={40} >
                        <ProjectListItem href="https://github.com/GreyTeddy/ransomware_mitigation" emoji={<BsFileEarmarkLockFill />}>
                            Mitigating Encryption from Ransomware
                        </ProjectListItem>
                        <ProjectListItem href="" emoji={<FaGasPump />}>
                            FuelOpt
                        </ProjectListItem>
                    </List>
                </Box>
                <Box>
                    <SectionTitle title="B.Sc. Computer Science" institution="Goldsmiths, University of London" image="../images/goldsmiths.png" />
                    <List fontWeight={40} >
                        <ProjectListItem href="" emoji={<TbAtom />}>
                            Quantum Computing, Cryptography and the Hidden Subgroup Problem
                        </ProjectListItem>
                    </List>
                </Box>
            </Section>
        </Container>
    )
}

export default Page
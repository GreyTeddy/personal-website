import { Container, Box, Heading, List, useColorModeValue } from "@chakra-ui/react"
import Paragraph from "../components/paragraph"
import Section from '../components/section'
import Background from '../components/background'
import SectionTitle from "../components/section_title"
import { BsFileEarmarkLockFill } from 'react-icons/bs'
import { FaGasPump } from 'react-icons/fa'
import { TbAtom } from 'react-icons/tb'
import { CgPiano } from 'react-icons/cg'
import ProjectListItem from '../components/project_link_item'
import { MdOutlineSpeakerNotes } from 'react-icons/md'
import { GiHummingbird } from 'react-icons/gi'
import { BiCoin } from 'react-icons/bi'

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
            <Section delay="0.2s">
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
            <Section delay="0.5s">
                <Heading as="h3" size="md" variant='section-title'>
                    Projects
                </Heading>
                <Box>
                    <Paragraph>
                        These are some cute projects I've made during my studying. The piano has a close place to my heart {useColorModeValue(<span role="img" aria-label="black-heart">🖤</span>, <span role="img" aria-label="white-heart">🤍</span>)}
                    </Paragraph>
                    <List fontWeight={40} >
                        <ProjectListItem href="https://greyteddy.github.io/piano/" emoji={<CgPiano />}>
                            piano
                        </ProjectListItem>
                        <ProjectListItem href="https://notepad-837ad.web.app/" emoji={<MdOutlineSpeakerNotes />}>
                            teddy_notes
                        </ProjectListItem>
                        <ProjectListItem href="https://greyteddy.github.io/not_flappy_bird/" emoji={<GiHummingbird />}>
                            not_flappy_bird
                        </ProjectListItem>
                        <ProjectListItem href="https://github.com/GreyTeddy/currencies" emoji={<BiCoin />}>
                            currencies
                        </ProjectListItem>

                    </List>
                </Box>
            </Section>
        </Container>
    )
}

export default Page
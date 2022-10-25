import { Container, Box, Heading, List, useColorModeValue } from "@chakra-ui/react"
import Paragraph from "../components/paragraph"
import Section from '../components/section'
import Background from '../components/background'
import SectionTitle from "../components/section_title"
import { BsFileEarmarkLockFill, BsMusicNote, BsSuitHeartFill } from 'react-icons/bs'
import { FaGasPump, FaKiwiBird } from 'react-icons/fa'
import { TbAtom } from 'react-icons/tb'
import { CgPiano } from 'react-icons/cg'
import ProjectListItem from '../components/project_link_item'
import { MdOutlineSpeakerNotes } from 'react-icons/md'
import { BiCoin } from 'react-icons/bi'
import { useEffect } from "react"

const Page = () => {
    useEffect(()=>{
        console.log('What are you looking for, here? Skidaddle!')
    })
    return (
        <Container maxWidth='container.lg'>
            <Background />
            <Box>
                <Box>
                    <Heading as="h1" size="3xl" variant="page-title">
                        Dionysios Ntouka
                    </Heading>
                    <p>Software Engineering, Cyber Security</p>
                </Box>
            </Box>
            <Section delay="0.2s">
                <Heading as="h3" variant='section-title'>
                    Education
                </Heading>
                <Box>
                    <SectionTitle title="M.Sc. Computing (Software Engineering)" institution="Imperial College London" image="../images/imperial.png" />
                    <Paragraph>
                        The MSc was challenging... but also quite fun! Chose security modules plus machine learning, robitics and distributed ledgers.
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
                <Heading as="h3" variant='section-title'>
                    Projects
                </Heading>
                <Box>
                    <Paragraph>
                        These are some cute projects I&apos;ve made during my studying. I suggest you try not_flappy_bird {useColorModeValue(<span role="img" aria-label="black-heart">🖤</span>, <span role="img" aria-label="white-heart">🤍</span>)}.
                    </Paragraph>
                    <List fontWeight={40} >
                        <ProjectListItem href="https://greyteddy.github.io/not_flappy_bird/" emoji={<FaKiwiBird />}>
                            not_flappy_bird
                        </ProjectListItem>
                        <ProjectListItem href="https://greyteddy.github.io/piano/" emoji={<CgPiano />}>
                            piano
                        </ProjectListItem>
                        <ProjectListItem href="https://notepad-837ad.web.app/" emoji={<MdOutlineSpeakerNotes />}>
                            teddy_notes
                        </ProjectListItem>
                        <ProjectListItem href="https://github.com/GreyTeddy/currencies" emoji={<BiCoin />}>
                            currencies
                        </ProjectListItem>
                    </List>
                </Box>
            </Section>
            <Section delay="0.7s">
                <Heading as="h3" variant='section-title'>
                    Music
                </Heading>
                <Box>
                    <Paragraph>
                        I have been making music for a while and these are a few songs I have released.
                    </Paragraph>
                    <List fontWeight={40}>
                        <ProjectListItem href='https://www.youtube.com/watch?v=tAmfmrORvHk' emoji={<BsSuitHeartFill />}>
                            Care
                        </ProjectListItem>
                        <ProjectListItem href='https://www.youtube.com/watch?v=nagHuJAb2s0' emoji={<BsMusicNote />}>
                            Maybe
                        </ProjectListItem>
                    </List>
                </Box>
            </Section>
        </Container>
    )
}

export default Page

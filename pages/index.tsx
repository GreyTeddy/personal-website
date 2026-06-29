import { Container, Box, Heading, List, useColorModeValue } from "@chakra-ui/react"
import Paragraph from "../components/paragraph"
import Section from '../components/section'
import Background from '../components/background'
import { BsMusicNote, BsSuitHeartFill } from 'react-icons/bs'
import { FaCircle, FaKiwiBird, FaSearch } from 'react-icons/fa'
import { CgPiano } from 'react-icons/cg'
import ProjectListItem from '../components/project_link_item'
import { MdOutlineSpeakerNotes } from 'react-icons/md'
import { useEffect } from "react"
import Socials from "../components/socials"
import { Divider } from '@chakra-ui/react'

const Page = () => {
    const heartEmoji = useColorModeValue(<span role="img" aria-label="black-heart">🖤</span>, <span role="img" aria-label="white-heart">🤍</span>)
    useEffect(() => {
        console.log('What are you looking for, here? Skidaddle!')
    }, [])
    return (
        <Container maxWidth='container.lg'>
            <Background />
            <Box>
                <Box>
                    <Heading as="h1" size="3xl" variant="page-title">
                        Dionysios Ntouka
                    </Heading>
                    <p>Site Reliability Engineer at <a href="https://c3.ai/">C3 AI</a></p>
                </Box>
            </Box>
            <Section delay="0.0s">
                <Heading as="h3" variant='section-title'>
                    Hi!
                </Heading>
                <Box>
                    Hopefully, at some point I&apos;ll post a blog post. Sadly, not yet.
                </Box>
            </Section>
            <Section delay="0.2s">
                <Heading as="h3" variant='section-title'>
                    Projects
                </Heading>
                <Box>
                    <Paragraph>
                        These are some projects I&apos;ve made during my free time {heartEmoji}.
                        I use searching_things and sticky_noter everyday at work! You can try them as well!
                    </Paragraph>
                    <List fontWeight={40} >
                        <ProjectListItem key="searching_things" href="https://github.com/GreyTeddy/searching_things" emoji={<FaSearch />}>
                            searching_things
                        </ProjectListItem>
                        <ProjectListItem key="sticky_noter" href="https://github.com/GreyTeddy/sticky_noter" emoji={<MdOutlineSpeakerNotes />}>
                            sticky_noter
                        </ProjectListItem>
                        <ProjectListItem key="eater_dropper" href="https://github.com/GreyTeddy/eater_dropper" emoji={<FaCircle />}>
                            eater_dropper
                        </ProjectListItem>
                        <ProjectListItem key="not_flappy_bird" href="https://greyteddy.github.io/not_flappy_bird/" emoji={<FaKiwiBird />}>
                            not_flappy_bird
                        </ProjectListItem>
                        <ProjectListItem key="piano" href="https://greyteddy.github.io/piano/" emoji={<CgPiano />}>
                            piano
                        </ProjectListItem>
                    </List>
                </Box>
            </Section>
            <Section delay="0.5s">
                <Heading as="h3" variant='section-title'>
                    Music
                </Heading>
                <Box>
                    <Paragraph>
                        I have been making music for a while but I&apos;ve been pressured by friends to release these ones.
                    </Paragraph>
                    <List fontWeight={40}>
                        <ProjectListItem key="care" href='https://www.youtube.com/watch?v=tAmfmrORvHk' emoji={<BsSuitHeartFill />}>
                            Care
                        </ProjectListItem>
                        <ProjectListItem key="maybe" href='https://www.youtube.com/watch?v=nagHuJAb2s0' emoji={<BsMusicNote />}>
                            Maybe
                        </ProjectListItem>
                    </List>
                </Box>
            </Section>
            <Section delay="0.7s">
                <Divider />
            </Section>
            <Section delay="0.9s">
                <Socials />
            </Section>
        </Container>
    )
}

export default Page

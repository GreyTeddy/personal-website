import Logo from './logo'
import NextLink from 'next/link'
import colors from '../lib/theme'

import {
    Container,
    Box,
    Link,
    Heading,
    Flex,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const SectionItem = ({ href, children, ...props }) => {
    return (
        <NextLink href={href} passHref scroll={true}>
            <Link style={{ padding: "0 5px" }} {...props}>
                {children}
            </Link>
        </NextLink>
    )
}

const NavBar = (props) => {
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            style={{ backdropFilter: 'blur(1px)' }}
            z-index={1}>
            <Container width="100%" display='flex' p={2} maxW='container.md' justifyContent={'center'}>
                <Flex >
                    <Heading size='lg' letterSpacing={'tight'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <SectionItem href="#Education"
                    >
                        Education
                    </SectionItem>
                    <SectionItem href="#Projects"
                    >
                        Projects
                    </SectionItem>
                </Stack>
            </Container>
        </Box>
    )
}

export default NavBar
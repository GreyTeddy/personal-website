import Logo from './logo'
import NextLink from 'next/link'

import {
    Container,
    Box,
    Link,
    Heading,
    Flex,
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
            </Container>
        </Box>
    )
}

export default NavBar
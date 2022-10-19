import Logo from './logo'

import {
    Container,
    Box,
    Heading,
    Flex,
} from '@chakra-ui/react'

const NavBar = () => {
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
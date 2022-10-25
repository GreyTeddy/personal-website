import Logo from './logo'

import {
    Container,
    Box,
    Heading,
    Flex,
    SystemStyleObject,
    useColorModeValue,
} from '@chakra-ui/react'

const NavBar = () => {
    const navbarStyle: SystemStyleObject = {
        backgroundColor: useColorModeValue('rgba(220,220,220,0.4)','rgba(50,50,50,0.4)'),
        borderBottomRadius: '15'
    }

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            zIndex={10}>
            <Container width="100%" display='flex'  maxW='container.md' justifyContent={'center'}>
                <Flex >
                    <Heading size='lg' letterSpacing={'tight'} p={0.5} sx={navbarStyle}>
                        <Logo />
                    </Heading>
                </Flex>
            </Container>
        </Box>
    )
}

export default NavBar
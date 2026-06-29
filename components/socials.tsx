import { Box, Button, SystemStyleObject, useColorModeValue } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import NextLink from 'next/link';
import theme from '../lib/theme';


const Socials = () => {
    const style: SystemStyleObject = {
        display: 'flex',
        columnGap: '10px',
        justifyContent: 'center',
    }

    const buttonBg = useColorModeValue('#DCDCDC', theme.colors.jet)
    const buttonStyle: SystemStyleObject = {
        backgroundColor: buttonBg,
    }

    return (
        <Box sx={style}>
            <Button sx={buttonStyle} aria-label="GitHub">
                <NextLink href={"https://github.com/GreyTeddy"}><BsGithub /></NextLink>
            </Button>
            <Button sx={buttonStyle} aria-label="LinkedIn">
                <NextLink href={"https://www.linkedin.com/in/dionysios-ntouka-a6b697165/"}><FaLinkedinIn /></NextLink>
            </Button>
            <Button sx={buttonStyle} aria-label="YouTube">
                <NextLink href={"https://www.youtube.com/channel/UCnJOMW0IjWTeiIuGaAoPAGw"}><AiFillYoutube /></NextLink>
            </Button>
            <Button sx={buttonStyle} aria-label="Email">
                <NextLink href={"mailto:dukadennis7@gmail.com"}><GrMail /></NextLink>
            </Button>
        </Box>
    )
}

export default Socials;
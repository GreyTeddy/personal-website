import { Box, keyframes, Link, ListItem, SystemStyleObject, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { MouseEvent, TransitionEvent } from 'react';
import theme from '../lib/theme';

const ProjectListItem = ({ href, children, emoji }) => {

    const listItemStyle = {
        display: 'flex',
        alignItems: 'center'
    }

    const rotationKeyframe = keyframes`
        0% {transform: rotate(0deg);}
        15% {transform: rotate(-20deg);}
        50% {transform: rotate(10deg);}
        85% {transform: rotate(0deg);}
        100% {transform: rotate(0deg);}
    `

    const emojiStyle: SystemStyleObject = {
        display: 'none',
        margin: '0 3px',
        animation: `${rotationKeyframe} 1s`,
        color: useColorModeValue(theme.colors.steelBlue, theme.colors.yellowCrayola)
    }

    const titleAfterStyle: SystemStyleObject = {
        textDecoration: "none",
        backgroundImage: "linear-gradient(currentColor, currentColor)",
        backgroundPosition: "0% 100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "0% 2px",
        transition: "background-size 0.3s",
        _hover: {
            backgroundSize: "100% 2px"
        },
        _focus: {
            backgroundSize: "100% 2px"
        }
    }

    const showEmoji = (event: TransitionEvent<HTMLElement> | MouseEvent<HTMLElement>) => {
        const element = event.currentTarget;
        const emoji = element.parentElement.lastElementChild as HTMLElement;
        if (element.matches(':hover')) {
            emoji.style.display = "inline-block"
        }
        else {
            emoji.style.display = "none"
        }
    }

    return (
        <ListItem sx={listItemStyle}>
            <Box style={{ display: 'inline-flex', alignItems: 'center' }}>
                <NextLink href={href} passHref>
                    <Box style={{ display: 'inline-flex', alignItems: 'center', fontSize: '15px', fontWeight: 'bold' }}>
                        <Link sx={titleAfterStyle} onTransitionEnd={showEmoji} onMouseLeave={showEmoji} className="projectLink">{children}</Link>
                        <Box sx={emojiStyle} animation={rotationKeyframe}>{emoji}</Box>
                    </Box>
                </NextLink>
            </Box>
        </ListItem>
    )
}


export default ProjectListItem
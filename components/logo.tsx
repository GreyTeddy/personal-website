import Link from 'next/link'
import { RiBearSmileFill } from 'react-icons/ri'
import { Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import colors from '../lib/theme'
import styled from '@emotion/styled'
import { AnimationEvent } from 'react';

const LogoBox = styled.span`
#logoAndText{
    display: inline-flex;
    font-size: 18px;
    line-height: 20px;
    animation: 0.5s;
    margin:0;
    padding:10px;
}

.toAnimate {
    animation: 0.3s ease-in rotate forwards;
}

@keyframes rotate {
    0% {transform: rotate(0deg);}
    70% {transform: rotate(380deg);}
    85% {transform: rotate(340deg);}
    100% {transform: rotate(360deg);}
}

@keyframes changeFont {
    0% {margin-left:10px; font-family: monospace;}
    25% {margin-left:30px; font-family: Arial; text-decoration: underline;}
    50% {margin-left:30px; font-family: "Courier New";
}
`

const Logo = () => {
    const { toggleColorMode } = useColorMode()

    const startFontChange = (event: AnimationEvent<HTMLElement>) => {
        toggleColorMode()
        event.currentTarget.parentElement.getElementsByTagName("p")[0].style.animation = "changeFont 0.5s";
    }
    const stopFontChange = (event: AnimationEvent<HTMLElement>) => {
        event.currentTarget.style.animation = "0s"
        event.currentTarget.parentElement.getElementsByTagName("button")[0].classList.remove('toAnimate')
    }
    const onClick = (event) => {
        const element = event.currentTarget.children[0].classList
        element.add("toAnimate")
    }
    return (
        <Link href="">
            <a>
                <LogoBox>
                    <div id="logoAndText" onClick={onClick}>
                        <button onAnimationEnd={startFontChange}><RiBearSmileFill /></button>
                        <Text color={useColorModeValue(colors.eerieBlack, colors.platinum)} onAnimationEnd={stopFontChange} ml={3} >
                            GreyTeddy
                        </Text>
                    </div>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
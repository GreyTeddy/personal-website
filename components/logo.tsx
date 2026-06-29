import Link from 'next/link'
import { RiBearSmileFill } from 'react-icons/ri'
import { Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import colors from '../lib/theme'
import styled from '@emotion/styled'
import { useState } from 'react';

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
    const [isRotating, setIsRotating] = useState(false)
    const [isFontChanging, setIsFontChanging] = useState(false)
    const textColor = useColorModeValue(colors.eerieBlack, colors.platinum)

    const handleClick = () => {
        setIsRotating(true)
    }

    const handleRotateEnd = () => {
        setIsRotating(false)
        toggleColorMode()
        setIsFontChanging(true)
    }

    const handleFontChangeEnd = () => {
        setIsFontChanging(false)
    }

    return (
        <Link href="">
            <LogoBox>
                <div id="logoAndText" onClick={handleClick}>
                    <button className={isRotating ? 'toAnimate' : ''} onAnimationEnd={handleRotateEnd}>
                        <RiBearSmileFill />
                    </button>
                    <Text
                        color={textColor}
                        onAnimationEnd={handleFontChangeEnd}
                        animation={isFontChanging ? "changeFont 0.5s" : "0s"}
                        ml={3}
                    >
                        GreyTeddy
                    </Text>
                </div>
            </LogoBox>
        </Link>
    )
}

export default Logo
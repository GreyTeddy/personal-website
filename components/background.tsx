import { Box, keyframes, useColorModeValue } from "@chakra-ui/react"

const Background = () => {

    const darkImage = 'url("../images/teddy_400_dark.png")';
    const lightImage = 'url("../images/teddy_400_light.png")';

    const rotationKeyframe = keyframes`
      0% {
        transform: translate3d(0, 0, 0);
      }
      25% {
        transform: translate3d(0, 5px, 0);
      }
      50% {
        transform: translate3d(0, 0, 0);
      }
      75% {
        transform: translate3d(0,-5px, 0);
      }
      100% {
        transform: translate3d(0, 0, 0);
      }
    `

    return (
        <Box sx={{
            zIndex: -1,
            position: 'fixed',
            // bottom: 0,
            left: "50%",
            height: "450px",
            width: "450px",
            background: useColorModeValue(lightImage, darkImage),
            animation: `${rotationKeyframe} 5s linear infinite`,
            // backgroundRepeat: 'repeat',
            // filter: 'invert(1)'
        }}></Box>
    )
}

export default Background
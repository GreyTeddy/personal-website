import { Box, keyframes, useColorModeValue } from "@chakra-ui/react"

const Background = () => {

  const darkImage = 'url("../images/teddy_icon_dark.png")';
  const lightImage = 'url("../images/teddy_icon_light.png")';

  const rotationKeyframe = keyframes`
      0% {
        transform: translate3d(0,-5px, 0);
      }
      50% {
        transform: translate3d(0, 5px, 0);
      }
      100% {
        transform: translate3d(0,-5px, 0);
      }
    `

  return (
    <Box sx={{
      zIndex: -1,
      position: 'fixed',
      // bottom: 0,
      left: "50%",
      height: "550px",
      width: "730px",
      background: useColorModeValue(lightImage, darkImage),
      animation: `${rotationKeyframe} 10s ease-in-out infinite`,
      // backgroundRepeat: 'repeat',
      // filter: 'invert(1)'
    }}></Box>
  )
}

export default Background
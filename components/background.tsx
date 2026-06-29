import { Box, keyframes, useColorModeValue } from "@chakra-ui/react"

const image = 'url("../images/teddy_icon_vertices.svg")';

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

const Background = () => {
  const bgFilter = useColorModeValue('invert(82%)', 'invert(40%)')

  return (
    <Box sx={{
      zIndex: -1,
      position: 'fixed',
      left: "50%",
      height: "550px",
      width: "730px",
      background: image,
      filter: bgFilter,
      animation: `${rotationKeyframe} 10s ease-in-out infinite`
    }}></Box>
  )
}

export default Background

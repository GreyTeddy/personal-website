import { keyframes } from '@emotion/react'
import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

const fadeInSlide = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`

const Section = ({ children, delay = "0.5s" }: { children: ReactNode; delay?: string }) => {
    return (
        <Box
            animation={`${fadeInSlide} 0.4s ease-out ${delay} forwards`}
            opacity={0}
            mb={6}
        >
            {children}
        </Box>
    )
}

export default Section
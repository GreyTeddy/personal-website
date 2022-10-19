import { Box, Text } from '@chakra-ui/react';


const Paragraph = ({children}) => {
    return (
        <Box>
            <Text style={{textAlign: "justify",textIndent: "1em", fontWeight:"100"}}>
                {children}
            </Text>
        </Box>
    )
}

export default Paragraph
import { Box, Text } from '@chakra-ui/react';


const Paragraph = ({children}) => {
    return (
        <Box>
            <Text style={{textIndent: "1em", fontWeight:"200",alignContent:'center'}}>
                {children}
            </Text>
        </Box>
    )
}

export default Paragraph
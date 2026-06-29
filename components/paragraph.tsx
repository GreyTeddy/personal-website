import { Box, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';


const Paragraph = ({children}: {children: ReactNode}) => {
    return (
        <Box>
            <Text style={{textIndent: "1em", fontWeight:"400",alignContent:'center'}}>
                {children}
            </Text>
        </Box>
    )
}

export default Paragraph
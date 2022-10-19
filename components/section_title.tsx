import { Box, Stack, Text } from "@chakra-ui/react"

const SectionTitle = ({ title, institution, image = "" }) => {
    return (
        <Box>
            <Stack>
                <Text>{title}</Text>
                <Text fontSize={14} style={{marginTop: 0,display:'inline-flex'}} opacity={0.8}>
                    {institution}
                    {image ? <img style={{margin:"0 4px", maxWidth: "20px", maxHeight: "20px"}} src={image}/> : ""}
                </Text>
            </Stack>
        </Box>
    )
}

export default SectionTitle
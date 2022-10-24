import { Box, Stack, Text, Image } from "@chakra-ui/react"

const SectionTitle = ({ title, institution, image = "" }) => {
    return (
        <Box>
            <Stack>
                <Text fontSize={20} >{title}</Text>
                <Text fontSize={18} style={{ marginTop: 0, display: 'inline-flex', textAlign: 'center' }} opacity={0.8} >
                    {institution}
                    {image ? <Image style={{ margin: '0 4px', maxWidth: "24px", maxHeight: "24px" }} alt={"image of " + institution} src={image} /> : ""}
                </Text>
            </Stack>
        </Box>
    )
}

export default SectionTitle
import { extendTheme, StyleFunctionProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const colors = {
    eerieBlack: '#141414',
    jet: '#2b2b2b',
    yellowCrayola: '#FAA916',
    steelBlue: '#4D7EA8',
    redCrayola: '#FE5F55',
    celadon: '#AEE7BD',
    platinum: '#E3E3E3',
}

const styles = {
    global: props => ({
        body: {
            bg: mode(colors.platinum, colors.eerieBlack)(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': (props: StyleFunctionProps) => ({
                textDecoration: 'underline',
                textUnderlineOffset: 6,
                textDecorationThickness: 4,
                textDecorationColor: mode(colors.jet,colors.platinum)(props),
                fontSize: 20,
                marginTop: 3,
                marginBottom: 4
            })
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode(colors.steelBlue, colors.yellowCrayola)(props),
        })
    },
    DrawerBody: {
        baseStyle: props => ({
            background: mode(colors.steelBlue, colors.yellowCrayola)(props),
        })
    }
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true
}

const theme = extendTheme({
    config, styles, components, colors
})

export default theme
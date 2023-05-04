import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// A custom theme for this app
const theme = createTheme({
    typography: {
        fontFamily: 'Calibri',
    },
    palette: {
        primary: {
            main: '#001f3d',
        },
    },
})

export default theme
// declare module '@mui/material/styles' {
//     interface Palette {
//         main: string
//         secondary: string
//         contrastText: string
//     }
// }
// secondary: '#045174',
//         contrastText: '#fff',
//         error: '#ff0000',
//         warning: '#fa9939',
//         info: '#f8dcbf',
//         success: '#156401',
//         background: '#242424',

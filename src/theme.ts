import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// A custom theme for this app
const theme = createTheme({
    typography: {
        fontFamily: ['-apple-system', 'Calibri'],
    },
    palette: {
        primary: {
            main: '#001f3d',
            secondary: '#045174',
            contrastText: '#fff',
            error: '#ff0000',
            warning: '#fa9939',
            info: '#f8dcbf',
            success: '#156401',
            background: '#242424',
        },
    },
})

export default theme

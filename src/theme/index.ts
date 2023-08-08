export const theme: ThemeT = {
    colors: {
        primary: '#225cc0',
        secondary: '#3ecf92',
        background: '#1a202c',
        dark: '#1b1b1b',
        lightGray: '#777575',
        offWhite: '#e0e0e0',
        black: '#000000',
        success: '#51d88a',
        error: '#ff4d4d',
        darkGreen: '#254f40',
        buttonBlueHover: '#00adef',
        darkGold: '#937f27',
        lightGold: '#e0d45e',
        primaryHover: '#1c4aa8',
        darkRed: '#4d0101',
        buttonBlue: '#3F4ADC',
        Slate: '#20262e',
        LightSlate: '#434c54',
        DarkSlate: '#2d3748',
        LogoPrimary: '#3871c1',
        LogoSecondary: '#00adef',
        LogoTertiary: '#b8eaf6',
    },
    fonts: ['sans-serif', 'Roboto'],
    fontSize: {
        base: '1rem',
        sm: '0.875rem',
        lg: '1.25rem',
        xl: '1.5rem',
    },
    layout: {
        NavbarHeight: '2vh',
        BodyHeight: '92vh',
    },
    screenSizes: {
        mobile: {
            width: 375,
            height: 812,
        },
        tablet: {
            width: 768,
            height: 1024,
        },
        laptop: {
            width: 1366,
            height: 768,
        },
        desktop: {
            width: 1920,
            height: 1080,
        },
        ultrawide: {
            width: 2560,
            height: 1080,
        },
        iphoneSE: {
            width: 320,
            height: 568,
        },
        iphoneX: {
            width: 375,
            height: 812,
        },
        ipad: {
            width: 768,
            height: 1024,
        },
        macbook: {
            width: 1440,
            height: 900,
        },
        imac: {
            width: 5120,
            height: 2880,
        },
    },
}
const bodyHeight = `calc(100vh - ${theme.layout.NavbarHeight})`
type ScreenSizeT = {
    width: number
    height: number
}

type ThemeT = {
    colors: {
        primary: string
        secondary: string
        background: string
        dark: string
        lightGray: string
        offWhite: string
        success: string
        error: string
        black: string
        darkGreen: string
        darkRed: string
        buttonBlue: string
        buttonBlueHover: string
        darkGold: string
        lightGold: string
        primaryHover: string
        Slate: string
        LightSlate: string
        DarkSlate: string
        LogoPrimary: string
        LogoSecondary: string
        LogoTertiary: string
    }
    fonts: string[]
    fontSize: {
        base: string
        sm: string
        lg: string
        xl: string
    }
    layout: {
        NavbarHeight: string
        BodyHeight: string
    }
    screenSizes: {
        mobile: ScreenSizeT
        tablet: ScreenSizeT
        laptop: ScreenSizeT
        desktop: ScreenSizeT
        ultrawide: ScreenSizeT
        iphoneSE: ScreenSizeT
        iphoneX: ScreenSizeT
        ipad: ScreenSizeT
        macbook: ScreenSizeT
        imac: ScreenSizeT
    }
}

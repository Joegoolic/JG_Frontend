import * as React from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'

export function Item(props: BoxProps) {
    const { sx, ...other } = props

    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                height: '100%',
                width: `${props.width}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: '1 1 auto',
                alignItems: 'center',
                // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'white'),
                border: '2px solid',
                borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',

                ...sx,
            }}
            {...other}
        />
    )
}

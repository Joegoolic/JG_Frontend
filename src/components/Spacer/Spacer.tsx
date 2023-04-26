import * as React from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'

export function Spacer(props: BoxProps) {
    const { sx, ...other } = props
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                width: `${props.width}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // border: '1px solid',
                // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                // color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                // border: '1px solid',
                // borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
                // borderRadius: 2,
                // fontSize: '0.875rem',
                // fontWeight: '700',
                // justifyContent: 'center',
                // alignItems: 'center',
                ...sx,
            }}
            {...other}
        />
    )
}

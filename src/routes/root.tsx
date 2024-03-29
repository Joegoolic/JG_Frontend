import React from 'react'
import { Box } from '@mui/material'
import Introduction from 'components/Introduction'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import Contact from 'components/Contact'
import Blob from 'components/Blob'
import useMediaQuery from '@mui/material/useMediaQuery'
import StickyHeader from 'components/StickyHeader'

export default function Root() {
    return (
        <div className="provider">
            <StickyHeader />
            <Box
                className="main"
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridTemplateRows: 'auto',
                    gridTemplateAreas: `"intro intro intro intro"

                                    "projects projects projects projects"
                                    "skills skills skills skills"

                                    "contact contact contact contact"`,
                }}
            >
                <Box sx={{ gridArea: 'intro' }}>
                    <Introduction />
                </Box>

                <Box sx={{ gridArea: 'projects' }}>
                    <Projects />
                </Box>
                <Box sx={{ gridArea: 'skills' }}>
                    <Skills />
                </Box>

                <Box
                    sx={{
                        gridArea: 'contact',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Blob />
                    <Contact />
                </Box>
                <Blob />
            </Box>
        </div>
    )
}

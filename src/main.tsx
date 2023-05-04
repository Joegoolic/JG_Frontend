import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import ErrorPage from 'components/ErrorPage'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles'
import { ParallaxProvider } from 'react-scroll-parallax'
import { UserDataProvider } from 'context/UserDataContext'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ParallaxProvider>
                <UserDataProvider>
                    <RouterProvider router={router} />
                </UserDataProvider>
            </ParallaxProvider>
        </ThemeProvider>
    </React.StrictMode>
)

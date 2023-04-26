import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button, Container } from '@mui/material'
import { Typography } from '@mui/material'
import { UserDataContext } from 'context/UserDataContext'
import { BoxAny } from 'components/styled'

function ErrorPage() {
    const navigate = useNavigate()
    const { thin } = useContext(UserDataContext)

    const [buttonClicked, setButtonClicked] = useState(false)

    const handleClick = () => {
        setButtonClicked(true)
        setTimeout(() => {
            navigate('/')
        }, 1500)
    }

    const [countdown, setCountdown] = useState(5)

    useEffect(() => {
        if (countdown === 0) {
            navigate('/')
        } else {
            const timeoutId = setTimeout(() => {
                setCountdown(countdown - 1)
            }, 1000)

            return () => clearTimeout(timeoutId)
        }
    }, [countdown])

    return (
        <BoxAny>
            {/* <Container maxWidth="md"> */}
            {/* <ErrorIcon className="error-icon" /> */}
            <Typography variant="h2" component="h1" className="error-message">
                Oops! Something went wrong.
            </Typography>
            {!buttonClicked && (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    className="button"
                >
                    Go back home
                </Button>
            )}
            {buttonClicked && (
                <Button variant="contained" color="primary" disabled>
                    Redirecting...
                </Button>
            )}
            <Typography variant="subtitle1" component="p">
                Or <Link to="/">click here</Link> to go back to the home page.
            </Typography>
            <Typography variant="subtitle1" component="p">
                In {countdown} seconds you will be automatically redirected.
            </Typography>
            {/* </Container> */}
        </BoxAny>
    )
}

export default ErrorPage

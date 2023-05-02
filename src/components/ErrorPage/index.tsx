import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from 'context/UserDataContext'
import { BoxAny } from 'components/styled'

function ErrorPage() {
    const navigate = useNavigate()
    const { thin } = useContext(UserDataContext)
    const [countdown, setCountdown] = useState(5)

    const handleClick = () => {
        setTimeout(() => {
            navigate('/')
        }, 1500)
    }

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
        <div className="main">
            <BoxAny
                thin={thin}
                width={'50vw'}
                height={'50vh'}
                borderRadius={'1rem'}
                bgColor={'#FFF'}
            >
                <h2 className="error-message">Oops! Something went wrong.</h2>
                <button className="button" onClick={handleClick}>
                    Go back home
                </button>
                <p>In {countdown} seconds you will be automatically redirected.</p>
            </BoxAny>
        </div>
    )
}

export default ErrorPage

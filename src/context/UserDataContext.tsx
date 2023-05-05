import React, { useState, useEffect } from 'react'
import { createContext } from 'react'

export const UserDataContext = createContext(null)

export function UserDataProvider({ children }) {
    const breakpoints = {
        xs: 0,
        sm: 1024,
        md: 960,
        lg: 1280,
        xl: 1920,
    }
    const [thin, setThin] = useState(window.innerWidth < breakpoints.sm ? true : false)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < breakpoints.sm) {
                setThin(true)
            } else {
                setThin(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return <UserDataContext.Provider value={{ thin, setThin }}>{children}</UserDataContext.Provider>
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

import React, { useState, useEffect, ReactNode } from 'react'
import { createContext } from 'react'

interface UserDataContextType {
    thin: boolean;
    setThin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserDataContext = createContext<UserDataContextType | null>(null)

interface UserDataProviderProps {
    children: ReactNode;
}

export function UserDataProvider({ children }: UserDataProviderProps) {
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
    }, [breakpoints.sm])

    return <UserDataContext.Provider value={{ thin, setThin }}>{children}</UserDataContext.Provider>
}

export function useUserData() {
    const context = React.useContext(UserDataContext)
    if (!context) {
        throw new Error('useUserData must be used within a UserDataProvider')
    }
    return context
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

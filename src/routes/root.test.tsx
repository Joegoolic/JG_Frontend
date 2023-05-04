import React from 'react'
import Root from './root'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { UserDataContext } from 'context/UserDataContext'
import { IntroGrid } from 'components/styled'
import Introduction from 'components/Introduction'

describe('Open Home page', () => {
    test('renders correctly', () => {
        render(
            <ParallaxProvider>
                <UserDataContext.Provider value={true}>
                    <Root />
                </UserDataContext.Provider>
            </ParallaxProvider>
        )

        mockAllIsIntersecting(true)
        const title = screen.getByText(
            `Hi, My name is Joseph Goolic and I'm a Full Stack Web Developer`
        )
        expect(title).toBeTruthy()
    })
})

import React from 'react'
import Root from './root'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

describe('Open Home page', () => {
    test('renders correctly', () => {
        render(
            <ParallaxProvider>
                <Root />
            </ParallaxProvider>
        )
        mockAllIsIntersecting(true)
        const title = screen.getByText(
            `Hi, My name is Joseph Goolic and I'm a Full Stack Web Developer`
        )
        expect(title).toBeTruthy()
    })
})

import React from 'react'
import Root from '../../routes/root'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { skills } from 'data/skillsData'

describe('Open Skills page', () => {
    test('renders correctly', () => {
        render(
            <ParallaxProvider>
                <Root />
            </ParallaxProvider>
        )
        mockAllIsIntersecting(true)
        const skills_ = Object.keys(skills).map((skill) => {
            screen.getByText(`${skills[skill].Name}`)
        })

        expect(skills_).toBeTruthy()
    })
})

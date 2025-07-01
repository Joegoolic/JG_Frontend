import React, { useContext } from 'react'
import Root from '../../routes/root'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { datum_points } from 'data/datum'
import { UserDataContext } from 'context/UserDataContext'
import Skills from './index'
import useDatumType from 'utilities/useDatumType'

describe('Open Skills page', () => {
    test('renders correctly', () => {
        render(
            <ParallaxProvider>
                <UserDataContext.Provider value={{ thin: true, setThin: () => {} }}>
                    <Skills />
                </UserDataContext.Provider>
            </ParallaxProvider>
        )
        mockAllIsIntersecting(true)
        const skills = useDatumType('Skill')
        if (skills) {
            skills.forEach((datum) => {
                screen.getByText(`${datum.Name}`)
            })
        }

        expect(skills).toBeTruthy()
    })
})

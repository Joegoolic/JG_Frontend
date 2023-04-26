import React, { useEffect, useContext } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Tilt from 'react-parallax-tilt'
import { useInView } from 'react-intersection-observer'
import { UserDataContext } from 'context/UserDataContext'
import {
    AnimatedContainer,
    IntroGrid,
    IntroImageContainer,
    IntroTextContainer,
    StyledGradient_h1_A,
} from 'components/styled'

export default function Introduction() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.4,
    })
    const { thin } = useContext(UserDataContext)
    return (
        <IntroGrid thin={thin}>
            <IntroImageContainer thin={thin}>
                <AnimatedContainer view={inView} thin={thin}>
                    <Parallax translateY={[-40, 30]}>
                        <img ref={ref} className="image" src="/JEGCropped.jpeg" />
                    </Parallax>
                </AnimatedContainer>
            </IntroImageContainer>
            <IntroTextContainer>
                <AnimatedContainer view={inView} thin={thin}>
                    <Parallax translateY={[-10, 10]}>
                        <StyledGradient_h1_A thin={thin}>
                            Hi, My name is Joseph Goolic and I'm a Full Stack Web Developer
                        </StyledGradient_h1_A>
                    </Parallax>
                </AnimatedContainer>
            </IntroTextContainer>
        </IntroGrid>
    )
}

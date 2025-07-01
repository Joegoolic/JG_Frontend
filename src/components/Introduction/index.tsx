//React
import React from 'react'
//React Context
import { useUserData } from 'context/UserDataContext'

//Intersection Observer
import { useInView } from 'react-intersection-observer'

//Parallax
import { Parallax } from 'react-scroll-parallax'
//Styled Components
import {
    AnimatedContainer,
    IntroGrid,
    IntroImageContainer,
    IntroTextContainer,
    StyledGradient_h1_A,
} from 'components/styled'

export default function Introduction() {
    const { ref, inView, entry } = useInView({
        threshold: 0.4,
    })
    const { thin } = useUserData()
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
                            Hi, My name is Joseph Goolic and I'm a Software Engineer
                        </StyledGradient_h1_A>
                    </Parallax>
                </AnimatedContainer>
            </IntroTextContainer>
        </IntroGrid>
    )
}

import React from 'react'
import { datum_points } from 'data/datum'
import Datum from 'components/Datum'
import useDatumType from 'utilities/useDatumType'
import { Container, ContainerAny, StyledGradient_h1_B } from 'components/styled'
import { useUserData } from 'context/UserDataContext'

export default function Skills() {
    const { thin } = useUserData()
    const skills = useDatumType('Skill')
    const halfway = skills ? Math.ceil(skills.length / 2) : 0

    const getSkills = () => {
        if (!skills) return null
        return skills.map((datum, index) =>
            index === halfway ? (
                <div key="index">
                    <ContainerAny direction={'right'}>
                        <StyledGradient_h1_B thin={thin}>
                            But Are Not Limited To
                        </StyledGradient_h1_B>
                    </ContainerAny>
                    <Datum key={datum.Name} data={datum} />
                </div>
            ) : (
                <Datum key={datum.Name} data={datum} />
            )
        )
    }
    return (
        <Container>
            <ContainerAny direction={'left'}>
                <StyledGradient_h1_B thin={thin}>My Skills Include</StyledGradient_h1_B>
            </ContainerAny>
            {getSkills()}
        </Container>
    )
}

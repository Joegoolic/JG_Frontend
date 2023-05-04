import React from 'react'
import { datum_points } from 'data/datum'
import Datum from 'components/Datum'
import useDatumType from 'utilities/useDatumType'
import { Container, ContainerAny, StyledGradient_h1_B } from 'components/styled'
import { useContext } from 'react'
import { UserDataContext } from 'context/UserDataContext'

export default function Skills() {
    const { thin } = useContext(UserDataContext)
    const halfway = Math.ceil(useDatumType('Skill').length / 2)

    const getSkills = () => {
        return useDatumType('Skill').map((datum, index) =>
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

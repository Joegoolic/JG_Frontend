import React from 'react'
import { datum_points } from 'data/datum'
import Datum from 'components/Datum'
import useDatumType from 'utilities/useDatumType'
import { Container, ContainerAny, StyledGradient_h1_B } from 'components/styled'
import { useUserData } from 'context/UserDataContext'

export default function Projects() {
    const { thin } = useUserData()
    const projects = useDatumType('Project')
    
    return (
        <Container>
            <ContainerAny>
                <StyledGradient_h1_B thin={thin}>Here are some Projects I have worked on</StyledGradient_h1_B>
            </ContainerAny>
            {projects && projects.map((datum) => (
                <Datum key={datum.Name} data={datum} />
            ))}
        </Container>
    )
}

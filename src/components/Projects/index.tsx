import React from 'react'
import { datum_points } from 'data/datum'
import Datum from 'components/Datum'
import useDatumType from 'utilities/useDatumType'
import { Container, ContainerAny, StyledGradient_h1_B } from 'components/styled'

export default function Projects() {
    return (
        <Container>
            <ContainerAny>
                <StyledGradient_h1_B>Here are some Projects I have worked on</StyledGradient_h1_B>
            </ContainerAny>
            {useDatumType('Project').map((datum) => (
                <Datum key={datum.Name} data={datum} />
            ))}
        </Container>
    )
}

import React from 'react'
import { Box } from '@mui/material'
import { Parallax } from 'react-scroll-parallax'
import { useInView } from 'react-intersection-observer'
import { generateRandomNumbersInRange } from 'utilities/numberGenerators'
import { Spacer } from 'components/Spacer/Spacer'
import { Item } from 'components/Item/Item'
import styled, { css } from 'styled-components'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useUserData } from 'context/UserDataContext'
import { AnimatedContainer, ButtonS } from 'components/styled'
import { TDatum } from 'data/datum'

interface DatumProps {
    data: TDatum[string];
}

export default function Datum(props: DatumProps) {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
    })
    const { thin } = useUserData()
    const widerSide = thin
        ? 'left'
        : props.data.Widths.Width1 < props.data.Widths.Width3
        ? 'left'
        : 'right'
    return (
        <AnimatedContainer key={props.data.Name} view={inView} ref={ref} thin={thin}>
            {widerSide === 'left' ? (
                <Spacer width={thin ? 0 : `${props.data.Widths.Width1}vw`}>
                    <Parallax>
                        <a href={`${props.data.Link}`} target="_blank">
                            <img className="skillsImage" src={`/${props.data.Logo}`} />
                        </a>
                    </Parallax>
                </Spacer>
            ) : (
                <Spacer width={thin ? 0 : `${props.data.Widths.Width1}vw`} />
            )}

            <Parallax>
                <Item width={thin ? '90vw' : `${props.data.Widths.Width2}vw`}>
                    <h3 className="skillHeader">{props.data.Name}</h3>
                    <p className="skillBody">{props.data.Description}</p>
                    <ButtonS className="linkButton" onClick={() => window.open(props.data.Link)}>
                        Click here to learn more about {props.data.Name}
                    </ButtonS>
                </Item>
            </Parallax>
            {widerSide === 'right' ? (
                <Spacer width={thin ? 0 : `${props.data.Widths.Width3}vw`}>
                    <Parallax>
                        <a href={`${props.data.Link}`} target="_blank">
                            <img className="skillsImage" src={`/${props.data.Logo}`} />
                        </a>
                    </Parallax>
                </Spacer>
            ) : (
                <Spacer width={thin ? 0 : `${props.data.Widths.Width3}vw`} />
            )}
        </AnimatedContainer>
    )
}

import React from 'react'
import styled, { keyframes } from 'styled-components'
import { theme } from '../../theme/index'
import { HTMLAttributes, ForwardedRef } from 'react'
import type { 
    ThinProps, 
    IntroGridProps, 
    GridItemProps, 
    ImageContainerProps,
    StyledImageProps,
    BlurredBackgroundProps,
    AnimatedItemProps,
    DatumHeaderProps,
    ProjectContainerProps
} from './types'

// Additional interfaces for components
interface ContainerAnyProps extends HTMLAttributes<HTMLDivElement> {
    view?: boolean;
    thin?: boolean;
    direction?: string;
}

interface BoxAnyProps extends HTMLAttributes<HTMLDivElement> {
    thin?: boolean;
    direction?: string;
    margin?: string;
    height?: string;
    width?: string;
    borderRadius?: string;
    bgColor?: string;
}

interface AnimatedContainerProps extends HTMLAttributes<HTMLDivElement> {
    view?: boolean;
    thin?: boolean;
}

interface StyledFormProps extends HTMLAttributes<HTMLFormElement> {
    view?: boolean;
    thin?: boolean;
}

interface ButtonSProps extends HTMLAttributes<HTMLButtonElement> {
    width?: string;
    height?: string;
    padding?: string;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    backgroundColor?: string;
    colors?: string;
    borderRadius?: string;
    borderWidth?: string;
}

const meldInAnimation = keyframes`
    0% {
        opacity: 1;
        /* backdrop-filter: blur(0px); */
    }
    100% {
        opacity: 0;
        /* backdrop-filter: blur(20px); */
    }
`
const meldOutAnimation = keyframes`
    0% {
        opacity: 0;
        /* backdrop-filter: blur(20px); */
    }
    100% {
        opacity: 1;
        /* backdrop-filter: blur(0px); */
    }
`

export const StyledGradient_h1_A = styled.h1<ThinProps>`
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, var(--contrastText), #6f6f6f, #595959);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    font-size: ${(props) => (props.thin ? '1.75rem' : '2.5rem')};
`
export const StyledGradient_h1_B = styled.h1<ThinProps>`
    font-size: ${(props) => (props.thin ? '1.75rem' : '2.5rem')};
    background: -webkit-linear-gradient(#ffffff, #2f2f2f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: #000;
    font-weight: 700;
    text-outline: 2px #000;
    margin: 2.5rem;
    transition: all 0.3s ease-in-out;
`
export const IntroGrid = styled.div<IntroGridProps>`
    display: grid;
    grid-template-columns: ${(props) => (props.thin ? '1fr' : '1fr 1fr')};
    grid-template-rows: ${(props) => (props.thin ? '1fr' : '1fr 1fr')};
    grid-template-areas: ${(props) =>
        props.thin
            ? `'IntroImageContainer'
      'IntroTextContainer'`
            : `'IntroImageContainer .'
      '. IntroTextContainer'`};
    margin-top: 4rem;
    margin: 1rem;
    height: 90vh;
    justify-content: center;
    align-items: center;
`
export const IntroImageContainer = styled.div<ThinProps>`
    grid-area: IntroImageContainer;
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    width: ${(props) => (props.thin ? '50%' : '100%')};
    border-radius: 50%;
    margin: ${(props) => (props.thin ? '4rem' : '0')};
    z-index: 2;
`
export const IntroTextContainer = styled.div`
    grid-area: IntroTextContainer;
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
    z-index: 2;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20vh;
    justify-content: center;
`
export const ContainerAny = styled.div<ContainerAnyProps>`
    display: flex;
    justify-content: ${(props) => (props.direction ? props.direction : 'center')};
    align-items: center;
`
export const BoxAny = styled.div<BoxAnyProps>`
    display: flex;
    justify-content: ${(props) => (props.direction ? props.direction : 'center')};
    align-items: ${(props) => (props.direction ? props.direction : 'center')};
    flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
    width: ${(props) => (props.width ? props.width : '100vw')};
    height: ${(props) => (props.height ? props.height : '100vh')};
    margin: ${(props) => (props.margin ? props.margin : '0')};
    background-color: ${(props) => (props.bgColor ? props.bgColor : 'white')};
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '0px')};
`

export const ContainerRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const ContainerCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const AnimatedContainer = styled.div<AnimatedContainerProps>`
    display: flex;
    height: 100%;
    opacity: 0; /* set initial opacity to 0 */
    /* backdrop-filter: blur(0px); set initial blur to 0 */
    border-radius: 1rem;
    margin: 7vh;
    animation-name: ${(props) => (props.view ? meldOutAnimation : meldInAnimation)};
    animation-fill-mode: forwards;
    animation-duration: 2s;
    z-index: 1;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1028px) {
        margin: 0;
        padding: 0;
        flex-direction: column;
    }
`

export const StyledForm = styled.form<StyledFormProps>`
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    height: 500px;
    padding: 20px;
    width: 320px;
    z-index: 10;
`
export const ButtonS = styled.button<ButtonSProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: ${(props) => props?.width || 'auto'};
    height: ${(props) => props?.height || 'auto'};
    padding: ${(props) => props.padding || '0.5rem 0.75rem'};
    font-size: ${(props) => props?.fontSize || '1rem'};
    font-weight: ${(props) => props.fontWeight || '500'};
    color: ${(props) => props.color || '#e0e0e0'};
    background-color: ${(props) => props.backgroundColor || props.colors || '#00adef'};
    border-radius: ${(props) => props.borderRadius || '0.375rem'};
    border-width: ${(props) => props.borderWidth || '0px'};
    border-color: transparent;
    border-style: solid;
    overflow: hidden;
    position: relative;
    transition: background-color 0.3s;
    border: none;
    word-break: break-word;
    font-family: inherit;

    &:hover {
        background-color: #00adef;
        cursor: pointer;
    }

    &:focus-visible {
        outline: 2px solid #00adef;
        outline-offset: 2px;
    }

    &:active::after {
        content: '';
        display: block;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        animation: ripple 0.7s ease-out;
    }

    @keyframes ripple {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(2.5);
            opacity: 1;
        }
    }
`

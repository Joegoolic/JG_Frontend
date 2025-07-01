import { HTMLAttributes } from 'react';

export interface ThinProps extends HTMLAttributes<HTMLElement> {
    thin: boolean;
}

export interface IntroGridProps extends ThinProps {}

export interface GridItemProps extends ThinProps {
    row?: string;
    col?: string;
}

export interface ImageContainerProps extends ThinProps {
    width?: string | number;
    height?: string | number;
    position?: string;
}

export interface StyledImageProps extends ThinProps {
    width?: string | number;
    height?: string | number;
    thin_width?: string | number;
    top?: string | number;
    left?: string | number;
    right?: string | number;
    position?: string;
    thin_left?: string | number;
}

export interface BlurredBackgroundProps extends ThinProps {
    meldin?: boolean;
    timer?: string;
}

export interface AnimatedItemProps extends ThinProps {
    width?: string | number;
    height?: string | number;
    flexdir?: string;
    justifycontent?: string;
    alignitems?: string;
    top?: string | number;
    position?: string;
    thin_left?: string | number;
    left?: string | number;
    flexwrap?: string;
}

export interface DatumHeaderProps extends ThinProps {
    font?: string;
}

export interface ProjectContainerProps extends ThinProps {
    displaytype?: string;
}
// This file extends styled-components types to work properly with TypeScript strict mode

import 'styled-components';

declare module 'styled-components' {
    // Allow styled components to properly handle refs
    export interface StyledComponentBase<
        C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
        T extends object,
        O extends object = {},
        A extends string = never
    > extends React.ForwardRefExoticComponent<
        Omit<
            React.ComponentPropsWithRef<C>,
            keyof T
        > & T & O & { as?: A }
    > {}
}
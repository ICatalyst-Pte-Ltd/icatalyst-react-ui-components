/// <reference types="react" />
import { NavLinkProps } from 'react-router-dom';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "active", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface NavLinkAdapterProps extends NavLinkProps {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>['classes']>;
    ownerState?: unknown;
}
export declare const NavLinkAdapter: import("react").ForwardRefExoticComponent<NavLinkAdapterProps & import("react").RefAttributes<unknown>>;
export default NavLinkAdapter;

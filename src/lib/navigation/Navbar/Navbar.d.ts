import { NavbarProps } from './NavbarProps';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export declare function Navbar({ className, style, classes: classesProp, routes, orientation, itemVariant, showLabel, showIconButton, activeEmbelish, maxDepth, }: NavbarProps<Partial<ReturnType<typeof useStyles>['classes']>>): import("@emotion/react/jsx-runtime").JSX.Element;
export default Navbar;

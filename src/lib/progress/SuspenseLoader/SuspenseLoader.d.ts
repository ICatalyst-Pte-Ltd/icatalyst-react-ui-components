import { ContainerComponent } from '../../types';
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
export interface SuspenseLoaderProps extends ContainerComponent<'div', Partial<ReturnType<typeof useStyles>['classes']>> {
}
export declare function SuspenseLoader({ className, style, classes: classesProp, children, }: SuspenseLoaderProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default SuspenseLoader;

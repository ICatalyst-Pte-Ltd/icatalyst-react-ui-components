/// <reference types="react" />
import { ContainerProps } from '../../containers';
type StyleProps = {
    backgroundColor: string;
    renderNavigation?: boolean;
};
declare const useStyles: (params: StyleProps, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "mobileNavButton" | "navigationFn" | "iconColorFn" | "colorFn", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface PageProps extends Omit<ContainerProps, 'classes'> {
    /**
     * Renders a navbar toggle button if on a small device
     */
    renderNavigation?: boolean;
    classes?: Partial<ReturnType<typeof useStyles>['classes']>;
}
export declare const Page: import("react").ForwardRefExoticComponent<Omit<PageProps, "ref"> & import("react").RefAttributes<unknown>>;
export default Page;

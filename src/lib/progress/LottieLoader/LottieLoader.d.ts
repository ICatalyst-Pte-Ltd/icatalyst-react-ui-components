import { BaseComponent } from '../../types';
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
export interface LottieLoaderProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    src: string;
    defaultSrc?: string | Record<string, any>;
}
export declare function LottieLoader({ className, style, classes: classesProp, src, defaultSrc, }: LottieLoaderProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default LottieLoader;

import { CSSProperties } from '@mui/styles';
import { BaseComponent, ComponentSize } from '../../../types';
type StyleProps = {
    spinnerSize: ComponentSize;
    spinnerColor?: string | null;
    backgroundColor?: string;
};
declare const useStyles: (params: StyleProps, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"@keyframes rotating" | "root" | "image" | "imageOverride" | "image_loaded" | "spinner" | "spinner_loaded" | "spinnerFn" | "backgroundFn", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface ImageProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    src: string | undefined | null;
    alt: string;
    defaultSrc?: string;
    spinnerSize?: ComponentSize;
    spinnerColor?: string;
    imageStyle?: CSSProperties;
    backgroundColor?: string;
    crossOrigin?: 'anonymous' | 'use-credentials';
}
export declare function Image({ className, style, classes: classesProp, src, defaultSrc, spinnerSize, spinnerColor, alt, imageStyle, backgroundColor, crossOrigin, onError, }: ImageProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Image;

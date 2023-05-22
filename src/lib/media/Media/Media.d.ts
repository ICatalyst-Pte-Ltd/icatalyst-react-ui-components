import { SyntheticEvent } from 'react';
import { BaseComponent } from '../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"audio" | "video" | "image" | "root", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface MediaProps extends Omit<BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>>, 'onLoad' | 'onError'> {
    backgroundColor?: string;
    defaultSrc?: string;
    mimeType?: string;
    src: string;
    alt: string;
    crossOrigin?: 'anonymous' | 'use-credentials';
    autoPlay?: boolean;
    controls?: boolean;
    onLoad: (e: SyntheticEvent, source: string) => void;
    onError: (e: SyntheticEvent, source: string) => void;
}
export declare function Media({ className, style, classes: classesProp, backgroundColor, defaultSrc, src, mimeType, alt, crossOrigin, autoPlay, controls, onLoad, onError, }: MediaProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Media;

import { BaseComponent, ComponentSize } from '../../../types';
type StyleProps = {
    size: ComponentSize;
    backgroundColor?: string;
    imageOffsetSize?: number;
};
declare const useStyles: (params: StyleProps, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "backgroundFn" | "colorFn" | "sizeFn" | "imageSizeFn" | "fontSizeFn" | "imageContainer" | "image" | "circular" | "square" | "letter", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface AvatarProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    title: string;
    variant?: 'circular' | 'square';
    size?: ComponentSize;
    src?: string;
    backgroundColor?: string;
    imageOffsetSize?: number;
}
export declare function Avatar({ className, style, classes: classesProp, title, src, variant, size, backgroundColor, imageOffsetSize, }: AvatarProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Avatar;

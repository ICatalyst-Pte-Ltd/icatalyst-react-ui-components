import { BaseComponent, ComponentColor, ComponentSize } from '../../types';
type StyleProps = {
    color: ComponentColor;
    size: ComponentSize;
    inheritFontSize?: number | string;
};
declare const useStyles: (params: StyleProps, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "ionWrapperFn" | "faWrapper" | "tabWrapper" | "iconWrapperSizeFn" | "colorFn", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface IconProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    /**
     * The name of the icon to display.
     * Supports material icons by using the string directly.  e.g. 'dashboard'
     * Supports fontawesome with 'fa' prefix.  e.g. 'fa fab facebook' or 'fa question'
     *
     */
    children?: string;
    /**
     * The colour of the icon
     */
    color?: ComponentColor;
    /**
     * The size of the icon
     */
    size?: ComponentSize;
}
export declare function Icon({ className, style, sx, children, color, size, classes: classesProp, onClick, }: IconProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Icon;

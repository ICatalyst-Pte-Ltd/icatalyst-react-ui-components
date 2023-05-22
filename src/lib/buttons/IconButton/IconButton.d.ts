import { IconButtonProps as NativeProps } from '@mui/material';
import { ComponentColor, ComponentSize } from '../../types';
type StyleProps = {
    size: ComponentSize;
    color: ComponentColor;
};
declare const useStyles: (params: StyleProps, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "icon" | "iconBtn" | "root_text" | "root_contained" | "root_outlined", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface IconButtonProps extends Omit<NativeProps, 'size' | 'color' | 'title' | 'icon'> {
    /**
     * The text provided here is used as both the tooltip and the aria-label
     */
    title?: string;
    /**
     * Specify the color of the icon
     */
    color?: ComponentColor;
    /**
     * The size of the control
     */
    size?: ComponentSize;
    /**
     * The icon to display.
     */
    icon?: string;
    /**
     * The variant of the button
     */
    variant?: 'text' | 'contained' | 'outlined';
    /**
     * Overrides the classes defined in the component
     */
    classes?: Partial<ReturnType<typeof useStyles>['classes']>;
}
export declare function IconButton({ className, title, icon, style, color, size, variant, id, classes: classesProp, ...rest }: IconButtonProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default IconButton;

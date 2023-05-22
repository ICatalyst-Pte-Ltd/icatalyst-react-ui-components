import { ButtonProps as NativeProps } from '@mui/material';
import { ComponentColor } from '../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "variantPill" | "noContentMargin", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css; /**
     * The variant of the button to show
     */
    cx: import("tss-react/types").Cx;
};
export interface ButtonProps extends Omit<NativeProps, 'startIcon' | 'endIcon' | 'color' | 'variant'> {
    /**
     * The icon to display.
     */
    icon?: string;
    /**
     * The positioning of the icon
     */
    iconPosition?: 'start' | 'end';
    /**
     * Overrides the classes defined in the component
     */
    classes?: Partial<ReturnType<typeof useStyles>['classes']>;
    /**
     * The color of the component
     */
    color?: ComponentColor;
    /**
     * The variant of the button to show
     */
    variant?: NativeProps['variant'] | 'pill';
}
export declare function Button({ className, children, variant, icon, iconPosition, style, color, size, classes: classesProp, ...rest }: ButtonProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Button;

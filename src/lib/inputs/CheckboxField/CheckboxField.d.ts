import { I18NArguments } from '@icatalyst/js-core';
import { CheckboxProps, FormControlLabelProps, FormControlProps } from '@mui/material';
import { ReactNode, SyntheticEvent } from 'react';
import { BaseComponent, ComponentColor } from '../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "checkbox", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface CheckboxFieldProps extends Omit<BaseComponent<'div', Partial<ReturnType<typeof useStyles>['classes']>>, 'onChange'> {
    variant?: FormControlProps['variant'] | 'pill';
    required?: boolean;
    errors?: I18NArguments[];
    labelPlacement?: FormControlLabelProps['labelPlacement'];
    disabled?: boolean;
    readonly?: boolean;
    autoFocus?: boolean;
    label: string | ReactNode;
    value: boolean;
    helperText?: string;
    color?: ComponentColor;
    disableRipple?: boolean;
    size?: 'small' | 'medium';
    /**
     * called when the value is changed through user interaction on the interactive control
     */
    onChange?: (e: SyntheticEvent, newValue: boolean | null) => void;
    fullWidth?: boolean;
    inputProps?: CheckboxProps['inputProps'];
}
export declare function CheckboxField({ className, style, classes: classesProp, variant, required, errors, labelPlacement, disabled, readonly, label, id, autoFocus, value, helperText, onChange, color, fullWidth, disableRipple, size, }: CheckboxFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default CheckboxField;

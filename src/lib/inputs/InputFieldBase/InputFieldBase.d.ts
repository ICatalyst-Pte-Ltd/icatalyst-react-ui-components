import { I18NArguments } from '@icatalyst/js-core';
import { FormControlProps, InputBaseProps } from '@mui/material';
import { ElementType, SyntheticEvent } from 'react';
import { ReactComponent } from 'tss-react/tools/ReactComponent';
import { BaseComponent } from '../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "inputLabel", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
interface FieldProps<Styles extends Record<string, string>, InputComponentProps, InputComponentType extends ReactComponent<InputComponentProps>, ValueType, Component extends ElementType = 'div'> extends Omit<BaseComponent<Component, Styles>, 'onChange' | 'placeholder'> {
    name?: string;
    /**
     * Should the editor be focused on rendering
     */
    autoFocus?: boolean;
    /**
     * If the input component is wrapped in a FormControl this should be true.
     * If this input control is not wrapped, then setting this to false will
     * wrap the input control correctly
     */
    hasFormControl?: boolean;
    /**
     * Should the form control label be displayed?
     */
    showLabel?: boolean;
    /**
     * Should the default helpertext be rendered?
     */
    showHelperText?: boolean;
    /**
     * Set this to permanently shrink or expand the form label
     */
    shrinkLabel?: boolean;
    /**
     * The value of the input
     */
    value?: ValueType | null;
    /**
     * The size of the component
     */
    size?: InputBaseProps['size'];
    /**
     * The Component to render as the input field type
     */
    InputComponent: InputComponentType;
    /**
     * The properties for the component being rendered
     */
    InputComponentProps?: InputComponentProps;
    /**
     * The description of the field
     */
    helperText?: string | I18NArguments;
    /**
     * Any errors for the field to report.
     * Errors are passed to the localisation function for display
     */
    errors?: I18NArguments[];
    /**
     * Take up the full availble width
     */
    fullWidth?: boolean;
    /**
     * The label to display for the field
     */
    label?: string | I18NArguments;
    /**
     * The placeholder content to display if the field has no value
     */
    placeholder?: string | I18NArguments;
    /**
     * Is the input element readonly?
     */
    readOnly?: boolean;
    /**
     * Is the input a required field?
     */
    required?: boolean;
    /**
     * The variant for the enclosing input control
     */
    variant?: FormControlProps['variant'] | 'pill';
    /**
     * called when the value is changed through user interaction on the interactive control
     */
    onChange?: (e: SyntheticEvent<Element, Event>, newValue: ValueType | null) => void;
    disabled?: boolean;
}
export interface WithFormControlFieldBaseProps<InputComponentProps, InputComponentType extends ReactComponent<InputComponentProps>, ValueType, Styles extends Record<string, string> = Partial<ReturnType<typeof useStyles>['classes']>, Component extends ElementType = 'div'> extends FieldProps<Styles, InputComponentProps, InputComponentType, ValueType, Component> {
    hasFormControl: true;
}
export interface WithoutFormControlFieldBaseProps<InputComponentProps, InputComponentType extends ReactComponent<InputComponentProps>, ValueType = string, Styles extends Record<string, string> = Partial<ReturnType<typeof useStyles>['classes']>, Component extends ElementType = 'div'> extends FieldProps<Styles, InputComponentProps, InputComponentType, ValueType, Component> {
    hasFormControl?: false;
}
export type InputFieldBaseProps<InputComponentProps, InputComponentType extends ReactComponent<InputComponentProps>, ValueType, Styles extends Record<string, string>, Component extends ElementType = 'div'> = WithoutFormControlFieldBaseProps<InputComponentProps, InputComponentType, ValueType, Styles, Component> | WithFormControlFieldBaseProps<InputComponentProps, InputComponentType, ValueType, Styles, Component>;
export declare function InputFieldBase<FieldPropTypes extends InputFieldBaseProps<any, any, any, any>>({ className, style, classes: classesProp, ...props }: FieldPropTypes): import("@emotion/react/jsx-runtime").JSX.Element;
export default InputFieldBase;

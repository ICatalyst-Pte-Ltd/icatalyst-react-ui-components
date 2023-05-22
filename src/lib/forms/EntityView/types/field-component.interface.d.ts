import { I18NArguments } from '@icatalyst/js-core';
import { CSSProperties, SyntheticEvent } from 'react';
import { EntityField } from '../../../utilities';
import { InputBaseProps } from '../../../inputs/InputBase';
import { FormControlProps } from '@mui/material';
export interface FieldComponentProps<ValueType = string, Classes extends Record<string, string> = any> {
    /**
     * The ID of the editor
     */
    id?: string;
    /**
     * The name of the editor, if not supplied the id will be used
     */
    name?: string;
    className?: string;
    style?: CSSProperties;
    /**
     * Overrides the classes defined in the component
     */
    classes?: Classes;
    /**
     * The field that is being rendered
     */
    field: EntityField;
    /**
     * The description of the field
     */
    helperText?: string | I18NArguments;
    editorProps?: Record<string, any>;
    /**
     * Should the field be displayed in its dense mode?
     */
    dense?: boolean;
    /**
     * The variant for the enclosing input control
     */
    variant?: FormControlProps['variant'] | 'pill';
    /**
     * Should the editor be focused when it comes onscreen
     */
    autoFocus?: boolean;
    /**
     * The errors that are relevant to this field
     */
    errors?: I18NArguments[];
    /**
     * The controlled value for this editor
     */
    value: ValueType | undefined | null;
    /**
     * The handler for when the value is changed by the user
     */
    onChange: (event: SyntheticEvent | null, newValue: ValueType | null | Record<string, unknown>) => void;
    /**
     * Specifies if the field should be readonly or not
     */
    readonly?: boolean;
    /**
     * The size of the component
     */
    size?: InputBaseProps['size'];
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
     * Is the input disabled?
     */
    disabled?: boolean;
}

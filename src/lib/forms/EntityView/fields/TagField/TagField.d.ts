import { SyntheticEvent } from 'react';
import { TagInputFieldProps as EditorProps } from '../../../../inputs';
import { Builder } from '../../types/builder.type';
import { FieldComponentProps } from '../../types/field-component.interface';
export interface TagFieldProps<TagType = string> extends Omit<FieldComponentProps<TagType[]>, 'onChange'> {
    editorProps?: EditorProps<TagType>;
    /**
     * The handler for when the value is changed by the user
     */
    onChange: (event: SyntheticEvent | null, newValue: TagType[] | null) => void;
}
export declare function TagField<TagType = string>({ className, style, classes: classesProp, field, editorProps, dense, variant, autoFocus, errors, value, label, onChange, readonly, }: TagFieldProps<TagType>): import("@emotion/react/jsx-runtime").JSX.Element;
export declare const fieldBuilder: Builder;
export default fieldBuilder;

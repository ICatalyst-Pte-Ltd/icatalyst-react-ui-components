import { SyntheticEvent } from 'react';
import { ImageUrlInputFieldProps as EditorProps } from '../../../../inputs';
import { Builder } from '../../types/builder.type';
import { FieldComponentProps } from '../../types/field-component.interface';
export interface ImageURLFieldProps extends Omit<FieldComponentProps<string>, 'onChange'> {
    editorProps?: EditorProps;
    onChange: (event: SyntheticEvent | null, newValue: string | null) => void;
}
export declare function ImageURLField({ className, style, classes: classesProp, field, editorProps, dense, variant, autoFocus, errors, value, label, onChange, readonly, }: ImageURLFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare const imageURLFieldBuilder: Builder;
export default imageURLFieldBuilder;

import { TextFieldProps as EditorProps } from '../../../../inputs/TextField';
import { Builder } from '../../types/builder.type';
import { FieldComponentProps } from '../../types/field-component.interface';
export interface TextFieldProps extends FieldComponentProps<string> {
    editorProps?: {
        size?: EditorProps['size'];
        variant?: EditorProps['variant'];
        maxLength?: number;
    };
}
export declare function TextField({ className, style, classes: classesProp, field, editorProps, dense, variant, autoFocus, errors, onChange, value, readonly, }: TextFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare const fieldBuilder: Builder;
export default fieldBuilder;

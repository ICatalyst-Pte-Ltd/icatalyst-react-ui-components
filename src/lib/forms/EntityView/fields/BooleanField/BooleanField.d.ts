import { FieldComponentProps } from '../../types/field-component.interface';
import { CheckboxFieldProps as EditorProps } from '../../../../inputs';
import { Builder } from '../../types/builder.type';
export interface BooleanFieldProps extends FieldComponentProps<boolean> {
    editorProps?: {
        variant?: EditorProps['variant'];
    };
}
export declare function BooleanField({ className, style, classes: classesProp, field, editorProps, dense, variant, autoFocus, errors, onChange, value, label, readonly, }: BooleanFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare const fieldBuilder: Builder;
export default fieldBuilder;

import { Builder } from '../../types/builder.type';
import { FieldComponentProps } from '../../types/field-component.interface';
import { DateInputFieldProps as EditorProps } from '../../../../inputs';
export interface DateFieldProps extends FieldComponentProps<number | null> {
    editorProps?: {
        variant?: EditorProps['variant'];
    };
    label?: EditorProps['label'];
}
export declare function DateField({ className, style, classes: classesProp, field, editorProps, dense, variant, autoFocus, errors, onChange, value, label, readonly, }: DateFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare const fieldBuilder: Builder;
export default fieldBuilder;

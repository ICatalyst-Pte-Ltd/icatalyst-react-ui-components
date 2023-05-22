import { RichTextEditor as CKRTE, RichTextEditorProps } from '@ckeditor/ckeditor5-custom';
import { FormControlProps } from '@mui/material';
import { WithFormControlFieldBaseProps } from '../InputFieldBase';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface RichTextInputFieldProps extends Omit<WithFormControlFieldBaseProps<RichTextEditorProps, typeof CKRTE, string, Partial<ReturnType<typeof useStyles>['classes']>>, 'hasFormControl' | 'InputComponent'> {
    maxLength?: number;
    multiline?: boolean;
    rows?: number;
    size?: FormControlProps['size'];
    editorVariant?: RichTextEditorProps['variant'];
}
export declare function RichTextInputField({ className, style, classes: classesProp, onChange, id, value, variant, editorVariant, ...rest }: RichTextInputFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default RichTextInputField;

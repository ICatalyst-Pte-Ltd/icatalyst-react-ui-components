import { TextField, TextFieldProps } from '@mui/material';
import { WithFormControlFieldBaseProps } from '../InputFieldBase';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "adornmentImage", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface ImageUrlInputFieldProps extends Omit<WithFormControlFieldBaseProps<TextFieldProps, typeof TextField, string | null, Partial<ReturnType<typeof useStyles>['classes']>>, 'hasFormControl' | 'InputComponent'> {
    debounce?: number;
}
export declare function ImageUrlInputField({ className, style, classes: classesProp, onChange, id, name, value, variant, debounce, InputComponentProps, ...rest }: ImageUrlInputFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default ImageUrlInputField;

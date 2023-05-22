import { RichTextInputFieldProps } from '../../../../inputs';
import { Builder } from '../../types/builder.type';
import { FieldComponentProps } from '../../types/field-component.interface';
type StyleProps = {
    dense: boolean;
};
declare const useStyles: (params: StyleProps, styleOverrides?: {
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
export interface RichtextFieldProps extends FieldComponentProps<string | null, Partial<ReturnType<typeof useStyles>['classes']>> {
    editorProps?: RichTextInputFieldProps;
}
export declare function RichtextField({ className, style, classes: classesProp, field, editorProps, dense, variant, autoFocus, errors, onChange, value, label, readonly, ...rest }: RichtextFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare const fieldBuilder: Builder;
export default fieldBuilder;

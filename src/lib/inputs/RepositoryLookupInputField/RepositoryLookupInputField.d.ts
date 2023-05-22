import { Select, FormControlProps, SelectProps } from '@mui/material';
import { WithoutFormControlFieldBaseProps } from '../InputFieldBase';
type StyleProps = {
    variant: FormControlProps['variant'] | 'pill';
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
export interface RepositoryLookupInputFieldProps extends Omit<WithoutFormControlFieldBaseProps<SelectProps, typeof Select, string, Partial<ReturnType<typeof useStyles>['classes']>>, 'hasFormControl' | 'InputComponent'> {
    dataDefinition: string;
    repositoryName: string;
    filter?: Record<string, unknown>;
    value: string;
}
export declare function RepositoryLookupInputField({ className, style, classes: classesProp, onChange, id, value, variant, InputComponentProps, dataDefinition, repositoryName, filter, ...rest }: RepositoryLookupInputFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default RepositoryLookupInputField;

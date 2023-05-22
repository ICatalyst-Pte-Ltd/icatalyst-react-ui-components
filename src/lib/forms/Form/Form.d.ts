import { FormEventHandler } from 'react';
import { ContainerComponent } from '../../types';
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
export interface FormProps extends Omit<ContainerComponent<'form', Partial<ReturnType<typeof useStyles>['classes']>>, 'onSubmit'> {
    onSubmit: FormEventHandler;
}
export declare function Form({ className, style, classes: classesProp, children, onSubmit, }: FormProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Form;

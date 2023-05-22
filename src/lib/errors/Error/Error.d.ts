import { AlertProps } from '@mui/material';
import { ReactNode } from 'react';
import { BaseComponent } from '../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "alertTitle" | "alertTitleNoContent", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
type ErrorIconMapping = {
    error: string;
    info: string;
    success: string;
    warning: string;
};
export type Error = {
    message: string;
    severity?: AlertProps['severity'];
};
export interface ErrorProps extends Omit<BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>>, 'children'> {
    error?: Error;
    children?: ReactNode;
    size?: 'small' | 'medium';
    iconMapping?: ErrorIconMapping;
}
export declare function Error({ className, style, error, children, size, classes: classesProp, iconMapping, }: ErrorProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Error;

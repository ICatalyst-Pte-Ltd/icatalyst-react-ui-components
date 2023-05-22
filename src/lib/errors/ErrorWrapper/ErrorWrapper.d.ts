import { ReactNode } from 'react';
import { BaseComponent } from '../../types';
import { Error } from '../Error/Error';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "root_prominent" | "root_condensed" | "titleWrapper" | "icon" | "list" | "list_prominent" | "list_condensed" | "contentWrapper", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface ErrorWrapperProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    title?: string;
    icon?: string;
    showDetails?: boolean;
    errors: Error[];
    children?: ReactNode;
    variant?: 'prominent' | 'condensed';
}
export declare function ErrorWrapper({ className, style, classes: classesProp, role, title, showDetails, errors, children, variant, icon, }: ErrorWrapperProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default ErrorWrapper;

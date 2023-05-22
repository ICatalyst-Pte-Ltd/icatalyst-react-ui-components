import { BaseComponent } from '../../../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "iconWrapper" | "icon" | "title", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
type EmptyStateParams = {
    updating: boolean;
    entityName: string;
    entityIcon?: string;
};
export interface EmptyGridViewProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    getStateParams: () => EmptyStateParams;
}
export declare function EmptyGridView({ className, style, classes: classesProp, getStateParams, }: EmptyGridViewProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default EmptyGridView;

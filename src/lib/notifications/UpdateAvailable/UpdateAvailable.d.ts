import { BaseComponent } from '../../types';
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
export interface UpdateAvailableProps extends BaseComponent<'div', Partial<ReturnType<typeof useStyles>['classes']>> {
}
export declare function UpdateAvailable({ className, style, classes: classesProp, }: UpdateAvailableProps): import("@emotion/react/jsx-runtime").JSX.Element | null;
export default UpdateAvailable;

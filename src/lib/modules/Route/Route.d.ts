import { BaseComponent, RouteDefinition } from '../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "route" | "disabledRoute" | "subRoute" | "routeHeader" | "icon" | "roleAccess" | "subtitle" | "path", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface RouteProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    route: RouteDefinition;
    subRoute?: boolean;
    filter?: string | null;
    path?: string;
}
export declare function Route({ className, style, classes: classesProp, route, subRoute, filter, path, }: RouteProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Route;

import { BaseComponent, ReactModuleConfig } from '../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "routeList", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface RouteExplorerProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    modules: ReactModuleConfig<any, any>[];
}
export declare function RouteExplorer({ className, style, classes: classesProp, modules, }: RouteExplorerProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default RouteExplorer;

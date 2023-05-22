import { BaseComponent, ModuleConfig } from '../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "module" | "disabledModule" | "subModule" | "moduleHeader" | "icon" | "roleAccess" | "subtitle" | "path", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface ModuleProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    module: ModuleConfig<any, any>;
    subModule?: boolean;
    filter?: string | null;
    path?: string;
}
export declare function Module({ className, style, classes: classesProp, module, subModule, path, filter, }: ModuleProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Module;

import { BaseComponent, ReactModuleConfig } from '../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "moduleList", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface ModuleExplorerProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    modules: ReactModuleConfig<any, any>[];
}
export declare function ModuleExplorer({ className, style, classes: classesProp, modules, }: ModuleExplorerProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default ModuleExplorer;

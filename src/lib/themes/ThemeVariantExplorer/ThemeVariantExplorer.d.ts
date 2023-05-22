import { Theme } from '@mui/material/styles';
import { BaseComponent } from '../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "select" | "explorer", string>;
    theme: Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface ThemeVariantExplorerProps extends BaseComponent<'div', Partial<ReturnType<typeof useStyles>['classes']>> {
    themes: Record<string, Theme>;
}
export declare function ThemeVariantExplorer({ className, style, classes: classesProp, themes, }: ThemeVariantExplorerProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default ThemeVariantExplorer;

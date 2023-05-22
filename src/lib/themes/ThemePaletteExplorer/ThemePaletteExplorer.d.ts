import { Theme } from '@mui/material/styles';
import { BaseComponent } from '../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root", string>;
    theme: Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface ThemePaletteExplorerProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    title: string;
    theme: Theme;
}
export declare function ThemePaletteExplorer({ className, style, classes: classesProp, title, theme, }: ThemePaletteExplorerProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default ThemePaletteExplorer;

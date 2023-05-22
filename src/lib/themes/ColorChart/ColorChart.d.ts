import { ColorSwatch as ColorSwatchType } from '@icatalyst/js-core';
import { BaseComponent } from '../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "variants" | "swatches" | "title", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface ColorChartProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    title: string;
    colors: ColorSwatchType | {
        [key: string]: string;
    };
    variants?: boolean;
}
export declare function ColorChart({ className, style, classes: classesProp, title, colors, variants, }: ColorChartProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default ColorChart;

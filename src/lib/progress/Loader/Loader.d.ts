import { Theme } from '@mui/material';
import { BaseComponent, ComponentColor } from '../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "title" | "linearProgress" | "circularProgress", string>;
    theme: Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export type LoaderColorProp = Exclude<ComponentColor, 'action' | 'disabled'>;
export interface LoaderProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    title?: string;
    color?: LoaderColorProp;
    variant?: 'linear' | 'circular';
    minValue?: number;
    maxValue?: number;
    value?: number;
}
export declare function Loader({ className, style, classes: classesProp, title, id, color, variant, minValue, maxValue, value, }: LoaderProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Loader;

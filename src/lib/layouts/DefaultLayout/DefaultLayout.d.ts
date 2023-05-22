import { Theme } from '@mui/material';
import { LayoutContainerProps } from '../../modules';
import { LayoutDefinition } from '../../types';
declare const useStyles: (params: LayoutDefinition<"default"> & {
    theme: {
        main: string;
        dialog: string;
    };
} & {
    mainTheme?: Theme | undefined;
}, styleOverrides?: {
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
export type DefaultLayoutDefinitionProps = LayoutDefinition<'default'> & {
    theme: {
        main: string;
        dialog: string;
    };
};
export declare const DefaultLayoutDefaults: DefaultLayoutDefinitionProps;
export type DefaultLayoutProps = LayoutContainerProps<DefaultLayoutDefinitionProps, Partial<ReturnType<typeof useStyles>['classes']>>;
export declare function DefaultLayout({ className, style, classes: classesProp, layoutConfig, }: DefaultLayoutProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default DefaultLayout;

/// <reference types="react" />
import { DrawerProps } from '@mui/material';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "drawerContent", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export type ContextPanelPosition = 'left' | 'right' | 'top' | 'bottom' | 'none';
export interface ContextPanelProps extends DrawerProps {
    position?: ContextPanelPosition;
    open?: boolean;
    classes?: Partial<ReturnType<typeof useStyles>['classes']>;
}
export declare const ContextPanel: import("react").ForwardRefExoticComponent<Omit<ContextPanelProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default ContextPanel;

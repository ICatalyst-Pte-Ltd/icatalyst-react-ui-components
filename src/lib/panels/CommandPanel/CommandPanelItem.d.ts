import { MouseEventHandler } from 'react';
import { BaseComponent, ComponentColor, ComponentSize } from '../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface CommandPanelItemProps extends Omit<BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>>, 'onClick'> {
    icon: string;
    size?: ComponentSize;
    color?: ComponentColor;
    onClick: MouseEventHandler<HTMLButtonElement>;
    title: string;
}
export declare function CommandPanelItem({ className, style, classes: classesProp, icon, size, color, onClick, title, ...rest }: CommandPanelItemProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default CommandPanelItem;

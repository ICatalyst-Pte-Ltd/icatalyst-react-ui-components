import { ReactNode } from 'react';
import { BaseComponent } from '../../types';
import { ButtonProps } from '../Button';
import { IconButtonProps } from '../IconButton';
type StyleProps = {
    count: number;
};
declare const useStyles: (params: StyleProps, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "action" | "action_iconButton" | "action_button" | "action_color_inherit" | "action_color_default" | "action_color_action" | "action_color_disabled" | "action_color_primary" | "action_color_secondary" | "action_color_error" | "action_color_info" | "action_color_success" | "action_color_warning", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface ActionsProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    actions: (Omit<ButtonProps, 'children'> | IconButtonProps | (() => ReactNode))[];
    variant?: 'iconButton' | 'button';
}
export declare function Actions({ className, style, classes: classesProp, variant, actions, }: ActionsProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Actions;

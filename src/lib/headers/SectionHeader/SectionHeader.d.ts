import { ButtonProps, ComponentSize, ComponentColor, ContainerComponent } from '../../';
import { IconButtonProps } from '@mui/material';
import { ReactNode } from 'react';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "root_inherit" | "root_small" | "root_large" | "root_medium" | "root_condensed" | "root_prominent" | "titleWrapper" | "icon" | "title" | "titleText" | "contentWrapper" | "actionWrapper" | "actionWrapper_condensed" | "actionWrapper_prominent" | "actionButton" | "actionButton_inherit" | "actionButton_default" | "actionButton_primary" | "actionButton_secondary" | "actionButton_error" | "actionButton_info" | "actionButton_success" | "actionButton_warning", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface SectionHeaderProps extends ContainerComponent<'div', Partial<ReturnType<typeof useStyles>['classes']>> {
    title: string;
    size?: ComponentSize;
    subtitle?: string;
    actions?: (ButtonProps | IconButtonProps | (() => ReactNode))[];
    variant?: 'condensed' | 'prominent';
    icon?: string;
    iconColor?: ComponentColor;
    iconTitle?: string;
    onIconClick?: () => void;
    titleAction?: ReactNode;
}
export declare function SectionHeader({ className, style, classes: classesProp, title, size, variant, subtitle, actions, icon, iconColor, iconTitle, onIconClick, children, titleAction, }: SectionHeaderProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default SectionHeader;

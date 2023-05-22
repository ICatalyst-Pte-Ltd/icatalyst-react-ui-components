import { TransitionProps } from '@mui/material/transitions';
import { MouseEvent, MouseEventHandler, ReactElement } from 'react';
import { BaseComponent, ComponentAlignmentHorizontal, ComponentAlignmentVertical, ComponentColor, ComponentSize } from '../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "menuLabel" | "dropdown" | "listItem" | "listItemText" | "subListItem" | "subListItemText" | "menuItem" | "menuItemElement", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export type MenuItem = {
    title: string;
    icon?: string;
    subtitle?: string;
    onClick?: MouseEventHandler<any>;
    iconColor?: ComponentColor;
    showLabel?: boolean;
    menu?: (MenuItem | ReactElement)[];
    open?: boolean;
};
export interface DropdownMenuProps extends Omit<BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>>, 'onChange'> {
    label?: string | ReactElement;
    secondaryLabel?: string;
    title?: string;
    prefixIcon?: string;
    prefixIconColor?: ComponentColor;
    icon?: string;
    iconColor?: ComponentColor;
    size?: ComponentSize;
    onClose?: (e: MouseEvent) => void;
    anchorOrigin?: {
        vertical: ComponentAlignmentVertical;
        horizontal: ComponentAlignmentHorizontal;
    };
    transformOrigin?: {
        vertical: ComponentAlignmentVertical;
        horizontal: ComponentAlignmentHorizontal;
    };
    TransitionComponent?: React.JSXElementConstructor<TransitionProps & {
        children: React.ReactElement<any, any>;
    }>;
    menu: (MenuItem | ReactElement)[];
    anchorElement?: HTMLElement | null;
    hideIconButton?: boolean;
}
export declare const DropdownMenu: import("react").ForwardRefExoticComponent<DropdownMenuProps & import("react").RefAttributes<unknown>>;
export default DropdownMenu;

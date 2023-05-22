import { IconButtonProps } from '@mui/material';
import { NavigateOptions, Path } from 'react-router-dom';
import { ButtonProps } from '../../buttons';
import { BaseComponent, ComponentColor } from '../../types';
import { LinkProps } from '../Link';
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
export interface BaseRouteLinkProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    title: string;
    to: string | Partial<Path>;
    color?: ComponentColor;
    icon?: string;
    navigationOptions?: NavigateOptions;
}
export interface RouteLinkLinkProps extends BaseRouteLinkProps {
    variant?: 'link';
    LinkProps?: Omit<LinkProps, 'href' | 'target' | 'icon' | 'color' | 'onClick'>;
    IconButtonProps?: undefined;
    ButtonProps?: undefined;
}
export interface RouteLinkIconButtonProps extends BaseRouteLinkProps {
    variant: 'iconButton';
    IconButtonProps?: Omit<IconButtonProps, 'icon' | 'color' | 'onClick'>;
    LinkProps: undefined;
    ButtonProps: undefined;
}
export interface RouteLinkButtonProps extends BaseRouteLinkProps {
    variant: 'button';
    ButtonProps?: Omit<ButtonProps, 'icon' | 'color' | 'onClick'>;
    LinkProps: undefined;
    IconButtonProps: undefined;
}
export type RouteLinkProps = RouteLinkLinkProps | RouteLinkIconButtonProps | RouteLinkButtonProps;
export declare function RouteLink(props: RouteLinkProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default RouteLink;

import { ReactElement } from 'react';
import { NavItemProps } from '../NavItem/NavItemProps';
export interface NavLinkProps extends NavItemProps {
    iconButton?: ReactElement;
}
export declare function NavLink({ className, style, classes: classesProp, route, variant, depth, onClick, iconButton, showLabel, showIconButton, activeEmbelish, orientation, }: NavLinkProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default NavLink;

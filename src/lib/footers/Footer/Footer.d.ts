import { AppBarProps, ToolbarProps } from '@mui/material';
import { ReactElement } from 'react';
export interface FooterProps extends Omit<AppBarProps, 'children'> {
    titleContent?: ReactElement;
    actionContent?: ReactElement;
    ToolbarProps?: ToolbarProps;
}
export declare const Footer: import("react").ForwardRefExoticComponent<Omit<FooterProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Footer;

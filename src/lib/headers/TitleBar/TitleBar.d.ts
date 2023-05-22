import { AppBarProps, ToolbarProps } from '@mui/material';
import { ReactElement } from 'react';
export interface TitleBarProps extends Omit<AppBarProps, 'children'> {
    titleContent?: ReactElement;
    actionContent?: ReactElement;
    ToolbarProps?: ToolbarProps;
}
export declare const TitleBar: import("react").ForwardRefExoticComponent<Omit<TitleBarProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default TitleBar;

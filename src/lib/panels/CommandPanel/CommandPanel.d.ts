import { ReactElement } from 'react';
import { ContainerProps } from '../../containers';
import { ComponentColor, ComponentSize } from '../../types';
import { CommandPanelItemProps } from './CommandPanelItem';
export type CommandPanelItem = ReactElement | ((props: CommandPanelProps) => ReactElement) | CommandPanelItemProps;
export interface CommandPanelProps extends Omit<ContainerProps, 'children'> {
    size?: ComponentSize;
    color?: ComponentColor;
    primaryMenu?: CommandPanelItem[][];
    secondaryMenu?: CommandPanelItem[][];
    overflowIcon?: string;
}
export declare function CommandPanel({ className, style, classes: classesProp, elevation, size, color, primaryMenu, secondaryMenu, overflowIcon, ...rest }: CommandPanelProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default CommandPanel;

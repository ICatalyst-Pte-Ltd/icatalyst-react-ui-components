import { DialogContentProps as MuiDialogContentProps } from '@mui/material';
import { MouseEventHandler } from 'react';
import { ComponentColor } from '../../../types';
export type DialogAction = {
    title: string;
    className?: string;
    color?: Exclude<ComponentColor, 'action' | 'disabled'>;
    icon?: string;
    variant?: 'contained' | 'outlined' | 'text';
    disabled?: boolean | (() => boolean);
    onClick: MouseEventHandler<HTMLButtonElement>;
} | 'spacer';
export interface DialogContentProps extends MuiDialogContentProps {
    hideCloseButton?: boolean;
    closeText?: string;
    closeIcon?: string;
    onClose?: MouseEventHandler<HTMLButtonElement>;
    disableActions?: boolean;
    actions?: DialogAction[];
}
export declare function DialogContent({ className, style, children, classes: classesProp, closeText, closeIcon, hideCloseButton, disableActions, onClose, actions, }: DialogContentProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default DialogContent;

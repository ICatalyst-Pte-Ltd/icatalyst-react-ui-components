import { DialogProps as MuiDialogProps } from '@mui/material';
import { ComponentColor } from '../../types';
export interface DialogProps extends Omit<MuiDialogProps, 'onClose'> {
    description?: string;
    showTitle?: boolean;
    allowClose?: boolean;
    closeButtonText?: string;
    closeButtonIcon?: string;
    variant?: 'default' | 'flat';
    appBarColor?: Exclude<ComponentColor, 'disabled'>;
    onClose?: (event: Record<any, any>, reason: 'backdropClick' | 'escapeKeyDown' | 'closeButtonClick') => void;
}
export declare function Dialog({ className, style, children, classes: classesProp, open, fullWidth, fullScreen, onClose, id, keepMounted, TransitionComponent, TransitionProps, showTitle, title, description, allowClose, closeButtonText, closeButtonIcon, variant, appBarColor, ...rest }: DialogProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Dialog;

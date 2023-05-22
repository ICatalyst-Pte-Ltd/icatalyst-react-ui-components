import { SnackbarProps as MuiSnackbarProps } from '@mui/material';
export interface SnackbarProps extends MuiSnackbarProps {
    variant?: 'message' | 'error' | 'warning' | 'info' | 'success';
}
export declare function Snackbar({ className, style, classes: classesProp, message, action, variant, autoHideDuration, open, onClose, ...rest }: SnackbarProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Snackbar;

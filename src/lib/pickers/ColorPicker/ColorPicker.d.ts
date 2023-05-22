import { PopperPlacementType } from '@mui/material';
import { ChangeEvent } from 'react';
import { TextFieldProps } from '../../inputs';
import { InputBaseProps } from '../../inputs/InputBase';
export type ColorPickerProps = Omit<TextFieldProps, 'variant'> & {
    defaultColor?: string;
    /**
     * Placement of the popup menu
     */
    placement?: PopperPlacementType;
    onChange?: (e: ChangeEvent | null, value: string) => void;
    variant: InputBaseProps['variant'];
};
export declare function ColorPicker({ className, style, classes: classesProp, variant, autoComplete, fullWidth, clearable, icon, iconColor, iconSize, value, defaultColor, onChange, placement, ...rest }: ColorPickerProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default ColorPicker;

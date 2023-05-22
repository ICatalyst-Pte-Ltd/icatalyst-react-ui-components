import { PopperPlacementType } from '@mui/material';
import { ReactElement } from 'react';
import { ButtonProps } from '../Button';
export type SplitButtonMenuOption = {
    label: string;
    className?: string;
    icon?: string;
    selectedLabel?: string;
    onClick?: (e: React.MouseEvent | null, option: SplitButtonMenuOption) => void;
};
export interface SplitButtonProps extends ButtonProps {
    /**
     * Placement of the popup menu
     */
    placement?: PopperPlacementType;
    options: SplitButtonMenuOption[];
    /**
     * The initial option to select if nothing else is selected
     */
    selectedIndex?: number;
    renderOption?: (option: SplitButtonMenuOption) => ReactElement;
    /**
     * Executes the click function when an option is selected.  Defaults to false
     */
    clickOnSelect?: boolean;
}
export declare function SplitButton({ className, variant, icon, iconPosition, style, color, size, id, placement, onChange, options, selectedIndex, renderOption, clickOnSelect, classes: classesProp, }: SplitButtonProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default SplitButton;

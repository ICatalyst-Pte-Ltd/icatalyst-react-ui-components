import { I18NArguments } from '@icatalyst/js-core';
import { AutocompleteGroupedOption, AutocompleteProps, ChipTypeMap } from '@mui/material';
import React, { ReactNode, SyntheticEvent } from 'react';
import { InputBaseProps } from '../InputBase';
export interface BaseSelectFieldProps<OptionType, Multiple extends boolean | undefined = undefined, DisableClearable extends boolean | undefined = undefined, FreeSolo extends boolean | undefined = undefined, ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']> extends Omit<InputBaseProps<AutocompleteProps<OptionType, Multiple, DisableClearable, FreeSolo, ChipComponent>>, 'InputComponent' | 'value' | 'onChange'> {
    /**
     * The list of options available to present
     */
    options: OptionType[];
    /**
     * Can multiple items be selected?+
     */
    multiple?: boolean;
    /**
     * Can the user add items to the list?
     */
    freeSolo?: boolean;
    /**
     * Renders the Option as a List Item in the popper
     */
    renderOption?: (option: OptionType | AutocompleteGroupedOption<OptionType>, optionProps: React.HTMLAttributes<HTMLLIElement>, index: number, options: OptionType[] | AutocompleteGroupedOption<OptionType>[]) => ReactNode;
    /**
     * The value that has been set for the control
     */
    value?: OptionType;
    onChange?: (e: SyntheticEvent<Element, Event>, value: OptionType | null) => void;
    getOptionLabel?: (option: string | OptionType) => string;
    noOptionsText?: I18NArguments;
    isOptionEqualToValue?: (option: OptionType, value: OptionType) => boolean;
}
export type SelectFieldProps<OptionType = {
    title: string;
    subtitle?: string;
} | string> = DefaultSelectFieldProps<OptionType>;
export interface DefaultSelectFieldProps<OptionType> extends BaseSelectFieldProps<OptionType, false, false, false> {
    multiple?: false;
    freeSolo?: false;
}
export declare function SelectField<OptionType = {
    title: string;
    subtitle?: string;
} | string>({ className, style, classes: classesProp, variant, disabled, readOnly, size, options, id, multiple, freeSolo, renderOption, value, autoComplete, shrink, clearable, getOptionLabel, noOptionsText, isOptionEqualToValue, onChange, ...rest }: SelectFieldProps<OptionType>): import("@emotion/react/jsx-runtime").JSX.Element;
export default SelectField;

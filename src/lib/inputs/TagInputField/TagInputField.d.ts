import { AutocompleteOwnerState, AutocompleteProps, AutocompleteRenderGetTagProps, ChipProps, FormControlProps } from '@mui/material';
import { ReactNode } from 'react';
import { WithFormControlFieldBaseProps } from '../InputFieldBase';
type StyleProps = {
    variant: FormControlProps['variant'] | 'pill';
};
declare const useStyles: (params: StyleProps, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
type TagFieldAdapterProps<TagType = string> = Omit<FormControlProps, 'variant'> & Omit<AutocompleteProps<TagType, any, any, any>, 'value' | 'variant' | 'renderInput' | 'defaultValue' | 'options' | 'renderTags'> & {
    variant?: FormControlProps['variant'] | 'pill';
    value?: TagType[] | null;
    defaultValue?: TagType[] | null;
    options?: TagType[];
    renderTags?: ((value: TagType[], getTagProps: AutocompleteRenderGetTagProps, ownerState: AutocompleteOwnerState<TagType, undefined, undefined, undefined, 'div'>) => ReactNode) | undefined;
};
declare function TagFieldAdapter<TagType = string | null>(props: TagFieldAdapterProps<TagType>): import("@emotion/react/jsx-runtime").JSX.Element;
export interface TagInputFieldProps<TagType = string> extends Omit<WithFormControlFieldBaseProps<TagFieldAdapterProps<TagType>, typeof TagFieldAdapter<TagType>, TagType[], Partial<ReturnType<typeof useStyles>['classes']>>, 'hasFormControl' | 'InputComponent'> {
    value: TagType[];
    /**
     * The color of the chip
     */
    chipColor?: ChipProps['color'];
    /**
     * The variant of the chip
     */
    chipVariant?: 'outlined' | 'filled';
    /**
     * Allows determining of the chip color based on data in the option itself
     */
    getChipColor?: (option: TagType) => ChipProps['color'];
    /**
     * The list of options available to the user
     */
    options?: TagType[];
    getOptionLabel?: (tag: TagType) => React.ReactNode;
    renderTags?: (value: TagType | TagType[], getTagProps: AutocompleteRenderGetTagProps, ownerState?: AutocompleteOwnerState<TagType, any, any, any, 'div'>) => React.ReactNode;
}
export declare function TagInputField<TagType = string>({ className, style, classes: classesProp, onChange, id, value, variant, options, InputComponentProps, renderTags, chipVariant, getOptionLabel, chipColor, getChipColor, ...rest }: TagInputFieldProps<TagType>): import("@emotion/react/jsx-runtime").JSX.Element;
export default TagInputField;

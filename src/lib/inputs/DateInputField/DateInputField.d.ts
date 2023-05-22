import { DatePickerProps } from '@mui/x-date-pickers';
import { Moment } from 'moment';
import { WithFormControlFieldBaseProps } from '../InputFieldBase';
declare const useStyles: (params: void, styleOverrides?: {
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
type DatePickerFieldAdapterProps = DatePickerProps<Moment> & {
    helperText: string;
    clearable: boolean;
};
declare function DatePickerFieldAdapter(props: DatePickerFieldAdapterProps): import("@emotion/react/jsx-runtime").JSX.Element;
export interface DateInputFieldProps extends Omit<WithFormControlFieldBaseProps<DatePickerFieldAdapterProps, typeof DatePickerFieldAdapter, number | null, Partial<ReturnType<typeof useStyles>['classes']>>, 'hasFormControl' | 'InputComponent'> {
}
export declare function DateInputField({ className, style, classes: classesProp, onChange, id, value, ...rest }: DateInputFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default DateInputField;

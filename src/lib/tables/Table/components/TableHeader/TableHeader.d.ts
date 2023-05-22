import { HeaderGroup } from 'react-table';
import { BaseComponent } from '../../../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "cell", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface TableHeaderProps<DataType extends object> extends BaseComponent<'div', Partial<ReturnType<typeof useStyles>['classes']>> {
    headerGroups: HeaderGroup<DataType>[];
}
export declare function TableHeader<DataType extends object>({ className, style, classes: classesProp, headerGroups, }: TableHeaderProps<DataType>): import("@emotion/react/jsx-runtime").JSX.Element;
export default TableHeader;

import { TableBodyProps as MUITableBodyProps } from '@mui/material';
import { Row } from 'react-table';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "root_variant_condensed" | "root_variant_regular" | "root_variant_expanded" | "row" | "row_variant_condensed" | "row_variant_regular" | "row_variant_expanded" | "cell", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface TableBodyProps<DataType extends object> extends MUITableBodyProps<'tbody', Partial<ReturnType<typeof useStyles>['classes']>>, MUITableBodyProps {
    prepareRow: (data: Row<DataType>) => void;
    page: Row<DataType>[];
    onRowClick?: (data: DataType) => void;
    variant?: 'condensed' | 'regular' | 'expanded';
}
export declare function TableBody<DataType extends object>({ className, style, classes: classesProp, prepareRow, page, onRowClick, variant, ...rest }: TableBodyProps<DataType>): import("@emotion/react/jsx-runtime").JSX.Element;
export default TableBody;

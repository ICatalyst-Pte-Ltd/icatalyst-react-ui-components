import { BaseComponent } from '../../types';
import { ForwardedRef } from 'react';
import { ReactComponent } from 'tss-react/tools/ReactComponent';
import { Field } from '../../utilities';
import { EmptyTableViewProps } from './components/EmptyTableView';
import { TableBodyProps } from './components/TableBody';
import { TableFooterProps } from './components/TableFooter';
import { TableCanSelectRow } from './utilities/createTableColumns';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "table" | "root_variant_condensed" | "root_variant_regular" | "root_variant_expanded" | "table_updating" | "tableScroll" | "tableHeader" | "tableBody" | "tableFooterToolbar" | "loaderWrapper", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface TableRef<DataType> {
    onSearchChange: (search: string | null) => void;
    toggleRowsSelected: (selected: boolean) => void;
}
export interface TableProps<DataType extends object = any> extends BaseComponent<'div', Partial<ReturnType<typeof useStyles>['classes']>> {
    /**
     * The variant for the table.
     * condensed - will attempt to use as little space as possible for each row
     * regular - will default render each row removing extra data as required (such as reducing multi line to single line)
     * expanded - will show all data
     */
    variant?: TableBodyProps<DataType>['variant'];
    /**
     * The columns definitions for each column
     */
    columns: Field[];
    /**
     * The data to display
     */
    data: DataType[];
    /**
     * Array to use for initial sorting
     */
    sortBy?: {
        id: keyof DataType;
        desc?: boolean;
    }[];
    /**
     * Icon to display when required for the items in the table
     */
    entityIcon?: string;
    /**
     * The name of the items each row is representing
     */
    entityName?: string;
    /**
     * If the table is currently undergoing an update or not
     */
    updating?: boolean;
    /**
     * If provided will filter the rows finding rows where any
     * cell contains the filter text
     */
    globalFilter?: string;
    /**
     * Sets if the rows can be selected
     */
    selectable?: boolean;
    /**
     * If the table is selectable determines if an individual row is also selectable
     * @param data the data in the row being selected
     * @returns true if selectable, false otherwise
     */
    canSelectRow?: TableCanSelectRow<DataType>;
    tableRef?: ForwardedRef<TableRef<DataType>>;
    totalCount?: number;
    index?: number;
    pageSize?: number;
    getRowID?: (data: DataType, relativeIndex: number, parent?: any) => string;
    onSelectionChange?: (data: DataType[]) => void;
    onRowClick?: TableBodyProps<DataType>['onRowClick'];
    onRefresh?: TableFooterProps['onRefreshClick'];
    onFirstPage?: TableFooterProps['onFirstPageClick'];
    onPreviousPage?: TableFooterProps['onPreviousPageClick'];
    onNextPage?: TableFooterProps['onNextPageClick'];
    onLastPage?: TableFooterProps['onLastPageClick'];
    onPageSizeChange?: TableFooterProps['onPageSizeChange'];
    EmptyTableComponent?: ReactComponent<EmptyTableViewProps>;
}
export declare function Table<DataType extends object = any>({ className, style, classes: classesProp, variant, columns, data, index, totalCount, pageSize, entityName, entityIcon, updating, sortBy, globalFilter, selectable, onRefresh, onFirstPage, onPreviousPage, onNextPage, onLastPage, getRowID, onRowClick, EmptyTableComponent, canSelectRow, onSelectionChange, onPageSizeChange, tableRef, }: TableProps<DataType>): import("@emotion/react/jsx-runtime").JSX.Element;
export default Table;

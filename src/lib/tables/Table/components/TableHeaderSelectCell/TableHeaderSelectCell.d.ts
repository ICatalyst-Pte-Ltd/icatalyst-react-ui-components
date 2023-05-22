import { HeaderProps } from 'react-table';
export interface TableHeaderSelectCellProps<DataType extends object> extends HeaderProps<DataType> {
    getToggleAllRowsSelectedProps?: (p?: any) => any;
    toggleRowSelected?: (rowPath: string, set?: boolean) => void;
}
export declare function TableHeaderSelectCell<DataType extends object>(props: TableHeaderSelectCellProps<DataType>): import("@emotion/react/jsx-runtime").JSX.Element;
export default TableHeaderSelectCell;

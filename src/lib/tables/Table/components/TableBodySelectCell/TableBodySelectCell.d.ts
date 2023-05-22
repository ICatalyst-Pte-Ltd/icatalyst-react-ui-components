import { CellProps } from 'react-table';
export interface TableBodySelectCellProps<DataType extends object> extends CellProps<DataType, boolean> {
}
export declare function TableBodySelectCell<DataType extends object>(props: TableBodySelectCellProps<DataType>): import("@emotion/react/jsx-runtime").JSX.Element;
export default TableBodySelectCell;

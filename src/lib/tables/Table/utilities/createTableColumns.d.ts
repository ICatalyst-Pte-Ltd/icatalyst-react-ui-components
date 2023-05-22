import { Column, TableInstance } from 'react-table';
import { Field } from '../../../utilities';
import { TableProps } from '../Table';
export type TableCanSelectRow<T extends object> = (data: T, relativeIndex: number, tableProps: TableInstance<T>) => boolean;
export declare function createReactTableColumns<T extends object>(fields: Field[] | undefined, tableVariant: TableProps['variant'], isSelectable?: TableCanSelectRow<T>): Column<T>[];

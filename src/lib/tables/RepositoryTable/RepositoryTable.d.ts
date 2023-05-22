import { DataRepository, DtoType } from '@icatalyst/js-core';
import { Model } from '../../utilities';
import { TableProps, TableRef } from '../Table';
export interface RepositoryTableProps<IDFieldName extends string = 'id', DataType extends DtoType<IDFieldName> = DtoType<IDFieldName>> extends Omit<TableProps, 'columns' | 'data'> {
    model: Model;
    repository: DataRepository<IDFieldName, DataType>;
}
export interface RepositoryTableRef<DataType> extends TableRef<DataType> {
}
export declare function RepositoryTable<IDFieldName extends string = 'id', DataType extends DtoType<IDFieldName> = DtoType<IDFieldName>>({ className, style, classes: classesProp, repository, model, onRowClick, onSelectionChange, tableRef, selectable, }: RepositoryTableProps<IDFieldName, DataType>): import("@emotion/react/jsx-runtime").JSX.Element;
export default RepositoryTable;

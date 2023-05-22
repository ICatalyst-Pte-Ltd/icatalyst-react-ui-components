import { DataRepository, DtoType } from '@icatalyst/js-core';
import { Model } from '../../utilities';
import { DataGridProps } from '../DataGrid';
export interface RepositoryGridProps<IDFieldName extends string = 'id', DataType extends DtoType<IDFieldName> = DtoType<IDFieldName>> extends Omit<DataGridProps<IDFieldName, DataType>, 'errors' | 'data' | 'loading'> {
    model: Model;
    repository: DataRepository<IDFieldName, DataType>;
}
export declare function RepositoryGrid<IDFieldName extends string = 'id', DataType extends DtoType<IDFieldName> = DtoType<IDFieldName>>({ className, style, classes: classesProp, repository, model, itemComponent, ...rest }: RepositoryGridProps<IDFieldName, DataType>): import("@emotion/react/jsx-runtime").JSX.Element;
export default RepositoryGrid;

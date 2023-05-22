import { ComponentType } from 'react';
import { EntityField } from '../../../../utilities';
import { TableCellComponentProps } from './table-cell-component.interface';
export type TableCellBuilder = {
    isCompatible: (fieldDefinition: EntityField) => boolean;
    getComponent: () => ComponentType<TableCellComponentProps<any>>;
};

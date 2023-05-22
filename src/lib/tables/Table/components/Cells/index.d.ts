/// <reference types="react" />
import { EntityField } from '../../../../utilities';
import { TableCellBuilder } from './table-cell-builder.type';
import { TextCell } from './TextCell';
export declare function getTableCellComponent(fieldDefinition: EntityField): typeof TextCell | import("react").ComponentType<import("./table-cell-component.interface").TableCellComponentProps<any>>;
export declare function registerTableCellBuilder(builder: TableCellBuilder): void;
export * from './table-cell-builder.type';
export * from './table-cell-component.interface';

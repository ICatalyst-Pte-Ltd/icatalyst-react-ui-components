import { CSSProperties } from 'react';
import { EntityField } from '../../../../utilities';
import { TableProps } from '../../Table';
export interface TableCellComponentProps<ValueType = string> {
    className?: string;
    style?: CSSProperties;
    /**
     * Overrides the classes defined in the component
     */
    classes?: any;
    field: EntityField;
    editorProps?: Record<string, any>;
    value: ValueType;
    tableVariant?: TableProps['variant'];
}

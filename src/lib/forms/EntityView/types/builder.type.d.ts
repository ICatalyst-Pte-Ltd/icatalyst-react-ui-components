import { ComponentType } from 'react';
import { EntityField } from '../../../utilities';
import { FieldComponentProps } from './field-component.interface';
export type Builder = {
    isCompatible: (fieldDefinition: EntityField) => boolean;
    getComponent: () => ComponentType<FieldComponentProps<any>>;
};

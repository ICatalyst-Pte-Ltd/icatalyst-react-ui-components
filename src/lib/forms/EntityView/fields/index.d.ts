/// <reference types="react" />
import { EntityField } from '../../../utilities';
import { Builder } from '../types/builder.type';
import { TextField } from './TextField';
export declare function getComponent(fieldDefinition: EntityField): typeof TextField | import("react").ComponentType<import("../types/field-component.interface").FieldComponentProps<any, any>>;
export declare function registerFieldBuilder(builder: Builder): void;

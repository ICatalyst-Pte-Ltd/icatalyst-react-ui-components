import { I18NArguments, Primitive } from '@icatalyst/js-core';
import { ReactElement } from 'react';
export declare enum ModelPermission {
    None = 0,
    Read = 1,
    Create = 2,
    Update = 4,
    Delete = 8,
    All = 15
}
type DynamicFieldDefinition = {
    /**
     * The default value when generating a new model
     */
    default?: null | Primitive | ((overrides: any) => Primitive) | null;
    /**
     * The description of this field
     */
    description?: string;
    /**
     * if this field should be included when generating a new model
     */
    excludeFromModel?: boolean;
    /**
     * Converts the field to a string value
     */
    format?: <T>(value: T) => any;
    /**
     * Helper to extract a value for this field,
     * useful for complex data.
     */
    getValue?: (data: any) => any;
    /**
     * The content to display in the label for this field
     */
    label?: string;
    /**
     * The min length of the value allowed in this field
     */
    minLength?: number;
    /**
     * The max length of the value allowed in this field
     */
    maxLength?: number;
    /**
     * If this field is required or not
     */
    required?: boolean;
    /**
     * If this field is readonly or editable
     */
    readonly?: boolean;
    /**
     * The placeholder to display when displaying an editor for this field
     */
    placeholder?: string;
    /**
     * The type of this field.  Helps the framework determine
     * which editor to display when editing the field
     */
    type: string;
    /**
     * This list of validations to apply to this field
     */
    validations?: ((data: any, field: EntityField, value: any, model: Model<any>) => I18NArguments | null)[];
    /**
     * Properties to pass when creating an editor for this
     * field
     */
    componentProps?: any;
    /**
     * The permissions that are applied to the entire model
     */
    permissions?: ModelPermission;
    /**
     * Retrieve permissions for an individual record, if not defined the modelPermissions will be used
     */
    getPermissions?: (data: unknown) => ModelPermission;
};
type ComponentFieldDefinition = {
    render: (props: any) => ReactElement;
    getValue: DynamicFieldDefinition['getValue'];
    label?: string;
    id: string;
};
export type FieldDefinition = DynamicFieldDefinition | ComponentFieldDefinition;
export type EntityField = DynamicFieldDefinition & {
    id: string;
};
type ComponentField = {
    render: (props: any) => ReactElement;
    id: string;
    label: string;
    getValue?: EntityField['getValue'];
};
export type Field = EntityField | ComponentField;
export type ModelDefinition<Fields = Record<string, FieldDefinition>> = {
    /**
     * The name of this model
     */
    name: string;
    /**
     * The field to use for the identity of this model, defaults to 'id' if not provided
     */
    identityField?: string;
    /**
     * The field to use when displaying a title for the record.
     * If not provided this will default to the first field with 'string' type
     */
    primaryTextField?: string;
    /**
     * Helper to retrieve the identity of the record
     * @param data the record to extract the data from
     * @returns the identity
     */
    getIdentity?: (data: Record<keyof Fields, any>) => string;
    /**
     * Helper to retrieve formatted text as the primary text for the record
     * @param data the record to extract the data from
     * @returns the primary text
     */
    getPrimaryText?: (data: Record<keyof Fields, any>) => string;
    /**
     * Helper to retrieve formatted text as the secondary text for the record
     * @param data the record to extract the data from
     * @returns the secondary text
     */
    getSecondaryText?: (data: Record<keyof Fields, any>) => string;
    /**
     * The field to use when displaying a description for the record
     */
    secondaryTextField?: string;
    /**
     * The field to use when displaying a feature image for the record
     */
    featureImageField?: string;
    /**
     * The title of the entity, will default to the name field if not provided
     */
    title?: string;
    /**
     * The singular representation of this model, will be derived from the 'title' field
     * if not provided
     */
    singularTitle?: string;
    /**
     * The plural representation of this model, will be derived from the 'title' field
     * if not provided
     */
    pluralTitle?: string;
    /**
     * The icon to display when representing this model
     */
    icon?: string;
    /**
     * The list of field definitions in order preference
     */
    fields: Fields;
    /**
     * Orders and customises the display of fields.  If not defined will
     * display all fields in 'fields' in the order they are found
     */
    layout?: (keyof Fields)[][];
    /**
     * Used to layout the model when being displayed in a list or grid
     * alongside other similar models
     */
    listLayout?: (keyof Fields)[];
    /**
     * Validation function to use when validating the full data object, if not
     * defined will assume that the data is valid if all field validators are valid.
     *
     * If this is defined it will replace any field level validation
     */
    validate?: (data: Record<keyof Fields, any>, field: keyof Fields | (keyof Fields)[], errors: {
        [k in keyof Fields]?: I18NArguments[];
    }) => {
        [k in keyof Fields]?: I18NArguments[];
    };
    /**
     * The list of child entities in a parent/child relationship
     */
    children?: ModelDefinition<any>[];
    /**
     * A helper function to generate a new data structure for this model
     */
    generateModel?: (overrides?: Partial<Record<keyof Fields, any>>) => Partial<Record<keyof Fields, any>>;
    /**
     * The component to display when listing items of this model type
     * @param props
     * @returns
     */
    component?: (props: any) => ReactElement;
    /**
     * The component to display when displaying individual items of this model type
     * @param props
     * @returns
     */
    detailComponent?: (props: any) => ReactElement;
    /**
     * The permissions that are applied to the entire model
     */
    permissions?: ModelPermission;
    /**
     * Retrieve permissions for an individual record, if not defined the modelPermissions will be used
     */
    getPermissions?: (data: unknown) => ModelPermission;
    /**
     * Determines if the user can navigate from the parent to the detail record
     */
    canNavigateToDetails?: boolean;
    /**
     * Determines if the user is able to select fields in the table
     */
    canSelect?: boolean;
    transformToDto?: (data?: Record<keyof Fields, any>) => any;
    transformFromDto?: (data: any) => Record<keyof Fields, any>;
};
export type Model<DataType = Record<string, any>, Fields = Record<keyof DataType, Field>> = {
    name: string;
    identityField: string;
    primaryTextField: string;
    secondaryTextField?: string;
    getIdentity?: (data: Record<keyof Fields, any>) => string;
    getPrimaryText?: (data: Record<keyof Fields, any>) => string;
    getSecondaryText?: (data: Record<keyof Fields, any>) => string;
    featureImageField?: string;
    title: string;
    singularTitle?: string;
    pluralTitle?: string;
    icon?: string;
    fields: Fields;
    layout: (keyof Fields | Field)[][];
    listLayout: (keyof Fields | Field)[];
    component?: (props: any) => ReactElement;
    detailComponent?: (props: any) => ReactElement;
    transformToDto?: (data?: DataType) => any;
    transformFromDto?: (data: any) => DataType;
    generateModel: (overrides?: Partial<Record<keyof Fields, any>>) => Partial<Record<keyof Fields, any>>;
    validate: (data: Partial<Record<keyof Fields, any>>, field?: keyof Fields | (keyof Fields)[], errors?: {
        [k in keyof Fields]?: I18NArguments[];
    }) => {
        [k in keyof Fields]?: I18NArguments[];
    };
    permissions: ModelPermission;
    getPermissions: (data: DataType) => ModelPermission;
    hasPermission: (permission: ModelPermission, entity?: DataType) => boolean;
    canNavigateToDetails: boolean;
    canSelect: boolean;
};
export declare function isComponentFieldDefinition(field: FieldDefinition): field is ComponentFieldDefinition;
export declare function isComponentField(field: Field): field is ComponentField;
declare function createModel<T extends Record<string, FieldDefinition> = Record<string, FieldDefinition>>(modelDefinition: ModelDefinition<T>): Model<Record<keyof T, Field>>;
export default createModel;

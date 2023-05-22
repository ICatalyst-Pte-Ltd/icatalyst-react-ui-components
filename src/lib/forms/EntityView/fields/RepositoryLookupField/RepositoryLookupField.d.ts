import { FieldComponentProps } from '../../types/field-component.interface';
import { SyntheticEvent } from 'react';
import { RepositoryLookupInputFieldProps as EditorProps } from '../../../../inputs';
import { Builder } from '../../types/builder.type';
export interface RepositoryLookupFieldProps extends Omit<FieldComponentProps<string>, 'onChange'> {
    editorProps?: EditorProps;
    onChange: (event: SyntheticEvent | null, newValue: string | null) => void;
}
export declare function RepositoryLookupField({ className, style, classes: classesProp, field, editorProps, dense, variant, autoFocus, errors, value, label, onChange, readonly, fullWidth, }: RepositoryLookupFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare const repositoryLookupFieldBuilder: Builder;
export default repositoryLookupFieldBuilder;

import { FormEvent } from 'react';
import { BaseComponent } from '../../types';
import { Model } from '../../utilities';
import { FieldComponentProps } from './types/field-component.interface';
export type EntityViewRef<T = any> = {
    getEntityView: () => {
        modified: boolean;
        validate: Model['validate'] | undefined;
        isValid: (fields?: string | string[]) => boolean;
        handleSubmit: (event: FormEvent, data: T, callback?: (err?: unknown) => void) => void;
        resetForm: () => void;
        getPrimaryText: () => string | null;
        getSecondaryText: () => string | null;
        getFeatureImage: () => string | null;
        getID: () => string | null;
        setForm: (data: T) => void;
    };
};
type StyleProps = {
    dense: boolean;
    gridTemplateAreas: string;
};
declare const useStyles: (params: StyleProps, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "componentFieldWrapper", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface EntityViewProps<T = any> extends Omit<BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>>, 'onChange'> {
    value?: T;
    initialValue?: T;
    model: Model;
    readonly?: boolean;
    dense?: boolean;
    variant?: FieldComponentProps['variant'];
    onChange?: (value: Partial<T>) => void;
}
export declare const EntityView: import("react").ForwardRefExoticComponent<EntityViewProps<Record<string, any>> & import("react").RefAttributes<EntityViewRef<any>>>;
export default EntityView;

import { I18NArguments } from '@icatalyst/js-core';
import { FormEvent, ReactNode } from 'react';
import { BaseComponent, ComponentAlignmentHorizontal } from '../../types';
import { EntityViewProps } from '../EntityView/EntityView';
type StyleProps = {
    alignTitle: ComponentAlignmentHorizontal;
};
declare const useStyles: (params: StyleProps, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "header" | "form" | "actions" | "actions_flex" | "actions_fullwidth" | "form_dense" | "entityView" | "entityView_shrink" | "title" | "spacer" | "spacer_dense" | "actionWrapper" | "footer" | "error" | "flexHelper" | "flexHelper_scroll" | "gridHelper" | "gridHelper_shrink", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface EntityViewFormProps<EntityType = any> extends Omit<BaseComponent<'div', Partial<ReturnType<typeof useStyles>['classes']>>, 'onSubmit'> {
    model: EntityViewProps['model'];
    onSubmit: (event: FormEvent<Element>, callback?: (err?: unknown) => void, data?: EntityType) => void;
    onCancel?: () => void;
    variant?: 'filled' | 'outlined' | 'standard';
    dense?: boolean;
    title?: string;
    header?: ReactNode;
    footer?: ReactNode;
    submit?: string | ReactNode;
    cancel?: string | ReactNode;
    alignTitle?: ComponentAlignmentHorizontal;
    errors?: I18NArguments[] | null;
    onChange?: (data: unknown) => void;
    value?: EntityType;
    initialValue?: EntityType;
    processing?: boolean;
    readonly?: boolean;
    actionVariant?: 'flex' | 'fullwidth';
    entityViewShrink?: boolean;
}
export declare function EntityViewForm({ className, style, classes: classesProp, onSubmit, model, variant, dense, title, header, footer, submit, cancel, alignTitle, errors, onChange, value, initialValue, processing, readonly, actionVariant, onCancel, entityViewShrink, }: EntityViewFormProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default EntityViewForm;

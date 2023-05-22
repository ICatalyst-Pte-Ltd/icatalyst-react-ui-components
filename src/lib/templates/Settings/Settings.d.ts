import { I18NArguments } from '@icatalyst/js-core';
import { FormEvent } from 'react';
import { BaseComponent } from '../../types';
import { Field } from '../../utilities';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "content" | "navigation" | "searchField" | "header" | "headerIcon" | "navigationList" | "categoryContent" | "entityForm", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export type SettingCategory = {
    name: string;
    icon?: string;
    label?: string;
    description?: string;
    fields: Field[];
};
export interface SettingsProps extends Omit<BaseComponent<'div', Partial<ReturnType<typeof useStyles>['classes']>>, 'onSubmit'> {
    categories: SettingCategory[];
    readonly?: boolean;
    processing?: boolean;
    onSubmit: (event: FormEvent, data: any, callback?: (err?: I18NArguments[]) => void) => void;
    value?: any;
}
export declare function Settings({ className, style, classes: classesProp, categories, readonly, processing, onSubmit, value, }: SettingsProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Settings;

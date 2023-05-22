import { DtoType } from '@icatalyst/js-core';
import { ReactNode } from 'react';
import { BaseComponent } from '../../types';
type StyleProps = {
    columns: number;
    gap: number;
};
declare const useStyles: (params: StyleProps, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "errorWrapper" | "divSpacer" | "gridWrapper", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface DataGridProps<IDFieldName extends string = 'id', DataType extends DtoType<IDFieldName> = DtoType<IDFieldName>> extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    errors?: {
        message: string;
    }[];
    data: DataType[];
    columns?: number;
    itemComponent: (data: DataType) => ReactNode;
    loading?: boolean;
    gap?: number;
    entityName?: string;
    entityIcon?: string;
}
export declare function DataGrid<IDFieldName extends string = 'id', DataType extends DtoType<IDFieldName> = DtoType<IDFieldName>>({ className, style, classes: classesProp, errors, data, columns, gap, itemComponent, loading, entityName, entityIcon, }: DataGridProps<IDFieldName, DataType>): import("@emotion/react/jsx-runtime").JSX.Element;
export default DataGrid;

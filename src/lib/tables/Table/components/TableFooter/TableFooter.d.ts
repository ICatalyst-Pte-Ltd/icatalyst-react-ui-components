import { BaseComponent } from '../../../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "separator" | "pageSizeSelector", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export type PageSize = {
    value: number;
    title: string;
};
export interface TableFooterProps extends BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>> {
    pageCount: number;
    totalCount: number;
    index: number;
    pageSize: number;
    entityName: string;
    onRefreshClick: () => void;
    onFirstPageClick: () => void;
    onNextPageClick: () => void;
    onPreviousPageClick: () => void;
    onLastPageClick: () => void;
    onPageSizeChange: (value: PageSize | null) => void;
}
export declare function TableFooter({ className, style, classes: classesProp, pageCount, totalCount, index, pageSize, entityName, onRefreshClick, onFirstPageClick, onPreviousPageClick, onNextPageClick, onLastPageClick, onPageSizeChange, }: TableFooterProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default TableFooter;

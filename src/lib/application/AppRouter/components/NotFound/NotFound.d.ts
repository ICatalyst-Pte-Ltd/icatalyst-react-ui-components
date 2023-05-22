import { ReactNode } from 'react';
import { BaseComponent } from '../../../../types';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "content" | "title" | "icon" | "excerpt", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface NotFoundProps extends BaseComponent<'div', Partial<ReturnType<typeof useStyles>['classes']>> {
    /**
     * The icon to display
     */
    icon?: string;
    /**
     * The title to display
     */
    title?: string;
    /**
     * The excerpt to display
     */
    excerpt?: ReactNode;
    /**
     * The content to display
     */
    content?: ReactNode;
}
export declare function NotFound({ className, style, classes: classesProp, icon, title, excerpt, content, }: NotFoundProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default NotFound;

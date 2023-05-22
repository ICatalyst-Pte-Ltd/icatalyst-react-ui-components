/// <reference types="react" />
import { CardHeaderProps as MuiCardHeaderProps } from '@mui/material';
import { ActionsProps } from '../../buttons';
import { BaseComponent } from '../../types';
import { Theme } from '@mui/material';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "titleWrapper" | "emphasisText", string>;
    theme: Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface CardHeaderProps extends Omit<BaseComponent<'div', Partial<ReturnType<typeof useStyles>['classes']>>, 'title'> {
    title: string | React.ReactNode;
    subtitle?: MuiCardHeaderProps['subheader'];
    emphasisText?: string;
    thumbnailImage?: string;
    actions?: ActionsProps['actions'];
}
export declare function CardHeader({ className, style, classes: classesProp, title, subtitle, emphasisText, thumbnailImage, actions, }: CardHeaderProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default CardHeader;

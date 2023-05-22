import { CardProps as MuiCardProps } from '@mui/material';
import { ActionsProps } from '../../buttons';
import { BaseComponent } from '../../types';
import { CardHeaderProps } from '../CardHeader';
declare const useStyles: (params: void, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "contentWrapper" | "cardContent" | "description" | "cardActions" | "actionWrapper" | "actions" | "primaryActions" | "secondaryActions", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface CardProps extends Omit<BaseComponent<'span', Partial<ReturnType<typeof useStyles>['classes']>>, 'onClick' | 'title'> {
    raised?: boolean;
    square?: boolean;
    elevation?: number;
    thumbnailImage?: CardHeaderProps['thumbnailImage'];
    headerActions?: CardHeaderProps['actions'];
    title: CardHeaderProps['title'];
    subtitle?: CardHeaderProps['subtitle'];
    emphasisText?: CardHeaderProps['emphasisText'];
    primaryActions?: ActionsProps['actions'];
    secondaryActions?: ActionsProps['actions'];
    showTitle?: boolean;
    onClick?: MuiCardProps['onClick'];
}
export declare function Card({ className, style, classes: classesProp, square, elevation, title, subtitle, emphasisText, thumbnailImage, headerActions, primaryActions, secondaryActions, showTitle, children, onClick, }: CardProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Card;

import { ComponentAlignmentHorizontal, ComponentAlignmentVertical, ImageFit } from '../../types';
import { RefObject } from 'react';
import { PaperProps } from '@mui/material';
type StyleProps = {
    verticalAlign: ComponentAlignmentVertical;
    horizontalAlign: ComponentAlignmentHorizontal;
    imageSrc?: string;
    imageFit?: ImageFit;
    imagePosition?: ComponentAlignmentVertical;
    imageAlpha: number;
    backgroundColor?: string | null;
    square?: boolean;
};
declare const useStyles: (params: StyleProps, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "containerImageFn" | "contentAlignFn", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface ContainerProps extends Omit<PaperProps<'div', Partial<ReturnType<typeof useStyles>['classes']>>, 'onChange' | 'component'> {
    verticalAlign?: ComponentAlignmentVertical;
    horizontalAlign?: ComponentAlignmentHorizontal;
    /**
     * Sets the background color and text updates to reflect most readable
     */
    backgroundColor?: string;
    imageSrc?: string;
    imagePosition?: ComponentAlignmentVertical;
    imageFit?: ImageFit;
    imageAlpha?: number;
    ref?: RefObject<ContainerRef>;
    elevation?: number;
    variant?: 'elevation' | 'outlined';
    square?: boolean;
}
export interface ContainerRef extends HTMLDivElement {
    backgroundColor: string | null;
}
export declare const Container: import("react").ForwardRefExoticComponent<Omit<ContainerProps, "ref"> & import("react").RefAttributes<ContainerRef>>;
export default Container;

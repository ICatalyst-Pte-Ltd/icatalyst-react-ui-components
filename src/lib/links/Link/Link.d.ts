import { LinkProps as MuiLinkProps } from '@mui/material';
import { ComponentColor } from '../../types';
type StyleProps = {
    color: ComponentColor;
};
declare const useStyles: (params: StyleProps, styleOverrides?: {
    props: {
        classes?: Record<string, string> | undefined;
    } & Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "icon", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react/types").Css;
    cx: import("tss-react/types").Cx;
};
export interface LinkProps extends Omit<MuiLinkProps, 'color' | 'border' | 'borderTop' | 'borderRight' | 'borderBottom' | 'borderLeft' | 'borderRadius' | 'borderColor' | 'display' | 'displayPrint' | 'overflow' | 'textOverflow' | 'visibility' | 'whiteSpace' | 'flexBasis' | 'flexDirection' | 'flexWrap' | 'justifyContent' | 'alignItems' | 'alignContent' | 'order' | 'flex' | 'flexGrow' | 'flexShrink' | 'alignSelf' | 'justifyItems' | 'justifySelf' | 'gap' | 'columnGap' | 'rowGap' | 'gridColumn' | 'gridRow' | 'gridAutoFlow' | 'gridAutoColumns' | 'gridAutoRows' | 'gridTemplateColumns' | 'gridTemplateRows' | 'gridTemplateAreas' | 'gridArea' | 'bgcolor' | 'zIndex' | 'position' | 'top' | 'right' | 'bottom' | 'left' | 'boxShadow' | 'width' | 'height' | 'maxWidth' | 'maxHeight' | 'minWidth' | 'minHeight' | 'boxSizing' | 'm' | 'mt' | 'mr' | 'mb' | 'mx' | 'my' | 'ml' | 'p' | 'pt' | 'pr' | 'pb' | 'px' | 'py' | 'pl' | 'margin' | 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft' | 'marginX' | 'marginY' | 'padding' | 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'paddingLeft' | 'paddingX' | 'paddingY' | 'letterSpacing' | 'lineHeight' | 'textAlign' | 'textTransform' | 'typography' | 'fontFamily' | 'fontSize' | 'fontStyle' | 'fontWeight' | 'align' | 'paragraph'> {
    /**
     * The icon to display; set to undefined or null to hide the icon
     */
    icon?: string | 'none';
    /**
     * Classes overrides
     */
    classes?: Partial<ReturnType<typeof useStyles>['classes']>;
    /**
     * The color of the content
     */
    color?: ComponentColor;
}
export declare function Link({ className, style, classes: classesProp, target, children, icon, underline, color, ...rest }: LinkProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default Link;

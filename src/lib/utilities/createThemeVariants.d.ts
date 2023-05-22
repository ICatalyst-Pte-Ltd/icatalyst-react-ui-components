import { ColorPalette, ThemeDeclaration } from '@icatalyst/js-core';
import { ThemeOptions } from '@mui/material/styles';
export declare function createThemeVariants(theme: ThemeDeclaration, overrides?: Partial<ThemeOptions>): {
    [x: string]: import("@mui/material/styles").Theme;
};
/**
 * THEME DEFAULTS
 */
export declare const defaultThemeOptions: Partial<ThemeOptions>;
export declare const requiredThemeOptions: Partial<ThemeOptions>;
export declare function extendThemeWithMixins(palette: ColorPalette): {
    border: (width?: number) => {
        borderWidth: number;
        borderStyle: string;
        borderColor: any;
    };
    borderLeft: (width?: number) => {
        borderLeftWidth: number;
        borderStyle: string;
        borderColor: any;
    };
    borderRight: (width?: number) => {
        borderRightWidth: number;
        borderStyle: string;
        borderColor: any;
    };
    borderTop: (width?: number) => {
        borderTopWidth: number;
        borderStyle: string;
        borderColor: any;
    };
    borderBottom: (width?: number) => {
        borderBottomWidth: number;
        borderStyle: string;
        borderColor: any;
    };
};

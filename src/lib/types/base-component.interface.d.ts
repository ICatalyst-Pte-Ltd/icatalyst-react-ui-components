import { SxProps, Theme } from '@mui/material';
import React, { CSSProperties, ElementType } from 'react';
export interface BaseComponent<T extends ElementType, StyleType> extends Omit<React.HTMLAttributes<T>, 'onChange'> {
    className?: string;
    style?: CSSProperties;
    sx?: SxProps<Theme>;
    /**
     * called when the value is changed through user interaction on the interactive control
     */
    onChange?: (e: React.ChangeEvent<HTMLElement> | React.MouseEvent<HTMLButtonElement> | null, value: any) => void;
    /**
     * Overrides the classes defined in the component
     */
    classes?: StyleType;
}

import { ElementType, ReactNode } from 'react';
import { BaseComponent } from './base-component.interface';
export interface ContainerComponent<T extends ElementType, StyleType> extends BaseComponent<T, StyleType> {
    children?: ReactNode | ReactNode[];
}

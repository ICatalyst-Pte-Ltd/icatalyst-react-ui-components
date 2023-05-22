import { BaseComponent, RouteDefinition } from '../../types';
export interface NavbarProps<StylesProps> extends BaseComponent<'div', StylesProps> {
    routes: RouteDefinition[];
    orientation?: 'horizontal' | 'vertical';
    itemVariant?: 'rounded' | 'square';
    showLabel?: boolean;
    showIconButton?: boolean;
    activeEmbelish?: boolean;
    maxDepth?: number;
}

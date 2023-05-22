import { BaseComponent, RouteDefinition } from '../../../../types';
export interface NavItemProps extends BaseComponent<'span', Partial<ReturnType<never>['classes']>> {
    variant?: 'rounded' | 'square';
    depth?: number;
    route: RouteDefinition;
    showLabel?: boolean;
    showIconButton?: boolean;
    activeEmbelish?: boolean;
    maxDepth?: number;
    orientation: 'horizontal' | 'vertical';
}

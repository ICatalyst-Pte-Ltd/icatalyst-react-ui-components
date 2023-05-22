import { ComponentType } from 'react';
import { RouteObject } from 'react-router-dom';
export type IndexRouteDefinition<T = any> = BaseRouteDefinition<T> & {
    index: true;
    /**
     * The component to display for this route
     */
    component: ComponentType<T>;
    path?: null;
};
export type ComponentRouteDefinition<T> = BaseRouteDefinition<T> & {
    index?: false;
    component?: ComponentType<T> | null;
    /**
     * Properties for the component being displayed
     */
    componentProps?: T;
};
export type RouteDefinition<T = any> = IndexRouteDefinition<T> | ComponentRouteDefinition<T>;
export type BaseRouteDefinition<ComponentProps = Record<string, any>> = Omit<RouteObject, 'children' | 'element'> & {
    /**
     * The title to display for this path if required
     */
    title: string;
    /**
     * The icon to display for this route if it is visually
     * navigated to
     */
    icon?: string;
    /**
     * Should this path show in the navigation section
     */
    navigation?: boolean;
    /**
     * The path for this route
     */
    path?: string;
    absolutePath?: string;
    /**
     * The component to display for this route
     */
    component?: ComponentType<ComponentProps>;
    /**
     * Properties for the component being displayed
     */
    componentProps?: ComponentProps;
    /**
     * The child routes for this route
     */
    routes?: RouteDefinition[];
    /**
     * The list of roles that are allowed to navigate to this route
     */
    auth?: string[];
    /**
     * Declares this route as an index route
     */
    index?: boolean;
    /**
     * Only matches if the case matches in the url
     */
    caseSensitive?: boolean;
};

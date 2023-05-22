import { ComponentType } from 'react';
export interface AppRouterProps<ComponentProps extends Record<string, any> = Record<string, any>> {
    /**
     * The content to display if no route is selected
     */
    DefaultComponent?: ComponentType<ComponentProps>;
    /**
     * The properties to set on the default component
     */
    defaultComponentProps?: ComponentProps;
    /**
     * Set to true to display debug information on the routes
     */
    debug?: boolean;
}
export declare function AppRouter<ComponentProps extends Record<string, any> = Record<string, any>>({ DefaultComponent, defaultComponentProps, debug, }: AppRouterProps<ComponentProps>): import("@emotion/react/jsx-runtime").JSX.Element;
export default AppRouter;

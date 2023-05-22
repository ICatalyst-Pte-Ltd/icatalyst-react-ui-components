import { ModuleBase } from '@icatalyst/js-core';
import { ComponentType, JSXElementConstructor } from 'react';
import { IApplicationRepositories } from '../../repositories';
import { LayoutDefinition, RouteDefinition } from '../../types';
import { ApplicationConfig } from '../../utilities';
import { LayoutContainerProps } from './layout-container.props';
export declare function isModuleConfig(module: ModuleConfig | ModuleConfigFunction): module is ModuleConfig;
export declare function isModuleConfigFunction(module: ModuleConfig | ModuleConfigFunction): module is ModuleConfigFunction;
export type ResolvedModule<A = any, B extends LayoutContainerProps<LayoutDefinition<string>, any> = any> = ModuleConfig<A, B> & {
    fullPath: string;
};
export declare function findModule(moduleName: string, modules?: ReactModuleConfig[]): ResolvedModule | null;
export type ReactModuleConfig<ComponentProps = Record<string, any>, LayoutComponentProps extends LayoutContainerProps = LayoutContainerProps, LayoutComponent extends JSXElementConstructor<LayoutComponentProps> = JSXElementConstructor<LayoutComponentProps>> = ModuleConfig<ComponentProps, LayoutComponentProps, LayoutComponent> | ModuleConfigFunction<ComponentProps, LayoutComponentProps, LayoutComponent>;
export type ModuleConfigFunction<ComponentProps = Record<string, any>, LayoutComponentProps extends LayoutContainerProps = LayoutContainerProps, LayoutComponent extends JSXElementConstructor<LayoutComponentProps> = JSXElementConstructor<LayoutComponentProps>> = (repositories: IApplicationRepositories, config?: {
    application?: ApplicationConfig;
    custom?: any;
}) => ModuleConfig<ComponentProps, LayoutComponentProps, LayoutComponent>;
export type ModuleConfig<ComponentProps = Record<string, any>, LayoutComponentProps extends LayoutContainerProps = LayoutContainerProps, LayoutComponent extends JSXElementConstructor<LayoutComponentProps> = JSXElementConstructor<LayoutComponentProps>> = ModuleBase & {
    /**
     * The root path this module introduces.
     * If this path exists then any routes configured will have
     * this path prepended.
     *
     * For example if the path is 'admin', then any modules
     * in the submodules will have paths that look like :
     * /admin/module1
     * /admin/module2
     */
    path?: string;
    /**
     * Icon to display for this module if it is visually displayed
     */
    icon?: string;
    /**
     * Does this module participate in visual navigation.
     * Meaning will this module be added to the navigation bar
     */
    navigation?: boolean;
    /**
     * The component to display when this module is activated
     */
    component?: ComponentType<ComponentProps>;
    /**
     * Properties to set on the component when it is rendered
     */
    componentProps?: ComponentProps;
    /**
     * The submodules configured for this module
     */
    modules?: ReactModuleConfig<any, any, any>[];
    /**
     * The name of the role the user should be in before this
     * module can be activated.  The user
     * can be a member of ANY of the roles provided
     */
    auth?: string[];
    /**
     * Flags if this module is enabled or disabled
     */
    enabled: boolean;
    /**
     * The routes that this module enables
     */
    routes?: RouteDefinition[];
    /**
     * The layout to use for all components under
     * this module.  If not provided used the app
     * layout
     */
    layout?: LayoutComponent;
    /**
     * Properties to include when the layout
     * is rendered
     */
    layoutComponentProps?: LayoutComponentProps;
    /**
     * If this is true and there is a layout then a layout
     * will be added to the route hierarchy.
     * If this is false and there is a layout, then a new hierarchy
     * is created
     */
    isChildLayout?: boolean;
};

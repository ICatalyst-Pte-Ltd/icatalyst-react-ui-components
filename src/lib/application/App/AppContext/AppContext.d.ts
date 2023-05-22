import { ThemeDeclaration } from '@icatalyst/js-core';
import { Theme as MuiTheme } from '@mui/material';
import React, { ReactNode } from 'react';
import { ReactModuleConfig } from '../../../modules';
import { IApplicationRepositories } from '../../../repositories';
import { AuthContextProps, LayoutDefinition, RouteDefinition } from '../../../types';
import { ApplicationConfig } from '../../../utilities';
export type AppContextProps<CustomProps = any> = {
    children: ReactNode;
    /**
     * The configuration for the application
     */
    config: ApplicationConfig;
    /**
     * The full list of modules that are available to the application
     */
    modules?: ReactModuleConfig<any, any>[];
    /**
     * All available themes for this application
     */
    themes: ThemeDeclaration[];
    /**
     * Custom application configuration properties
     */
    custom?: CustomProps;
    /**
     * The full list of routes that is available to the application
     */
    routes?: RouteDefinition[];
    /**
     * Hook that retrieves the auth context from
     * the context provider
     */
    getAuthContext: () => AuthContextProps;
    /**
     * The application repositories to communicate with the API
     */
    repositories?: IApplicationRepositories;
};
type AppContextStoreProps<CustomProps = any> = {
    /**
     * The full list of modules that are available to the application
     */
    modules?: ReactModuleConfig<any, any>[];
    /**
     * The full list of routes that is available to the application
     */
    routes?: RouteDefinition[];
    layouts?: LayoutDefinition[];
    themes?: Record<string, MuiTheme>;
    config?: ApplicationConfig;
    custom: CustomProps;
    getAuthContext: () => AuthContextProps;
    repositories?: IApplicationRepositories;
    isChildApp: boolean;
};
export declare const AppContext: React.Context<AppContextStoreProps<any>>;
export declare function AppContextComponent({ children, modules, themes, config, custom, getAuthContext, repositories, }: AppContextProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default AppContext;

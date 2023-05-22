import { ComponentType } from 'react';
import { BrowserRouter, HashRouter, MemoryRouter } from 'react-router-dom';
import { CreateStoreProps } from '../../store/createStore';
import { AuthContextProps, AuthProviderProps, ContainerComponent } from '../../types';
import { AppContextProps } from './AppContext';
export interface AppProps<ComponentProps extends Record<string, any> = Record<string, any>, CustomProps extends Record<string, any> = Record<string, any>> extends Omit<ContainerComponent<'div', never>, 'children'>, Omit<AppContextProps<CustomProps>, 'getAuthContext' | 'children'> {
    /**
     * Reducers for the store when it is created
     */
    store: CreateStoreProps;
    /**
     * The content to display if no route is selected
     */
    DefaultComponent?: ComponentType<ComponentProps>;
    /**
     * The properties to pass to the default component
     * when rendering
     */
    defaultComponentProps?: ComponentProps;
    /**
     * The authorisation provider to use to understand
     * who the user is
     */
    AuthProvider?: ComponentType<AuthProviderProps>;
    /**
     * Properties passed to the auth provider when
     * rendered
     */
    authProviderProps?: Partial<AuthProviderProps>;
    /**
     * Defaults to BrowserRouter if not set.
     * If set to null then no app routers will be used
     * and the default content will be displayed
     */
    Router?: typeof HashRouter | typeof BrowserRouter | typeof MemoryRouter | null;
    /**
     * Hook that retrieves the auth context from
     * the context provider
     */
    getAuthContext?: () => AuthContextProps;
    /**
     * Set to true to help to debug the App Router
     */
    debugRouter?: boolean;
}
export declare function App<ComponentProps extends Record<string, any> = Record<string, any>, CustomProps extends Record<string, any> = Record<string, any>>({ store, config, themes, modules, custom, DefaultComponent, defaultComponentProps, AuthProvider, authProviderProps, getAuthContext, repositories, Router, debugRouter, }: AppProps<ComponentProps, CustomProps>): import("@emotion/react/jsx-runtime").JSX.Element;
export default App;

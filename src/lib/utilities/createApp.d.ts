import { AppProps } from '../application';
import { IApplicationRepositories } from '../repositories';
import { AxiosInstance } from '../services/axiosService';
export interface ApplicationConfig {
    name: string;
    logo: string;
    description?: string;
    featureImage?: string;
    environment?: string;
    author: {
        name: string;
        logo: string;
        url: string;
    };
}
export interface CreateAppProps<ComponentProps extends Record<string, any> = Record<string, any>, CustomProps extends Record<string, any> = Record<string, any>> extends AppProps<ComponentProps, CustomProps> {
    configureAxios?: (axios: AxiosInstance, config: ApplicationConfig, custom: CustomProps) => () => void;
    createRepositories?: (config: ApplicationConfig, custom: CustomProps, axios: AxiosInstance) => IApplicationRepositories;
}
export type AppContainerProps = Omit<AppProps, 'store' | 'modules' | 'themes' | 'routes' | 'config'>;
export declare function createApp<CustomProps extends Record<string, any> = Record<string, any>>(props: CreateAppProps<Record<string, any>, CustomProps>): ({ DefaultComponent, defaultComponentProps, ...rest }: AppContainerProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default createApp;

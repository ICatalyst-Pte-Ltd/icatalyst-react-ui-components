/// <reference types="react" />
declare function useApplication(): {
    modules?: import("../..").ReactModuleConfig<any, any, import("react").JSXElementConstructor<any>>[] | undefined;
    routes?: import("../..").RouteDefinition<any>[] | undefined;
    layouts?: import("../..").LayoutDefinition<string>[] | undefined;
    themes?: Record<string, import("@mui/material").Theme> | undefined;
    config?: import("../..").ApplicationConfig | undefined;
    custom: any;
    getAuthContext: () => import("../..").AuthContextProps;
    repositories?: import("../..").IApplicationRepositories | undefined;
    isChildApp: boolean;
};
export default useApplication;

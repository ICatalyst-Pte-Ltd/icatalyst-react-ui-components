import { RouteDefinition } from '../../types';
declare function useContextRoutes<RouteType extends RouteDefinition>(routes: RouteType[], contextDepth: number): {
    routePath: string | undefined;
    routes: RouteDefinition[] | undefined;
};
export default useContextRoutes;

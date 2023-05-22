import { RouteDefinition } from '../../types';
declare function useCurrentPath<RouteType extends RouteDefinition>(routes: RouteType[]): [string, RouteType[]];
export default useCurrentPath;

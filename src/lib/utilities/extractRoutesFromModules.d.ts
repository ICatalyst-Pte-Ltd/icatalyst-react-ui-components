import { ModuleConfig, RouteDefinition } from '../types';
/**
 * Extracts the routes that can be used with react router from
 * the modules that have been specified
 * @param modules The modules to extract the routes for
 * @returns the route definitions from the modules
 */
export declare function extractRoutesFromModules(modules: ModuleConfig<any, any>[]): RouteDefinition<any>[];
export declare function cloneRoutes(routes: RouteDefinition[]): RouteDefinition[];
export default extractRoutesFromModules;

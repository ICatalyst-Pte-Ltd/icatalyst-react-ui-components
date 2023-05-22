import { ResolvedModule } from '../modules';
import { IApplicationRepositories } from '../repositories';
import { ReactModuleConfig } from '../types';
import { ApplicationConfig } from './createApp';
type ModuleResolutionConfig = {
    application?: ApplicationConfig;
    custom?: any;
};
/**
 * Ensures that all paths, layouts, auth, and enabled properties are
 * propagated through the hierarchy
 * to make it easier to deal with in the routing logic
 */
export declare function resolveModules(modules: ReactModuleConfig<any, any>[], repositories?: IApplicationRepositories, config?: ModuleResolutionConfig): ResolvedModule<any, any>[];
export default resolveModules;

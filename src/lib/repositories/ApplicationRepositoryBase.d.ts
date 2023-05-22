import { DtoType } from '@icatalyst/js-core';
import { RepositoryFactory } from '../utilities';
import { AxiosInstance } from '../services';
export type RepositoryProps = {
    axios?: AxiosInstance;
    baseURL: string;
};
export type IApplicationRepositories = Record<string, IApplicationRepository>;
export type RepositoryGenerator<IDFieldName extends string, T extends DtoType<IDFieldName>> = (baseURL: string, axios: AxiosInstance) => RepositoryFactory<IDFieldName, T>;
export type IApplicationRepository = {
    getDefinitions: () => Record<string, RepositoryFactory<string, DtoType<any>>>;
    getDefinition: (name: string) => RepositoryFactory<string, DtoType<any>>;
    addDefinition<T extends DtoType<any>>(name: string, generator: RepositoryGenerator<string, T>): RepositoryFactory<string, T>;
};
export declare abstract class ApplicationRepositoryBase implements IApplicationRepository {
    protected readonly axios: AxiosInstance;
    protected readonly baseURL: string;
    private readonly definitions;
    constructor(args: RepositoryProps);
    protected abstract createDefinitions(): Record<string, RepositoryFactory<string, any>>;
    getDefinitions(): Record<string, RepositoryFactory<string, DtoType<any>>>;
    getDefinition<T extends DtoType<any>>(name: string): {
        getDescriptor(): import("../utilities").Model<Record<string, any>, Record<string, import("../utilities").Field>>;
        useRepository: (deps?: any[] | undefined) => [repository: import("@icatalyst/js-core").DataRepository<string, T, import("@icatalyst/js-core").DtoObserverState<T>, import("@icatalyst/js-core").ObservableData<string, T, import("@icatalyst/js-core").DtoObserverState<T>>>, data: import("@icatalyst/js-core").DtoObserverState<T>];
        createRepository: (args: Partial<import("..").useObservableRepositoryProps<string, T>>, deps?: any[] | undefined) => [repository: import("@icatalyst/js-core").DataRepository<string, T, import("@icatalyst/js-core").DtoObserverState<T>, import("@icatalyst/js-core").ObservableData<string, T, import("@icatalyst/js-core").DtoObserverState<T>>>, data: import("@icatalyst/js-core").DtoObserverState<T>];
    };
    addDefinition<T extends DtoType<any>>(name: string, generator: RepositoryGenerator<string, T>): RepositoryFactory<string, T>;
}

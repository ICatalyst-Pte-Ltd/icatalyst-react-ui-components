import { DtoType } from '@icatalyst/js-core';
declare function useApplicationRepository<IDFieldName extends string = 'id', T extends DtoType<IDFieldName> = DtoType<IDFieldName>>(repositoryName: string, dataDefinition: string): {
    repository: import("@icatalyst/js-core").DataRepository<IDFieldName, T, import("@icatalyst/js-core").DtoObserverState<T>, import("@icatalyst/js-core").ObservableData<IDFieldName, T, import("@icatalyst/js-core").DtoObserverState<T>>>;
    repositoryDescriptor: import("../../utilities").Model<Record<string, any>, Record<string, import("../../utilities").Field>>;
    dataState: import("@icatalyst/js-core").DtoObserverState<T>;
};
export default useApplicationRepository;

import { DataRepository, DtoObserverState, DtoType } from '@icatalyst/js-core';
declare function useRepository<IDFieldName extends string = 'id', T extends DtoType<IDFieldName> = DtoType<IDFieldName>>(repository: DataRepository<IDFieldName, T>, deps?: any[], debug?: string): [DataRepository<IDFieldName, T>, DtoObserverState<T>];
export default useRepository;

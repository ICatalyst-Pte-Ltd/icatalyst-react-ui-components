import { DataRepository, DataRepositoryProps, DtoObserverState, DtoType } from '@icatalyst/js-core';
export type useObservableRepositoryProps<IDFieldName extends string, T extends DtoType<IDFieldName>> = DataRepositoryProps<IDFieldName, T>;
export declare function useObservableRepository<IDFieldName extends string, T extends DtoType<IDFieldName>>(props: useObservableRepositoryProps<IDFieldName, T>, deps?: any[]): [repository: DataRepository<IDFieldName, T>, data: DtoObserverState<T>];
export default useObservableRepository;

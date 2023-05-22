import { DataRepository, DtoObserverState, DtoType, ObservableDataTransforms } from '@icatalyst/js-core';
import { AxiosInstance } from '../services/axiosService';
import { useObservableRepositoryProps } from '../hooks';
import { Field, FieldDefinition, Model } from './createModel';
export type RepositoryFactory<IDFieldName extends string, T extends DtoType<IDFieldName> = DtoType<IDFieldName>> = {
    getDescriptor(): Model;
    useRepository: (deps?: any[]) => [DataRepository<IDFieldName, T>, DtoObserverState<T>];
    createRepository: (args: Partial<useObservableRepositoryProps<IDFieldName, T>>) => [DataRepository<IDFieldName, T>, DtoObserverState<T>];
};
export declare function createModelFields<T, IDField extends keyof T | 'id' = 'id', DtoIDField extends string = Extract<IDField, string>>(fields: Record<keyof T, FieldDefinition>, idField?: Extract<DtoIDField, string>): Model<T & DtoType<DtoIDField>>['fields'];
declare function createModelRepository<IDFieldName extends string, T extends DtoType<IDFieldName>>(props: {
    baseURL: string;
    dtoPath: string;
    model?: Partial<Model<T>>;
    axios?: AxiosInstance;
    transforms?: ObservableDataTransforms<T>;
}): {
    getDescriptor(): Model<Record<string, any>, Record<string, Field>>;
    useRepository: (deps?: any[]) => [repository: DataRepository<IDFieldName, T, DtoObserverState<T>, import("@icatalyst/js-core").ObservableData<IDFieldName, T, DtoObserverState<T>>>, data: DtoObserverState<T>];
    createRepository: (args: Partial<useObservableRepositoryProps<IDFieldName, T>>, deps?: any[]) => [repository: DataRepository<IDFieldName, T, DtoObserverState<T>, import("@icatalyst/js-core").ObservableData<IDFieldName, T, DtoObserverState<T>>>, data: DtoObserverState<T>];
};
export default createModelRepository;

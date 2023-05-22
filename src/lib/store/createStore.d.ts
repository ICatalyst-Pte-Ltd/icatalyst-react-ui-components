import { ReducersMapObject } from '@reduxjs/toolkit';
export type CreateStoreProps = {
    reducers?: ReducersMapObject;
};
export declare function createStore({ reducers }: CreateStoreProps): import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    [x: string]: any;
}, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("@reduxjs/toolkit").ThunkMiddleware<{
    [x: string]: any;
}, import("redux").AnyAction, undefined>]>>;
export default createStore;
export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>;
export type AppDispatch = ReturnType<ReturnType<typeof createStore>['dispatch']>;

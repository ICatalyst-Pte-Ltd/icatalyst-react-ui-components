import { DependencyList } from 'react';
declare function useHookWithRefCallback<T = null>(callback: (ref: T) => void, deps?: DependencyList): [React.MutableRefObject<T>];
export default useHookWithRefCallback;

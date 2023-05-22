import { Dispatch, SetStateAction } from 'react';
import { Observable } from 'rxjs';
declare function useObservable<T>(observable: Observable<T>, setter: Dispatch<SetStateAction<T>>, deps?: any[], debug?: string): void;
export default useObservable;

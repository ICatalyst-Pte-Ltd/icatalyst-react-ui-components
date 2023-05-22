export declare function useMemoDeepCompare<T>(callback: () => T, dependencies?: unknown[], comparator?: (previous: unknown[], next: unknown[]) => boolean, debug?: string): T;
export default useMemoDeepCompare;

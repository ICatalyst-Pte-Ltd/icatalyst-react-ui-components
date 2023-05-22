declare function useWebsockets(host: string, namespace: string, events: {
    [key: string]: (event: string, data: any) => void;
}): {
    host: string;
    namespace: string;
    connected: boolean;
    socketID: string | null;
    error: string | null;
    emitEvent: (event: string, payload: Record<any, any>) => void;
};
export default useWebsockets;

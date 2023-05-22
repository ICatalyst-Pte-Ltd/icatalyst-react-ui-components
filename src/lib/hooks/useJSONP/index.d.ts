import { Observable } from 'rxjs';
export type UseJSONPProps<DataType = any> = {
    src: string;
    callback: (data: DataType) => void;
    jsonPFn: string;
};
type ScriptState = 'initialising' | 'loaded' | 'error' | 'aborted';
type JsonPBaseResponse = {
    status: 200 | 400;
    responseType: 'jsonp' | 'error';
    originalEvent: Event;
};
type JsonPOKResponse<DataType = any> = JsonPBaseResponse & {
    status: 200;
    responseType: 'jsonp';
    response: DataType;
};
type JsonPErrorResponse = JsonPBaseResponse & {
    status: 400;
    responseType: 'error';
};
type JsonPResponse<DataType = any> = JsonPErrorResponse | JsonPOKResponse<DataType>;
declare function useJSONP<DataType = any>({ src, callback, jsonPFn, }: UseJSONPProps<DataType>): [
    Observable<JsonPResponse<DataType>>,
    ScriptState
];
export default useJSONP;

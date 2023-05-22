import type { AxiosInstance } from 'axios';
declare const globalAxios: AxiosInstance;
export declare function createTokenRefreshInterceptor(axios: AxiosInstance, refreshTokenURI: string): number;
export default globalAxios;
export { AxiosInstance };

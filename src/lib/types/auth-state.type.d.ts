import { UserInfo } from './user-info.type';
export type AuthState = {
    user?: UserInfo;
    token?: string;
};

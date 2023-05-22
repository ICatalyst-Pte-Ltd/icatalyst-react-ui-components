import { ReactNode } from 'react';
export type AuthPaths = {
    login: string;
    unauthorised: string;
    logout: string;
};
export interface AuthProviderProps {
    children: ReactNode;
    paths?: Partial<AuthPaths>;
}

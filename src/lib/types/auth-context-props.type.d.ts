import { ComponentType, Dispatch, SetStateAction } from 'react';
import { AuthGuardProps } from './auth-guard-props.type';
import { AuthState } from './auth-state.type';
export type AuthContextProps = {
    auth: AuthState;
    setAuth: Dispatch<SetStateAction<AuthState>>;
    persist: boolean;
    setPersist: Dispatch<SetStateAction<boolean>>;
    GuardComponent: ComponentType<AuthGuardProps>;
    isInRole: (roles: string[]) => boolean;
    logoutUser: () => void;
};

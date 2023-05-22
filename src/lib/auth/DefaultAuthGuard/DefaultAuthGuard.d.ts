import { AuthGuardProps, AuthPaths } from '../../types';
export type DefaultAuthGuardProps = AuthGuardProps & {
    paths: AuthPaths;
};
export declare function DefaultAuthGuard({ roles, paths }: AuthGuardProps): import("@emotion/react/jsx-runtime").JSX.Element | null;
export default DefaultAuthGuard;

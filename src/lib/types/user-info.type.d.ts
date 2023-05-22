import { AuthRole } from './auth-role.type';
export type UserInfo = {
    /**
     * The API user Identifier
     */
    id?: string | undefined;
    /**
     * The display name of the user
     */
    name: string;
    /**
     * The roles that the user is a member of
     */
    roles: AuthRole[];
    /**
     * The image to display when representing the user
     */
    profileImage?: string | null;
};

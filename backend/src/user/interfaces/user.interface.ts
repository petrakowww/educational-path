import { AuthMethod } from '@prisma/__generated__';

export interface UserDataProps {
    email: string;
    password: string;
    name: string;
    avatar: string;
    method: AuthMethod;
    isVerified: boolean;
    github_url?: string;
}

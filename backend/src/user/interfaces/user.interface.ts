import { User } from '@prisma/__generated__';

export interface UserDataProps extends Partial<User> {
    githubUrl?: string;
}

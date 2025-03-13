import { Request } from 'express';

import { User } from '@prisma/__generated__';

export type ContextRequestType = 'http' | 'graphql';

export interface UserRequest extends Request {
    user?: User;
}

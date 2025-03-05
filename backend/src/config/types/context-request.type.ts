import { Request } from 'express';
import { Session } from 'express-session';

import { User } from '@prisma/__generated__';

export type ContextRequestType = 'http' | 'graphql';

export interface SessionRequest extends Request {
    session: Session & {
        userId?: string;
    };
    user?: User;
}

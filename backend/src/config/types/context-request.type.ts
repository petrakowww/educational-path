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

export interface AuthCookieRequest extends Request {
    cookies: {
        session?: string;
        at?: string;
    };
}

export type ExtendAuthCookieRequest = AuthCookieRequest & SessionRequest;

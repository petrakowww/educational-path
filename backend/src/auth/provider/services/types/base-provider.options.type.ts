import { AuthMethod } from '@prisma/__generated__';

export type BaseProviderOptionsProps = {
    name: AuthMethod;
    authorizeUrl: string;
    accessUrl: string;
    profileUrl: string;
    scopes: string[];
    clientId: string;
    clientSecret: string;
};

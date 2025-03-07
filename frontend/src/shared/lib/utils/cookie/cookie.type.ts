import type { NextApiRequest, NextApiResponse } from 'next';

export interface ICookieClient {
    getAccessToken(req?: NextApiRequest, res?: NextApiResponse): string | undefined;
    getRefreshToken(req?: NextApiRequest, res?: NextApiResponse): string | undefined;
    setAccessToken(req: NextApiRequest, res: NextApiResponse, value: string, options?: object): void;
    setRefreshToken(req: NextApiRequest, res: NextApiResponse, value: string, options?: object): void;
    deleteAccessToken(req?: NextApiRequest, res?: NextApiResponse): void;
    deleteRefreshToken(req?: NextApiRequest, res?: NextApiResponse): void;
    logout(req?: NextApiRequest, res?: NextApiResponse): void;
}

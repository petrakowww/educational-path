import { TypeUserInfo } from '@/auth/provider/services/types/user-info.type';

export type PickTypeUserInfo<T extends Partial<TypeUserInfo>> = Pick<
    T,
    keyof TypeUserInfo
>;

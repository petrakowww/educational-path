import { useQuery } from '@apollo/client';
import { FIND_PROFILE_LOGO } from '../graphql/profile.query';
import client from '@/shared/lib/graphql/apollo-client';
import { FindProfileResponse } from '../types/user-query.type';
import { UNKNOWN_USER } from '@/shared/lib/constants/fallback.constants';

export const useQueryProfileLogo = () => {
	const { data, loading, error } =
		useQuery<FindProfileResponse>(FIND_PROFILE_LOGO);

	const profile = data?.findProfile;
	const fallbackData = profile
		? profile
		: { name: UNKNOWN_USER, picture: undefined };

	return { data: fallbackData, loading, error };
};

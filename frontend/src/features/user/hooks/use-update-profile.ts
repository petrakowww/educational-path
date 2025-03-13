import {
	useUpdateSkillProfileMutation,
} from '@/shared/graphql/generated/output';
import { TypeChangeProfileSchema } from '../schemes/form-change-social-profile-schema';
import { useState } from 'react';
import { useUpdateProfileMutation } from '@/shared/graphql/generated/output';

export const useUpdateSocialProfile = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [updateSkillProfile] = useUpdateSkillProfileMutation();
	const [updateProfileName] = useUpdateProfileMutation();

	const updateProfile = async (profileData: TypeChangeProfileSchema) => {
		try {
			setIsLoading(true);
			const promises = [];

			if (profileData.name) {
				promises.push(
					updateProfileName({
						variables: {
							dto: {
								name: profileData.name,
							},
						},
					})
				);
			}

			promises.push(
				updateSkillProfile({
					variables: {
						dto: {
							profilename: profileData.profilename || null,
							headline: profileData.headline || null,
							githubUrl: profileData.github || null,
							vkUrl: profileData.vk || null,
							telegramUrl: profileData.telegram || null,
						},
					},
				})
			);

			await Promise.all(promises);
			return { success: true };
		} catch (error) {
			return { success: false, error: (error as Error).message };
		} finally {
			setIsLoading(false);
		}
	};

	return { updateProfile, isLoading };
};

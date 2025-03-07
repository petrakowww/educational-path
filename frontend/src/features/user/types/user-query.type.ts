type UserProfileGraphQL = {
	id: string;
	email?: string;
	name?: string;
	picture?: string;
	isVerified?: string;
	isTwoFactorEnabled?: string;
};

export interface FindProfileResponse {
	findProfile: UserProfileGraphQL;
}

import { gql } from '@apollo/client';

export const FIND_PROFILE = gql`
	query FindProfile {
		findProfile {
			email
			name
			picture
			isVerified
			isTwoFactorEnabled
		}
	}
`;

export const FIND_PROFILE_LOGO = gql`
	query FindProfile {
		findProfile {
			name
			picture
		}
	}
`;

class StaticResources {
	private serverStaticUrl: string;

	constructor() {
		this.serverStaticUrl = process.env.PUBLIC_URL || '';
	}

	getAvatarUrl(avatarPath: string | undefined): string | undefined {
		if (!avatarPath) {
			return undefined;
		}

		if (avatarPath.startsWith('/avatars')) {
			return `${this.serverStaticUrl}${avatarPath}`;
		}

		return avatarPath;
	}
}

export const staticResources = new StaticResources();

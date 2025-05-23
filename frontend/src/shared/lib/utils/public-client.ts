class StaticResources {
	private serverStaticUrl: string;

	constructor() {
		this.serverStaticUrl = process.env.PUBLIC_URL || '';
	}

	private resolve(
		path: string | undefined,
		prefix: string
	): string | undefined {
		if (!path) return undefined;

		const cleanedBase = this.serverStaticUrl.replace(/\/$/, '');

		// если путь уже начинается с '/', считаем его полным (включает /avatars/...)
		if (path.startsWith('/')) {
			return `${cleanedBase}${path}`;
		}

		// если путь без слэша — добавим prefix
		const cleanedPrefix = prefix.replace(/^\/|\/$/g, '');
		return `${cleanedBase}/${cleanedPrefix}/${path}`;
	}

	getAvatarUrl(avatarPath: string | undefined): string | undefined {
		return this.resolve(avatarPath, '');
	}

	getImageUrl(imagePath: string | undefined): string | undefined {
		console.log(this.resolve(imagePath, '/images/courses'));
		return this.resolve(imagePath, '/images/courses');
	}

	getAttachmentUrl(attachmentPath: string | undefined): string | undefined {
		return this.resolve(attachmentPath, '/attachments');
	}

	getVideoUrl(videoPath: string | undefined): string | undefined {
		return this.resolve(videoPath, '/videos/courses');
	}
}

export const staticResources = new StaticResources();

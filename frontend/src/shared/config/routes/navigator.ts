import { slugify } from '@/shared/lib/utils/slugify';

export class Navigator {
	constructor() {}

	getEditorPath(routeId: string, routeTitle: string) {
		const slug = slugify(routeTitle);
		return `/editor/${routeId}/${slug}`;
	}

	getViewerPath(routeId: string, routeTitle: string) {
		const slug = slugify(routeTitle);
		return `/viewer/${routeId}/${slug}`;
	}
}

export const panelNavigator = new Navigator();
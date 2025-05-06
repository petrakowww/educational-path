import { slugify } from '@/shared/lib/utils/slugify';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

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
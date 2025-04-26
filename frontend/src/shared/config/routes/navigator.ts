import { slugify } from '@/shared/lib/utils/slugify';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export class Navigator {
	constructor(private router: AppRouterInstance) {}

	toEditor(routeId: string, routeTitle: string) {
		const slug = slugify(routeTitle);
		this.router.push(`/editor/${routeId}/${slug}`);
	}

	toViewer(routeId: string, routeTitle: string) {
		const slug = slugify(routeTitle);
		this.router.push(`/viewer/${routeId}/${slug}`);
	}
}

export const useNavigator = () => {
	const router = useRouter();

	return new Navigator(router);
};

import { LucideIcon } from 'lucide-react';

export interface ArrayNavMainProps {
	title: string;
	url: string;
	icon?: LucideIcon;
	isActive?: boolean;
	isVisible?: boolean;
	items?: {
		title: string;
		url: string;
		isVisible?: boolean;
	}[];
}

export interface AccountNavMainProps {
	[key: string]: {
		items: ArrayNavMainProps[];
		label: string;
		isVisible?: boolean;
	};
}

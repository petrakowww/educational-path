import { LucideIcon } from 'lucide-react';

export interface ArrayNavMainProps {
	title: string;
	url: string;
	icon?: LucideIcon;
	isActive?: boolean;
	items?: {
		title: string;
		url: string;
	}[];
}

export interface AccountNavMainProps {
	[key: string]: {
		items: ArrayNavMainProps[];
		label: string;
	};
}

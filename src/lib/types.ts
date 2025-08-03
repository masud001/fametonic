export interface NavigationItem {
	href: string;
	label: string;
	external?: boolean;
	icon?: string;
	active?: boolean;
}
export interface Announcement {
	icon: string;
	text: string;
	link: string;
	ariaLabel: string;
}
export interface KeyFeature {
	id: string;
	text: string;
	icon?: string;
	highlight?: boolean;
}
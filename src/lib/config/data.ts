
import type { NavigationItem, Announcement, KeyFeature } from '$lib/types';

export const navigationItems: NavigationItem[] = [
	{ href: '/', label: 'About' },
	{ href: '/', label: 'Contact' }
];

export const announcements: Announcement[] = [
	{
		icon: '🚀',
		text: 'FRESH BEGINNINGS SALE: Extra 25% OFF, Limited Spots - start your journey today!',
		link: '/sale',
		ariaLabel: 'Announcement: FRESH BEGINNINGS SALE: Extra 25% OFF, Limited Spots - start your journey today!'
	}
];

export const keyFeatures: KeyFeature[] = [
	{
		id: 'immediate-start',
		text: 'Start growing your influence right away—no waiting required!',
		icon: '⚡'
	},
	{
		id: 'viral-content',
		text: 'Create viral TikToks and Reels step by step with easy-to-follow lessons',
		icon: '📱'
	},
	{
		id: 'ai-worker',
		text: 'Use a Personal AI Worker to boost your content',
		icon: '🤖'
	},
	{
		id: 'expert-courses',
		text: 'Learn from expert-led courses designed for aspiring influencers',
		icon: '🎓'
	}
];


export const siteConfig = {
	title: 'Fametonic - Turn Social Media Into a Profitable Career',
	description: 'Discover how to grow your influence, create viral content, and succeed on social media with Fametonic. Take the 1-minute quiz to get started!',
	logo: {
		mobile: '/images/fametonic-mobile-logo.svg',
		desktop: '/images/fametonic-desktop-logo.svg'
	},
	links: {
		home: '/',
		sale: '/sale'
	}
}; 
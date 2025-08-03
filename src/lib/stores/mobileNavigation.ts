import { writable } from 'svelte/store';

export const mobileNavigationStore = writable({
	isOpen: false
});

export const mobileNavigationActions = {
	toggle: () => {
		mobileNavigationStore.update(state => ({
			...state,
			isOpen: !state.isOpen
		}));
	},
	open: () => {
		mobileNavigationStore.update(state => ({
			...state,
			isOpen: true
		}));
	},
	close: () => {
		mobileNavigationStore.update(state => ({
			...state,
			isOpen: false
		}));
	}
}; 
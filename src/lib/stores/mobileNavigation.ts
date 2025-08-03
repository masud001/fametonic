import { writable } from 'svelte/store';

// Single source of truth for mobile navigation state
export const mobileNavigationStore = writable({
	isOpen: false
});

// Actions to manage the state
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
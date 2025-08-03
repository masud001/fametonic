
// Main Layout Components
export { default as Header } from './components/Header.svelte';
export { default as Footer } from './components/Footer.svelte';
export { default as Contents } from './components/Contents.svelte';

// Content Components
export { default as AnnouncementBar } from './components/AnnouncementBar.svelte';
export { default as KeyFeatures } from './components/KeyFeatures.svelte';

// Mobile Navigation Components
export { default as MobileBackdrop } from './components/MobileBackdrop.svelte';
export { default as MobileNavigation } from './components/MobileNavigation.svelte';
export { default as MobileMenuButton } from './components/MobileMenuButton.svelte';


// store 
export { mobileNavigationStore, mobileNavigationActions } from './stores/mobileNavigation';

// type 
export type {NavigationItem, Announcement, KeyFeature } from './types';

// data 
export { navigationItems,announcements, keyFeatures ,siteConfig} from './config/data';



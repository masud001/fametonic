<script lang="ts">
	import { mobileNavigationStore, mobileNavigationActions } from '$lib/stores/mobileNavigation';
	
	// Subscribe to the store
	$: isOpen = $mobileNavigationStore.isOpen;

	// Navigation items - can be made configurable via props if needed
	const navigationItems = [
		{ href: '/', label: 'About' },
		{ href: '/', label: 'Contact' }
	];
</script>

<div
	class="bg-primary-bg fixed right-0 top-0 z-20 h-full w-64 shadow-lg transition-transform duration-300"
	style:transform={isOpen ? 'translateX(0)' : 'translateX(100%)'}
	aria-hidden={!isOpen}
	role="dialog"
	aria-modal="true"
	aria-label="Mobile navigation menu"
>
	<nav class="flex flex-col p-5" aria-label="Mobile navigation">
		{#each navigationItems as item}
			<a
				href={item.href}
				class="font-figtree text-menu-color hover:text-hover-text mb-4 text-lg font-semibold leading-normal transition-colors duration-200"
				on:click={mobileNavigationActions.close}
			>
				{item.label}
			</a>
		{/each}
	</nav>
</div> 
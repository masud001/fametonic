<script lang="ts">
	import { mobileNavigationStore, mobileNavigationActions } from '$lib/stores/mobileNavigation';
	
	// Subscribe to the store
	$: isOpen = $mobileNavigationStore.isOpen;
</script>

<button
	aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
	aria-expanded={isOpen}
	class="relative z-20 flex flex-col gap-y-1.5 focus:outline-none "
	tabindex="0"
	on:click={mobileNavigationActions.toggle}
	on:keydown={(e) => e.key === 'Enter' && mobileNavigationActions.toggle()}
>
	<span
		class="bg-mobile-menu-btn block h-0.5 w-6 transition-transform duration-300"
		style:transform={isOpen ? 'rotate(45deg) translateY(11px)' : 'none'}
	></span>
	<span
		class="bg-mobile-menu-btn block h-0.5 w-6 transition-opacity duration-300"
		style:opacity={isOpen ? '0' : '1'}
	></span>
	<span
		class="bg-mobile-menu-btn block h-0.5 w-6 transition-transform duration-300"
		style:transform={isOpen ? 'rotate(-48deg) translateY(-12px)' : 'none'}
	></span>
</button> 
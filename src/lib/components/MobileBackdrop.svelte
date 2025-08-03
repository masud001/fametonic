<script lang="ts">
	import { mobileNavigationStore, mobileNavigationActions } from '$lib';
	
	// Subscribe to the store
	$: isOpen = $mobileNavigationStore.isOpen;
</script>

{#if isOpen}
	<button
		type="button"
		aria-label="Close mobile menu"
		class="fixed inset-0 z-10 bg-gray-900 bg-opacity-25 transition-opacity duration-300"
		on:click={mobileNavigationActions.close}
		on:keydown={(e) => e.key === 'Escape' && mobileNavigationActions.close()}
	></button>
{/if} 
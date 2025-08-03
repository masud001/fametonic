<script lang="ts">
	import { MobileBackdrop, MobileNavigation, MobileMenuButton, mobileNavigationActions } from '$lib';

	// Optional: Close drawer on escape key
	import { onMount } from 'svelte';
	
	onMount(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				mobileNavigationActions.close();
			}
		};

		document.addEventListener('keydown', handleEscape);
		
		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	});
</script>

<!-- Example usage of mobile navigation components with centralized state -->
<div class="relative">
	<!-- Mobile Menu Button -->
	<MobileMenuButton />
	
	<!-- Mobile Navigation Components -->
	<MobileBackdrop />
	<MobileNavigation />
</div> 
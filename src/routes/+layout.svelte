<script lang="ts">
	import '../app.css';
	import { siteConfig } from '$lib';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<link rel="icon" href="/assets/favicon.svg" />
	<title>{siteConfig.title}</title>
	<meta
		name="description"
		content={siteConfig.description}
	/>
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<!-- Page Content -->
<slot />

<script lang="ts">
	import { onMount } from 'svelte';
	import AnnouncementBar from '$lib/components/AnnouncementBar.svelte';
	import type { Announcement } from '$lib/types';
	import Header from '$lib/components/Header.svelte';
	import Contents from '$lib/components/Contents.svelte';
	let announcements: Announcement[] = [];

	// Fetch announcements from the static JSON file
	onMount(async () => {
		const response = await fetch('/data/announcements.json');
		announcements = await response.json();
	});
</script>

<AnnouncementBar {announcements} />

<Header />
<Contents />

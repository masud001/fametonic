<script lang="ts">
	import { onMount } from 'svelte';
	import { AnnouncementBar, Header, Contents } from '$lib';
	import type { Announcement } from '$lib/types';
	
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

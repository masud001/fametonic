<script lang="ts">
	import type { KeyFeature } from '$lib';
	export let features: KeyFeature[] = [];
</script>

<ul
	class="flex flex-col gap-y-[13px] pb-[30px] pt-4 text-start"
	aria-label="Key features"
	role="list"
>
	{#each features as feature (feature.id)}
		<li class="flex items-start gap-x-2.5" role="listitem">
			<!-- Feature Icon -->
			<span class="flex-shrink-0 font-bold" aria-hidden="true">
				{feature.icon || '✨'}
			</span>
			
			<!-- Feature Text -->
			<p class="font-figtree text-base font-semibold md:leading-[1.38] text-text-primary">
				{feature.text}
			</p>
		</li>
	{/each}
</ul>

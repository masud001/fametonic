<script lang="ts">
	export let features: string[] = [];
</script>

<ul
	class="flex flex-col gap-y-[13px] pb-[30px] pt-4 text-start"
	aria-label="Key features"
	role="list"
>
	{#each features as feature (feature)}
		<li class="flex items-start gap-x-2.5" role="listitem">
			<span class="flex-shrink-0 font-bold" aria-hidden="true">✨</span>
			<p class="font-figtree text-base font-semibold md:leading-[1.38] text-text-primary">{feature}</p>
		</li>
	{/each}
</ul>

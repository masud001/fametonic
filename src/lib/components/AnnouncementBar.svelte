<script lang="ts">
	import type { Announcement } from '$lib/types';
	export let announcements: Announcement[] = [];
</script>

<div
	class="announcement-bar font-figtree from-secondary to-primary flex w-full items-center justify-center gap-3 bg-gradient-to-r p-5 text-center text-white md:py-2.5"
	aria-label="Announcements"
>
	<ul role="list" class="flex flex-wrap gap-3">
		{#each announcements as announcement, index (index)}
			<li class="announcement-item flex items-start gap-0.5 sm:gap-2" role="listitem">
				<span class="announcement-icon">{announcement.icon}</span>
				<a
					class="text-[15px] leading-[19px] no-underline hover:underline focus:underline md:text-[22px] md:leading-[26px]"
					aria-label={announcement.ariaLabel}
					href={announcement.link}
				>
					{#if announcement.text.includes(':')}
						<span class="font-extrabold uppercase text-[#00E7F9]">
							{announcement.text.split(':')[0]}:
						</span>
						<span class="font-semibold text-white">
							{announcement.text.split(':')[1]}
						</span>
					{:else}
						<!-- Fallback if no colon is found -->
						<span class="font-semibold text-white">
							{announcement.text}
						</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</div>

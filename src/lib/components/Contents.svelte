<script lang="ts">
	import { Footer, KeyFeatures } from '$lib';
	import { onMount } from 'svelte';
	let features: string[] = [];

	// Fetch the JSON data dynamically
	onMount(async () => {
		const response = await fetch('/data/keyFeatures.json');
		features = await response.json();
	});
</script>

<section
	class="max-w-md:pt-5 flex w-full flex-row items-center justify-center md:py-[57px]"
	aria-labelledby="hero-heading"
>
	<div
		class="container flex max-w-[992px] flex-col-reverse items-center justify-between px-5 pb-10 md:flex-row lg:px-0 lg:pb-0"
	>
		<!-- Left Content -->
		<div class="w-full flex-1 text-center md:z-10 md:w-1/2 md:text-start lg:mb-0">
			<!-- Hero Heading -->
			<h1
				id="hero-heading"
				class="font-urbanist text-text-primary text-[33px] font-bold leading-[42px] max-[480px]:text-[25px] max-[480px]:leading-[30px]"
			>
				Want to Turn Social Media Into a Profitable Career?
			</h1>

			<!-- Subheading -->
			<h2
				aria-level="2"
				class="text-shadow-[0_4px_2px_#fc004e] font-urbanist text-[35px] font-bold leading-[42px] text-[#00E7F9] max-[480px]:text-[25px] max-[480px]:leading-[30px]"
			>
				Discover your way to success with Fametonic:
			</h2>

			<!-- Key Features List -->
			<KeyFeatures {features} />

			<!-- Call to Action -->
			<div class="flex flex-col-reverse gap-y-[30px] lg:flex-col">
				<div
					class="flex w-full flex-col justify-center gap-y-2.5 text-center align-middle lg:w-[313px]"
				>
					<button
						class="font-figtree shadow-button text-text-primary bg-secondary flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl px-10 py-2 text-xl"
						aria-label="Take the 1-minute quiz to get started"
					>
						GET STARTED <span><img src="/images/angle-icon.svg" alt="angle-icon" /></span>
					</button>
					<p class="font-figtree fo text-text-primary text-xs">
						1-minute quiz for personalized insights
					</p>
				</div>

				<!-- Footer -->
				<Footer />
			</div>
		</div>

		<!-- Right Content -->
		<div class="flex w-full flex-1 justify-center md:w-1/2 lg:justify-end">
			<picture>
				<source srcset="/images/fametonic-home-page-image-mobile.webp" media="(max-width: 768px)" />
				<source srcset="/images/fametonic-home-page-image.webp" media="(min-width: 769px)" />
				<img
					alt="Fametonic App Screenshot showcasing features for social media success"
					loading="lazy"
					width="666"
					height="679"
					decoding="async"
					class="home-image xl:scale-115 w-full max-w-xs object-cover object-center sm:max-w-sm lg:max-w-md xl:max-w-lg"
					src="/images/fametonic-home-page-image.webp"
				/>
			</picture>
		</div>
	</div>
</section>

<style>
	@media (max-width: 768px) {
		.home-image {
			max-width: 320px;
			height: 326px;
			object-fit: contain;
		}
	}
</style>

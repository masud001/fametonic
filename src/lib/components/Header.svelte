<script lang="ts">
	import { MobileBackdrop, MobileNavigation, MobileMenuButton } from '$lib';
	import { navigationItems, siteConfig } from '$lib';
</script>

<header class="relative flex w-full justify-center">
	<div
		class="container relative flex items-center justify-between px-5 pt-5 md:items-start md:px-0 lg:max-w-[992px] lg:pt-[35px]"
	>
		<!-- Mobile Logo -->
		<div class="!ml-auto md:hidden">
			<a href={siteConfig.links.home} aria-label="Navigate to the homepage">
				<img
					alt="Fametonic Logo - Navigate to the homepage"
					loading="lazy"
					width="120"
					height="40"
					decoding="async"
					src={siteConfig.logo.mobile}
				/>
			</a>
		</div>

		<!-- Desktop Logo -->
		<div class="hidden md:block">
			<a href={siteConfig.links.home} aria-label="Navigate to the homepage">
				<img
					alt="Fametonic Logo - Navigate to the homepage"
					loading="lazy"
					width="170"
					height="73"
					decoding="async"
					src={siteConfig.logo.desktop}
				/>
			</a>
		</div>

		<!-- Desktop Navigation -->
		<nav class="hidden items-center gap-x-10 md:flex" aria-label="Main navigation">
			{#each navigationItems as item}
				<a
					href={item.href}
					class="font-figtree hover:text-text text-menu-color text-lg font-semibold leading-normal"
					tabindex="0"
					{...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<!-- Mobile Menu Button -->
		<div class="ml-auto md:hidden">
			<MobileMenuButton />
		</div>
	</div>

	<!-- Mobile Navigation Components temporarily hidden -->
	<!-- <MobileBackdrop /> -->
	<!-- <MobileNavigation /> -->
</header>

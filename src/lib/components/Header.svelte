<script lang="ts">
	import { MobileBackdrop, MobileNavigation, MobileMenuButton } from '$lib';
</script>

<header class="relative flex w-full justify-center">
	<div
		class="container relative flex items-center justify-between px-5 pt-5 md:items-start md:px-0 lg:max-w-[992px] lg:pt-[35px]"
	>
		<!-- Mobile Logo -->
		<div class="!ml-auto md:hidden">
			<a href="/" aria-label="Navigate to the homepage">
				<img
					alt="Fametonic Logo - Navigate to the homepage"
					loading="lazy"
					width="120"
					height="40"
					decoding="async"
					src="/images/fametonic-mobile-logo.svg"
				/>
			</a>
		</div>

		<!-- Desktop Logo -->
		<div class="hidden md:block">
			<a href="/" aria-label="Navigate to the homepage">
				<img
					alt="Fametonic Logo - Navigate to the homepage"
					loading="lazy"
					width="170"
					height="73"
					decoding="async"
					src="/images/fametonic-desktop-logo.svg"
				/>
			</a>
		</div>

		<!-- Desktop Navigation -->
		<nav class="hidden items-center gap-x-10 md:flex" aria-label="Main navigation">
			<a
				href="/"
				class="font-figtree hover:text-text text-menu-color text-lg font-semibold leading-normal"
				tabindex="0"
			>
				About
			</a>
			<a
				href="/"
				class="font-figtree hover:text-text text-menu-color text-lg font-semibold leading-normal"
				tabindex="0"
			>
				Contact
			</a>
		</nav>

		<!-- Mobile Menu Button -->
		<div class="ml-auto md:hidden">
			<MobileMenuButton />
		</div>
	</div>

	<!-- Mobile Navigation Components - Temporarily Hidden -->
	<!-- <MobileBackdrop /> -->
	<!-- <MobileNavigation /> -->
</header>

<script>
	/*
	 * this is mobile drawer navigation state.
	 * Note: currently mobile drawer navigation is not used.
	 * to de-activate navigation on mobile i used "hidden" class.
	 * to activate it, you can remove the "hidden" class from the drawer and backdrop elements.
	 */
	let isDrawerOpen = false;
</script>

<header class="relative flex w-full justify-center">
	<div
		class="container relative flex items-center justify-between px-5 pt-5 md:items-start md:px-0 lg:max-w-[992px] lg:pt-9"
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
					width="174"
					height="74"
					decoding="async"
					src="/images/fametonic-desktop-logo.svg"
				/>
			</a>
		</div>

		<!-- Desktop Navigation -->
		<nav class="hidden items-center gap-x-10 md:flex" aria-label="Main navigation">
			<a
				href="/about"
				class="font-figtree hover:text-text text-lg font-semibold text-[#A9A9A9] transition-colors duration-300"
				tabindex="0">About</a
			>
			<a
				href="/contact"
				class="font-figtree hover:text-text text-lg font-semibold text-[#A9A9A9] transition-colors duration-300"
				tabindex="0">Contact</a
			>
		</nav>

		<!-- Mobile Menu Button -->
		<div class="ml-auto md:hidden">
			<button
				aria-label="Open mobile menu"
				aria-expanded={isDrawerOpen}
				class="relative z-20 flex flex-col gap-y-1.5 focus:outline-none"
				tabindex="0"
				on:click={() => (isDrawerOpen = !isDrawerOpen)}
			>
				<span
					class="block h-0.5 w-6 bg-white transition-transform duration-300"
					style:transform={isDrawerOpen ? 'rotate(45deg) translateY(11px)' : 'none'}
				></span>
				<span
					class="block h-0.5 w-6 bg-white transition-opacity duration-300"
					style:opacity={isDrawerOpen ? '0' : '1'}
				></span>
				<span
					class="block h-0.5 w-6 bg-white transition-transform duration-300"
					style:transform={isDrawerOpen ? 'rotate(-48deg) translateY(-12px)' : 'none'}
				></span>
			</button>
		</div>
	</div>

	<!-- Drawer Backdrop (NOTE:remove hidden class when navigation is active)-->
	{#if isDrawerOpen}
		<button
			type="button"
			aria-label="Close mobile menu"
			class="fixed inset-0 z-10 hidden bg-[#010101] bg-opacity-25 transition-opacity duration-300"
			on:click={() => (isDrawerOpen = false)}
		></button>
	{/if}

	<!-- Drawer Navigation  (NOTE:remove hidden class when navigation is active)-->
	<div
		class="fixed right-0 top-0 z-20 hidden h-full w-64 bg-gray-100 shadow-lg transition-transform duration-300"
		style:transform={isDrawerOpen ? 'translateX(0)' : 'translateX(100%)'}
		aria-hidden={!isDrawerOpen}
	>
		<nav class="flex flex-col p-5" aria-label="Mobile navigation">
			<a
				href="/about"
				class="font-figtree mb-4 text-lg font-semibold text-gray-800 hover:text-gray-600"
				on:click={() => (isDrawerOpen = false)}>About</a
			>
			<a
				href="/contact"
				class="font-figtree mb-4 text-lg font-semibold text-gray-800 hover:text-gray-600"
				on:click={() => (isDrawerOpen = false)}>Contact</a
			>
		</nav>
	</div>
</header>

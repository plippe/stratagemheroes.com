<script>
	import '../app.css';

	const title = 'Stratagem Heroes';
	const description =
		'The Galaxy’s Last Line of Offence. Enlist in the Helldivers and join the fight for freedom across a hostile galaxy in a fast, frantic, and ferocious third-person shooter.';
	const url = 'https://stratagemheroes.com';
	const image = `${url}/favicon.png`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={title} />
	<meta property="og:url" content={url} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<meta name="twitter:url" content={url} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />

	<meta name="robots" content="index, follow" />

	<style lang="postcss">
		html {
			@apply h-full;
		}
		body {
			@apply h-full bg-grey-dark;
		}
	</style>

	<script
		defer
		src="https://eu.umami.is/script.js"
		data-website-id="c5a5a057-4245-4ea8-ae4c-99c96fbfc423"
		data-domains="stratagemheroes.com"
	></script>
</svelte:head>

<div
	class="absolute inset-0 bg-[url('/helldivers2/superearth.png')] bg-no-repeat bg-center opacity-10"
/>

<div class="relative min-h-full flex flex-col">
	<div class="h-0 border-white border-t-4 my-20"></div>
	<div class="container mx-auto px-4 grow flex flex-col justify-center">
		<slot />
	</div>
	<div class="h-0 border-white border-t-4 my-20 pt-1 text-right">
		<div class="container mx-auto px-4">
			<div class="text-xs sm:text-sm text-white">
				Buy Helldivers 2 on
				<a href="https://www.playstation.com/en-ie/games/helldivers-2/#buy-now" class="text-yellow"
					>PlayStation</a
				>
				or
				<a href="https://store.steampowered.com/app/553850/HELLDIVERS_2/" class="text-yellow"
					>Steam</a
				>
			</div>
			<a href="/copyright" class="text-xs sm:text-sm text-yellow">
				All rights belong to the respective owners
			</a>
		</div>
	</div>
</div>

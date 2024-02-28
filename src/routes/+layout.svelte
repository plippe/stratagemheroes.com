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
</svelte:head>

<div
	class="absolute inset-0 bg-[url('/helldivers2/superearth.png')] bg-no-repeat bg-center opacity-10"
/>

<div class="relative min-h-full flex flex-col">
	<div class="h-0 border-white border-t-4 my-20"></div>
	<div class="container mx-auto px-4 grow flex flex-col justify-center">
		<slot />
	</div>
	<div class="h-0 border-white border-t-4 my-20"></div>
</div>

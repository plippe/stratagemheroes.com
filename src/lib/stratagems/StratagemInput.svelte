<script lang="ts">
	import { StratagemInput } from '$lib/stratagems/Stratagems';

	export let input: StratagemInput;
	const polygonPoints = new Map([
		[
			StratagemInput.Up,
			'256.003,0 18.618,316.508 153.601,316.508 153.601,512 358.4,512 358.4,316.508 493.382,316.508'
		],
		[
			StratagemInput.Right,
			'512,256.001 195.491,18.616 195.491,153.599 0,153.599 0,358.403 195.491,358.403 195.491,493.384'
		],
		[
			StratagemInput.Down,
			'358.402,195.5 358.402,0 153.598,0 153.598,195.5 18.616,195.5 255.991,512 493.384,195.5'
		],
		[
			StratagemInput.Left,
			'316.508,153.598 316.508,18.616 0,256 316.508,493.384 316.508,358.402 512,358.402 512,153.598'
		]
	]);
</script>

<svg viewBox="0 0 512 512" class={$$props.class}>
	<g>
		<polygon points={polygonPoints.get(input)} fill="currentColor" />
	</g>
</svg>

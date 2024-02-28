<script lang="ts">
	import { GameContext } from '$lib/games/GameContext';
	import { GameState } from '$lib/games/GameState';

	const round = GameContext.round.get;
	const roundTitles = ['Back-packing a punch', 'Overwhelming firepower', 'Rain down from above'];

	setTimeout(() => GameContext.state.set(GameState.Play), 2000);
</script>

<div class="text-center">
	<h1 class="text-white text-5xl mb-10 uppercase">Get Ready</h1>

	<div>
		<div class="text-white">Round</div>
		<div class="text-yellow text-3xl">{$round}</div>

		{#if 0 === $round % 3}
			<div class="text-white uppercase">
				{roundTitles[0]}
			</div>
		{/if}
	</div>
</div>

<script lang="ts">
	import { GameContext } from '$lib/games/GameContext';
	import { GameState } from '../GameState';

	const play = () => GameContext.state.set(GameState.GetReady);
</script>

<div class="text-center">
	<h1 class="text-white text-5xl font-bold mb-10 uppercase">Stratagem Heroes</h1>

	<button class="text-yellow hover:text-grey-light text-lg" on:click={play}>Start!</button>
</div>

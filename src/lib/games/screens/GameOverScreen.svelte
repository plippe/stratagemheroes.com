<script lang="ts">
	import { GameContext } from '$lib/games/GameContext';

	const score = GameContext.score.get;
	setTimeout(() => GameContext.reset(), 5000);
</script>

<div class="text-center flex flex-col justify-between">
	<h1 class="text-white text-5xl mb-10 uppercase">Game Over</h1>

	<div>
		<div class="text-white uppercase">Your final score</div>
		<div class="text-yellow text-3xl">{$score}</div>
	</div>
</div>

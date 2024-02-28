<script lang="ts">
	import { GameContext } from '$lib/games/GameContext';
	import { GameState } from '$lib/games/GameState';
	import { GameScore } from '$lib/games/GameScore';

	const score = GameContext.score.get;
	const round = GameContext.round.get;
	const perfect = GameContext.perfect.get;

	setTimeout(() => {
		GameContext.round.increase();
		GameContext.state.set(GameState.GetReady);
	}, 3000);
</script>

<div class="grid grid-cols-2 items-center">
	<div class="text-white text-left">Round Bonus</div>
	<div class="text-yellow text-4xl text-right">{GameScore.roundBonus($round)}</div>

	<div class="text-white text-left">Perfect Bonus</div>
	<div class="text-yellow text-4xl text-right">{GameScore.perfectBonus($perfect)}</div>

	<div class="text-white text-left">Total Score</div>
	<div class="text-yellow text-4xl text-right">{$score}</div>
</div>

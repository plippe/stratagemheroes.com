<script lang="ts">
	import { GameContext } from '$lib/games/GameContext';
	import { GameState } from '$lib/games/GameState';
	import { InputManager } from '$lib/settings/InputManager';
	import StratagemInputComponent from '$lib/stratagems/StratagemInput.svelte';
	import { Stratagems, StratagemInput } from '$lib/stratagems/Stratagems';
	import { GameScore } from '$lib/games/GameScore';

	GameContext.perfect.set(true);
	const round = GameContext.round.get;
	const score = GameContext.score.get;
	const perfect = GameContext.perfect.get;

	const stratagems = Stratagems.all.sort(() => Math.random() - 0.5).slice(0, 5 + $round);
	$: currentStratagemIndex = 0;
	$: currentStratagem = stratagems[currentStratagemIndex];
	$: currentStratagemInputIndex = 0;
	$: currentStratagemInput = currentStratagem.inputs[currentStratagemInputIndex];

	const durationMax = 10000;
	$: currentDuration = durationMax;
	$: currentDurationPercentage = (currentDuration * 100) / durationMax;
	$: color =
		currentDurationPercentage > 20
			? { text: 'text-yellow', bg: 'bg-yellow', border: 'border-yellow' }
			: { text: 'text-orange', bg: 'bg-orange', border: 'border-orange' };

	const intervalId = setInterval(() => {
		if (durationMax < currentDuration) {
			currentDuration = durationMax;
		} else if (0 < currentDuration) currentDuration -= 10;
		else {
			GameContext.state.set(GameState.GameOver);
			clearInterval(intervalId);
		}
	}, 10);

	const inputToStratagemInput = (event: KeyboardEvent) => {
		if (InputManager.upKeyDown(event)) return StratagemInput.Up;
		if (InputManager.rightKeyDown(event)) return StratagemInput.Right;
		if (InputManager.downKeyDown(event)) return StratagemInput.Down;
		if (InputManager.leftKeyDown(event)) return StratagemInput.Left;

		return null;
	};

	const onKeyDown = (event: KeyboardEvent) => {
		const input = inputToStratagemInput(event);

		if (currentStratagemInput !== input) {
			GameContext.perfect.set(false);
			currentStratagemInputIndex = 0;
			return;
		}

		const nextStratagemInputIndex = currentStratagemInputIndex + 1;
		if (currentStratagem.inputs.length > nextStratagemInputIndex) {
			currentStratagemInputIndex = nextStratagemInputIndex;
			return;
		}

		GameContext.score.increase(GameScore.stratagemPoints(currentStratagem));
		currentDuration += 2000;
		currentStratagemInputIndex = 0;

		const nextStratagemIndex = currentStratagemIndex + 1;
		if (stratagems.length > nextStratagemIndex) {
			currentStratagemIndex = nextStratagemIndex;
			return;
		}

		clearInterval(intervalId);

		GameContext.score.increase(GameScore.roundBonus($round));
		GameContext.score.increase(GameScore.perfectBonus($perfect));
		GameContext.state.set(GameState.Score);
	};
</script>

<svelte:window on:keyup={onKeyDown} />

<div class="flex gap-x-4 sm:gap-x-8 max-w-full">
	<div class="hidden sm:block text-left">
		<div class="text-white text-lg">Round</div>
		<div class="{color.text} text-3xl font-bold">{$round}</div>
	</div>
	<div class="flex-1 pt-4 min-w-0">
		<div class="flex items-center">
			<img
				src={currentStratagem.icon}
				alt={currentStratagem.name}
				class="border-4 {color.border} w-[25%] h-[25%] aspect-square"
			/>
			{#each stratagems.slice(currentStratagemIndex + 1, currentStratagemIndex + 6) as stratagem}
				<img src={stratagem.icon} alt={stratagem.name} class="w-[15%] h-[15%] aspect-square" />
			{/each}
		</div>
		<div class="text-grey-dark {color.bg} uppercase mb-4 truncate">{currentStratagem.name}</div>

		<div class="flex gap-x-2 justify-center items-center mb-8">
			{#each currentStratagem.inputs as input, index}
				<StratagemInputComponent
					{input}
					class="{currentStratagemInputIndex > index ? 'text-yellow' : 'text-grey-light'} w-12"
				/>
			{/each}
		</div>

		<div class="h-4 bg-grey-light">
			<div class="h-full {color.bg}" style="width: {currentDurationPercentage}%" />
		</div>
	</div>
	<div class="hidden sm:block text-right">
		<div class="{color.text} text-3xl font-bold">{$score}</div>
		<div class="text-white text-lg uppercase">score</div>
	</div>
</div>

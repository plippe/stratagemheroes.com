<script lang="ts">
	import { GameState } from '$lib/games/GameState';
	import { GameContext } from '$lib/games/GameContext';
	import TitleScreen from '$lib/games/screens/TitleScreen.svelte';
	import PlayScreen from '$lib/games/screens/PlayScreen.svelte';
	import ScoreScreen from '$lib/games/screens/ScoreScreen.svelte';
	import GetReadyScreen from '$lib/games/screens/GetReadyScreen.svelte';
	import GameOverScreen from '$lib/games/screens/GameOverScreen.svelte';

	let state = GameContext.state.get;
</script>

{#if GameState.Title === $state}
	<TitleScreen />
{:else if GameState.GetReady === $state}
	<GetReadyScreen />
{:else if GameState.Play === $state}
	<PlayScreen />
{:else if GameState.Score === $state}
	<ScoreScreen />
{:else if GameState.GameOver === $state}
	<GameOverScreen />
{/if}

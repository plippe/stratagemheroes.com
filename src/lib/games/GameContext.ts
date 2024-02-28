import { derived, writable } from 'svelte/store';
import { GameState } from '$lib/games/GameState';

const store = writable({ state: GameState.Title, score: 0, round: 1, perfect: true });

export const GameContext = {
	state: {
		get: derived(store, ($store) => $store.state),
		set: (state: GameState) => {
			store.update(($store) => {
				$store.state = state;
				return $store;
			});
		}
	},
	score: {
		get: derived(store, ($store) => $store.score),
		increase: (score: number) => {
			store.update(($store) => {
				$store.score += score;
				return $store;
			});
		}
	},
	round: {
		get: derived(store, ($store) => $store.round),
		increase: () => {
			store.update(($store) => {
				$store.round++;
				return $store;
			});
		}
	},
	perfect: {
		get: derived(store, ($store) => $store.perfect),
		set: (perfect: boolean) => {
			store.update(($store) => {
				$store.perfect = perfect;
				return $store;
			});
		}
	},
	reset: () => {
		store.update(($store) => {
			$store.state = GameState.Title;
			$store.score = 0;
			$store.round = 1;
			$store.perfect = true;
			return $store;
		});
	}
};

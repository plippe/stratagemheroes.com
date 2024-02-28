import type { Stratagem } from '$lib/stratagems/Stratagems';

export const GameScore = {
	stratagemPoints: (stratagem: Stratagem) => stratagem.inputs.length * 5,
	roundBonus: (round: number) => 50 + round * 25,
	perfectBonus: (perfect: boolean) => (perfect ? 100 : 0)
};

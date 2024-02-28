export const InputManager = {
	upKeyDown: (event: KeyboardEvent) => 'ArrowUp' === event.key,
	downKeyDown: (event: KeyboardEvent) => 'ArrowDown' === event.key,
	leftKeyDown: (event: KeyboardEvent) => 'ArrowLeft' === event.key,
	rightKeyDown: (event: KeyboardEvent) => 'ArrowRight' === event.key
};

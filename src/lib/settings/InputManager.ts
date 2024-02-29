let keyW = 'w';
let keyA = 'a';
let keyS = 's';
let keyD = 'd';

window.navigator.keyboard
	?.getLayoutMap()
	?.then((keyboard: KeyboardLayoutMap) => {
		keyW = keyboard.get('KeyW') || keyW;
		keyA = keyboard.get('KeyA') || keyA;
		keyS = keyboard.get('KeyS') || keyS;
		keyD = keyboard.get('KeyD') || keyD;

		console.log(keyW, keyA, keyS, keyD);
	})
	?.catch((error: Error) => console.error(error));

export const InputManager = {
	upKeyDown: (event: KeyboardEvent) => 'ArrowUp' === event.key || keyW === event.key,
	rightKeyDown: (event: KeyboardEvent) => 'ArrowRight' === event.key || keyD === event.key,
	downKeyDown: (event: KeyboardEvent) => 'ArrowDown' === event.key || keyS === event.key,
	leftKeyDown: (event: KeyboardEvent) => 'ArrowLeft' === event.key || keyA === event.key
};

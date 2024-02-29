// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface KeyboardLayoutMap extends Map<string, string> {}

	interface Navigator {
		keyboard:
			| undefined
			| {
					getLayoutMap: () => Promise<KeyboardLayoutMap>;
			  };
	}
}

export {};
/// <reference types="@sveltejs/kit" />

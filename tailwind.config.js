/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				white: '#FFFFFF',
				yellow: '#FBEA4E',
				grey: {
					light: '#868475',
					dark: '#2B2B2B'
				}
			}
		}
	},
	plugins: []
};

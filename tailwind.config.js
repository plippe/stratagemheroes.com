/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: '#FFFFFF',
			yellow: '#FBEA4E',
			orange: '#FB934E',
			grey: {
				light: '#868475',
				dark: '#2B2B2B'
			}
		},
		fontFamily: {
			sans: ['Electrolize', 'sans-serif']
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

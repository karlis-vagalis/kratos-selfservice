/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				xs: '400px'
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui'],
				serif: ['"Merriweather"', 'ui-serif'],
				mono: ['JetBrains Mono', 'ui-monospace'],
				display: ['Figtree', 'ui-sans-serif', 'system-ui']
			},
			colors: {
				aerospace: {
					50: '#fff6ec',
					100: '#ffecd3',
					200: '#ffd4a5',
					300: '#ffb56d',
					400: '#ff8a32',
					500: '#ff690a',
					600: '#ff4f00',
					700: '#cc3602',
					800: '#a12b0b',
					900: '#82260c',
					950: '#461004'
				}
			}
		}
	},
	plugins: []
};

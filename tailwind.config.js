/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				'tablet': '640px',
				// => @media (min-width: 640px) { ... }
		  
				'laptop': '1536px',
				// => @media (min-width: 1536px) { ... }
		  
				'desktop': '1920px',
				// => @media (min-width: 1920px) { ... }
			  },
			backgroundImage: {
				education: "url('/src/img/2.svg')",
				home: "url('/src/img/forest.jpg')",
			},
			colors: {
				clay: {
					100: "#e8e7df",
					200: "#d1cfbf",
					300: "#bbb69f",
					400: "#a49e7f",
					500: "#8d865f",
					600: "#716b4c",
					700: "#555039",
					800: "#383626",
					900: "#1c1b13",
				},
				almostWhite: {
					100: "#fcfcfc",
					200: "#fafafa",
					300: "#f7f7f7",
					400: "#f5f5f5",
					500: "#f2f2f2",
					600: "#c2c2c2",
					700: "#919191",
					800: "#616161",
					900: "#303030",
				},
				lightBlue: {
					100: "#e6ebed",
					200: "#ced7db",
					300: "#b5c2c8",
					400: "#9daeb6",
					500: "#849aa4",
					600: "#6a7b83",
					700: "#4f5c62",
					800: "#353e42",
					900: "#1a1f21",
				},
				stone: {
					100: "#e5e5e6",
					200: "#cbcccd",
					300: "#b2b2b3",
					400: "#98999a",
					500: "#7e7f81",
					600: "#656667",
					700: "#4c4c4d",
					800: "#323334",
					900: "#19191a",
				},
				elephant: {
					100: "#cfd4d8",
					200: "#9faab0",
					300: "#6e7f89",
					400: "#3e5561",
					500: "#0e2a3a",
					600: "#0b222e",
					700: "#081923",
					800: "#061117",
					900: "#03080c",
				},
			},
		},
	},
	plugins: [],
};

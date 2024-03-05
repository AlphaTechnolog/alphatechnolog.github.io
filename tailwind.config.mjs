/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: "#161617",
				'background-darker': "#151516",
				'background-shade': "#181819",
				'background-border': "#212123",
				red: "#ea83a5",
				blue: "#aca1cf",
				magenta: "#e29eca",
				green: "#90b99f"
			},
		},
	},
	plugins: [],
}

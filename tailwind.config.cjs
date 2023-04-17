/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				worksans: ['Work Sans', 'sans-serif'],
				gillsans: ["Gill", "sans-serif"],
				sli: ["Sli", "serif"],
				sligoil: ["Sligoil-Micro", "serif"]
			  },
			  
		},
	},
	plugins: [],
}


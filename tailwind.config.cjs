/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				worksans: ['Work Sans', 'sans-serif'],
				sli: ["Sli", "serif"],
			  },
			  cursor: {
				default: 'url(/public/Selector.png), default',
				pointer: 'url(/public/Selector.png), pointer',
			  },
		},
	},
	plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		
		extend: {
			fontFamily: {
				worksans: ['Work Sans', 'sans-serif'],
				
				gillsans: ['Gill Sans', 'sans-serif']
                                                
			  },
			  colors: {
			
				'bermuda': ' #FFF200',
			  },
			  
		},
	},
	plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		spacing: {
  			xs: '16px',
  			sm: '24px',
  			md: '32px',
  			lg: '40px',
  			xl: '48px'
  		},
  		colors: {
  			'primary-blue': {
  				'200': '#C4E1FF',
  				'300': '#94CEFD',
  				'400': '#64BFFA',
  				'900': '#35B3F2'
  			},
  			'secondary-green': {
  				'900': '#066F8C'
  			},
  			c_gray: {
  				'100': '#F8F8FD',
  				'200': '#EFEFF8',
  				'500': '#8193B2',
  				'600': '#384B6B',
  				'700': '#233046',
  				'800': '#1D2739',
  				'900': '#182131'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}


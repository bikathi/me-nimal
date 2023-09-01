/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html", "./src/**/*.{html, js}", "./assets/*.js"],
	theme: {
		extend: {
			fontFamily: {
				josefin: ["Josefin Sans", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
			scale: {
				102: "1.02",
			},
		},
	},
	plugins: [],
};

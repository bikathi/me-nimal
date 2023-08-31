/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html", "./src/**/*.{html, js}"],
	theme: {
		extend: {
      fontFamily: {
        josefin: ['Josefin Sans', "sans-serif"]
      }
    },
	},
	plugins: [],
};

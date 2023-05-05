/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'catppuccin': "url('../../public/images/magenta-blue.png')",
  //     },
  // }
  // },
  plugins: [
		require("@tailwindcss/forms"),
		require("@catppuccin/tailwindcss")({
			prefix: false,
			defaultFlavour: "latte",
		}),
  ],
};

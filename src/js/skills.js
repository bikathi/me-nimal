const languages = [
	{
		icon: "img/svg/java.svg",
		name: "Java",
	},
	{
		icon: "img/svg/javascript-logo.svg",
		name: "Javascript",
	},
	{
		icon: "img/svg/w3-html.svg",
		name: "HTML5",
	},
	{
		icon: "img/svg/w3-css.svg",
		name: "CSS3",
	},
];

const tools = [
	{
		icon: "img/svg/spring.svg",
		name: "Spring",
	},
	{
		icon: "img/svg/vuejs.svg",
		name: "VueJS",
	},
	{
		icon: "img/svg/nuxtjs.svg",
		name: "NuxtJS",
	},
	{
		icon: "img/svg/tailwindcss.svg",
		name: "Tailwind",
	},
];

function renderLanguageSkills() {
	const container = document.getElementById("languages");

	languages.forEach((language) => {
		const div = document.createElement("div");
		const img = document.createElement("img");
		const name = document.createElement("h1");

		img.setAttribute("src", language.icon);
		img.setAttribute("alt", "language-icon");

		// styles
		div.classList.add(
			"p-2",
			"h-16",
			"flex",
			"flex-col",
			"justify-between",
			"items-center",
			"space-y-5"
		);
		name.classList.add("font-josefin");

		name.textContent = language.name;

		div.appendChild(img);
		div.appendChild(name);

		container.appendChild(div);
	});
}

function renderToolsSkills() {
	const container = document.getElementById("tools");

	tools.forEach((tool) => {
		const div = document.createElement("div");
		const img = document.createElement("img");
		const name = document.createElement("h1");

		img.setAttribute("src", tool.icon);
		img.setAttribute("alt", "tool-icon");

		// styles
		div.classList.add(
			"p-2",
			"h-16",
			"flex",
			"flex-col",
			"justify-between",
			"items-center",
			"space-y-5"
		);
		name.classList.add("font-josefin");

		name.textContent = tool.name;

		div.appendChild(img);
		div.appendChild(name);

		container.appendChild(div);
	});
}

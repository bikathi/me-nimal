const myEducation = [
	{
		school: "Infill Academy",
		tag: "Primary Education",
		duration: "Feb 2006 - Dec 2015",
		description: "Completed my primary education",
	},
	{
		school: "Kakamega School",
		tag: "Secondary Education",
		duration: "Feb 2016 - Dec 2019",
		description: "Completed my secondary education",
	},
	{
		school: "KCA University",
		tag: "Primary Education",
		duration: "Sept 2020 - Dec 2024",
		description: "Undertaking my BSc in Software Development",
	},
];

function renderEducationObjects() {
	const container = document.getElementById("education");

	myEducation.map((data) => {
		let div = document.createElement("div");
		let img = document.createElement("img");
		let contentDiv = document.createElement("div");
		let h1 = document.createElement("h1");
		let h2 = document.createElement("h2");
		let p = document.createElement("p");

		h1.textContent = data.school;
		h2.textContent = `${data.tag} | ${data.duration}`;
		p.textContent = data.description;

		// for the image
		img.setAttribute("src", "/img/books.jpg");

		// Tailwind styles
		div.classList.add(
			"rounded-md",
			"shadow-md",
			"h-fit",
			"flex",
			"flex-col",
			"transition-all",
			"hover:scale-102",
			"ease-in-out",
			"duration-200",
			"bg-[#561786]"
		);
		img.classList.add("h-72", "w-full", "rounded-md");
		contentDiv.classList.add(
			"p-2",
			"text-white",
			"flex-grow",
			"rounded-b-md",
			"font-poppins",
			"space-y-1"
		);
		h1.classList.add("font-inter", "text-2xl");

		div.appendChild(img);
		div.appendChild(contentDiv);
		contentDiv.appendChild(h1);
		contentDiv.appendChild(h2);
		contentDiv.appendChild(p);

		container.appendChild(div);
	});
}

const projects = [
	{
		name: "hh-chats",
		description:
			"A minimal and chat UI I developed in VueJS, SockJS, AMQP and Websockets. Through this, I learnt of how websockets and real-time chat applications work from scratch coding with no SASS plugins",
		link: "https://github.com/bikathi/hh-chats",
	},
	{
		name: "meme gen",
		description:
			"A super simple(still work-in-progress) meme generator I am creating in VueJS for generating memes. Will be super simple and free for all to use with a public URL hosted on Github",
		link: "https://github.com/bikathi/meme-gen",
	},
	{
		name: "cinemax",
		description:
			"My first ever Server-Side-Rendered fullstack application written in NuxtJS. This project is special to me as it was how I learnt about Prisma, NuxtJS, a bit of SEO and how Server-Side-Rendering works and when to use it. I also won third place with this project at Africas Talking Hackathon on 27th August, 2023",
		link: "https://africastalking.com/",
	},
	{
		name: "stk-clone",
		description:
			"This was my first ever Flutter project as I was learning how Flutter works. It's a simple clone that mimics some of the UI(not the logic and functionality) of the Safaricom STK that comes pre-installed on every Safaricom SIM card",
		link: "https://github.com/bikathi/stk-clone",
	},
	{
		name: "library app cache",
		description:
			"As the name suggests, this minimal project was designed to help me learn of how caching works in Spring Boot using Redis as the cache database. It does nothing else but store books",
		link: "https://github.com/bikathi/libraryapp-cache",
	},
	{
		name: "simple flutter calc",
		description:
			"This was another one of those Flutter projects where I created a crazy simple calculator. Both Flutter apps are installable but have no certificates",
		link: "https://github.com/bikathi/simple-flutter-calc",
	},
	{
		name: "typi",
		description:
			"Typi is a typing tutor written in VueJS. Admittedly a ton of features are missing like a grading system and a timing function but you can quickly practise your typing skills on it",
		link: "https://github.com/bikathi/typi",
	},
	{
		name: "litt-le",
		description:
			"Litt-le is designed to be a self-hosted URL-shortenner(libke Bittly) written with Spring backend and a VueJS frontend",
		link: "https://github.com/bikathi/litt-le",
	},
	{
		name: "cli-Google-translate",
		description:
			"This application is terminal-based and allowed you to have Google Transalte directly in your terminal. Written in Java and Picocli framework",
		link: "https://github.com/bikathi/cli-google-translate",
	},
	{
		name: "IMDb-on-terminal",
		description:
			"Litt-le is designed to be a self-hosted URL-shortenner(libke Bittly) written with Spring backend and a VueJS frontend",
		link: "https://github.com/bikathi/litt-le",
	},
	{
		name: "AOMS(Animal Orphanage Management System)",
		description:
			"The project closest to my heart. It was my first ever full-stack software project with a Java Backend and VueJS User Interface and was also my school project. Helped me get a good grade and also got me my first job probably. The link below takes you to the UI project from which you can navigate to the backend project",
		link: "https://github.com/bikathi/aoms-frontend",
	},
	{
		name: "tier-app",
		description: "A simple tiering/ ranking app written in VueJS",
		link: "https://github.com/bikathi/tier-app",
	},
	{
		name: "simple-vue-3-calc",
		description:
			"Also another project that is close to my heart as it was my first ever VueJS project. It's a fully functional calculator complete with basic arithmetic opertions and a history tracker, right in your browser",
		link: "https://github.com/bikathi/simple-vue3-calc",
	},
	{
		name: "to-do-app",
		description:
			"This was arguably my first ever Java and programming project. It is a simple terminal application that gives you a todo app right on your terminal",
		link: "https://github.com/bikathi/to-do-app",
	},
];

function renderProjects() {
	const target = document.getElementById("projects-body");

	projects.forEach((project) => {
		const div = document.createElement("div");
		const h1 = document.createElement("h1");
		const p = document.createElement("p");
		const link = document.createElement("a");

		// set the project details
		link.setAttribute("href", project.link);
		link.textContent = "Github";
		link.setAttribute("target", "_blank");
		p.textContent = project.description;
		h1.textContent = project.name;

		// append details into the div
		div.appendChild(h1);
		div.appendChild(p);
		div.appendChild(link);

		// class styles
		div.classList.add(
			"p-2",
			"border",
			"rounded-md",
			"bg-red-500",
			"shadow-md",
			"my-2",
			"transition-all",
			"hover:scale-102",
			"ease-in-out",
			"duration-200"
		);

		h1.classList.add("font-josefin", "text-2xl", "p-4");
		p.classList.add("font-poppins", "my-2");
		link.classList.add("socials", "after:bg-blue");

		target.appendChild(div);
	});
}
